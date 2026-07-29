resource "aws_dynamodb_table" "waitlist" {
  name         = "${local.name}-waitlist"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "id"

  attribute {
    name = "id"
    type = "S"
  }

  attribute {
    name = "type"
    type = "S"
  }

  attribute {
    name = "createdAt"
    type = "S"
  }

  attribute {
    name = "email"
    type = "S"
  }

  # Used for waitlist position counting and per-type counts.
  global_secondary_index {
    name            = "type-date-index"
    hash_key        = "type"
    range_key       = "createdAt"
    projection_type = "ALL"
  }

  # Used for the duplicate-signup check.
  global_secondary_index {
    name            = "email-index"
    hash_key        = "email"
    projection_type = "ALL"
  }
}
