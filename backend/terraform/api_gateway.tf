resource "aws_apigatewayv2_api" "api" {
  name          = "${local.name}-waitlist-api"
  protocol_type = "HTTP"

  cors_configuration {
    allow_credentials = false
    allow_headers     = ["authorization", "content-type"]
    allow_methods     = ["GET", "POST", "OPTIONS"]
    allow_origins     = var.cors_allow_origins
    max_age           = 300
  }
}

resource "aws_apigatewayv2_integration" "waitlist" {
  api_id                 = aws_apigatewayv2_api.api.id
  integration_type       = "AWS_PROXY"
  integration_uri        = aws_lambda_function.waitlist.invoke_arn
  payload_format_version = "2.0"
}

resource "aws_apigatewayv2_route" "join" {
  api_id    = aws_apigatewayv2_api.api.id
  route_key = "POST /waitlist"
  target    = "integrations/${aws_apigatewayv2_integration.waitlist.id}"
}

resource "aws_apigatewayv2_route" "count" {
  api_id    = aws_apigatewayv2_api.api.id
  route_key = "GET /waitlist/count"
  target    = "integrations/${aws_apigatewayv2_integration.waitlist.id}"
}

resource "aws_apigatewayv2_stage" "stage" {
  api_id      = aws_apigatewayv2_api.api.id
  name        = var.environment
  auto_deploy = true
}
