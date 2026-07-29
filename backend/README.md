# Waitlist backend

Serverless backend behind the waitlist form on rivomed.com.

Originally recovered from the live AWS deployment on 2026-07-28 (the source had been
lost locally), then rebranded off ClearPath and migrated from us-east-1 to us-east-2.
Unlike the recovered version, this Terraform **has** been applied and owns its state.

## Live deployment (us-east-2)

| | |
|---|---|
| Account | `503561431839` |
| Region | `us-east-2` |
| API | `rivomed-dev-waitlist-api` (`hje5sttes1`), HTTP API v2, stage `dev` |
| Base URL | `https://hje5sttes1.execute-api.us-east-2.amazonaws.com/dev` |
| Lambda | `rivomed-dev-waitlist`, python3.11, 256 MB, 10s |
| Table | `rivomed-dev-waitlist` (PAY_PER_REQUEST) |
| SES sender | `dshah@pathsdata.com` |

Resources are named `rivomed-dev-waitlist*` because the Rust product API already owns
`rivomed-dev-api` / `rivomed-dev-api-exec` in this region.

## Not to be confused with the Rust API

Two unrelated backends share the `rivomed-dev-` prefix. This one serves only the
landing-page waitlist form.

The **product** API is Rust (`provided.al2023`, arm64), lives in the separate `rivomed`
repo under `api/rivomed-api`, and runs as `rivomed-dev-api` at
`https://po227ti8ng.execute-api.us-east-2.amazonaws.com`. It serves providers /
practices / bookings / documents / availability and has no `/waitlist` route.

## Why us-east-2

Not just to sit next to the Rust API. **SES in us-east-1 was never verified and is
still sandboxed**, so every confirmation email the old stack tried to send failed:

```
MessageRejected ... Email address is not verified. The following identities
failed the check in region US-EAST-1: dshah@pathsdata.com, ...
```

The Lambda catches and logs that, so signups still returned 201 and no one noticed.
us-east-2 has SES production access (50k/day quota) and verified identities, and
confirmation emails were verified working after the migration.

## Endpoints

- `POST /waitlist` — join. Requires `type` (`patient` \| `provider` \| `practice`),
  `email`, `firstName`, `lastName`. Optional `phone`, `source`, plus per-type fields:
  provider → `specialty`, `licenseState`; practice → `practiceName`, `providerCount`;
  patient → `zipCode`. Returns `201` with waitlist position, `409` if the email is
  already signed up for that type.
- `GET /waitlist/count` — totals overall and per type.

NPI is no longer collected or stored. An `npi` field in the request body is ignored.

CORS is owned by the API Gateway `cors_configuration` and scoped to `rivomed.com` /
`www.rivomed.com`. The Lambda deliberately does **not** emit `Access-Control-*`
headers — duplicates would be rejected by browsers.

## Frontend wiring

`app/waitlist/page.tsx` reads `NEXT_PUBLIC_API_URL` and POSTs to `${API_URL}/waitlist`.
`.env.local` (gitignored) holds it for local dev; production is set in Vercel.

## Deploying

```bash
cd terraform
terraform init
terraform plan
terraform apply
```

State is local (`terraform.tfstate`, gitignored) — it lives only on this machine, so
back it up or move it to an S3 backend before a second person touches this stack.

Lambda-only code change without Terraform:

```bash
cd lambda && zip -r ../waitlist.zip . && cd ..
aws lambda update-function-code --region us-east-2 \
  --function-name rivomed-dev-waitlist --zip-file fileb://waitlist.zip
```

## Follow-ups

- **Verify `rivomed.com` in SES us-east-2** and set `ses_from_email` to
  `noreply@rivomed.com`. Emails are Rivomed-branded but still sent from a
  pathsdata.com address.
- `print(f"Event: ...")` logs the full request — names, emails, IPs — to CloudWatch.
- The duplicate-email check is a query-then-put with no condition expression, so two
  simultaneous submits can both write.
- `datetime.utcnow()` is deprecated; will warn if the runtime moves past 3.11.
