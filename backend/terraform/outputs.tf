output "api_url" {
  description = "Base URL for the API. Set this as NEXT_PUBLIC_API_URL in the frontend."
  value       = aws_apigatewayv2_stage.stage.invoke_url
}

output "waitlist_table" {
  value = aws_dynamodb_table.waitlist.name
}

output "lambda_name" {
  value = aws_lambda_function.waitlist.function_name
}
