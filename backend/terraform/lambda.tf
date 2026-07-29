data "archive_file" "waitlist" {
  type        = "zip"
  source_dir  = "${path.module}/../lambda"
  output_path = "${path.module}/build/waitlist.zip"
}

resource "aws_iam_role" "lambda" {
  # -waitlist- prefix throughout: the Rust product API already owns
  # rivomed-dev-api / rivomed-dev-api-exec in this region.
  name = "${local.name}-waitlist-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Effect    = "Allow"
      Action    = "sts:AssumeRole"
      Principal = { Service = "lambda.amazonaws.com" }
    }]
  })
}

resource "aws_iam_role_policy_attachment" "lambda_basic" {
  role       = aws_iam_role.lambda.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
}

resource "aws_iam_role_policy" "lambda" {
  name = "${local.name}-waitlist-policy"
  role = aws_iam_role.lambda.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Action = [
          "dynamodb:PutItem",
          "dynamodb:Query",
        ]
        Resource = [
          aws_dynamodb_table.waitlist.arn,
          "${aws_dynamodb_table.waitlist.arn}/index/*",
        ]
      },
      {
        Effect   = "Allow"
        Action   = ["ses:SendEmail", "ses:SendRawEmail"]
        Resource = "*"
      },
    ]
  })
}

resource "aws_lambda_function" "waitlist" {
  function_name    = "${local.name}-waitlist"
  role             = aws_iam_role.lambda.arn
  handler          = "waitlist.handler"
  runtime          = "python3.11"
  timeout          = 10
  memory_size      = 256
  filename         = data.archive_file.waitlist.output_path
  source_code_hash = data.archive_file.waitlist.output_base64sha256

  environment {
    variables = {
      DYNAMODB_TABLE = aws_dynamodb_table.waitlist.name
      ENVIRONMENT    = var.environment
      SES_FROM_EMAIL = var.ses_from_email
    }
  }
}

resource "aws_lambda_permission" "apigw" {
  statement_id  = "AllowAPIGatewayInvoke"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.waitlist.function_name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_apigatewayv2_api.api.execution_arn}/*/*"
}
