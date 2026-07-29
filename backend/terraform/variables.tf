# us-east-2 to sit alongside the Rust product API, and because SES has
# production access + verified identities there (us-east-1 is still sandboxed,
# which silently broke every confirmation email on the old stack).
variable "region" {
  description = "AWS region for all resources."
  type        = string
  default     = "us-east-2"
}

variable "project" {
  description = "Project name prefix used for all resource names."
  type        = string
  default     = "rivomed"
}

variable "environment" {
  description = "Deployment environment (also the API Gateway stage name)."
  type        = string
  default     = "dev"
}

# Must be an SES identity verified in var.region. pathsdata.com is verified in
# us-east-2 today; switch this to noreply@rivomed.com once rivomed.com is
# verified there, so the sender matches the branding in the email body.
variable "ses_from_email" {
  description = "Verified SES sender address for waitlist confirmation emails."
  type        = string
  default     = "dshah@pathsdata.com"
}

variable "cors_allow_origins" {
  description = "Origins allowed to call the API."
  type        = list(string)
  default     = ["https://www.rivomed.com", "https://rivomed.com"]
}
