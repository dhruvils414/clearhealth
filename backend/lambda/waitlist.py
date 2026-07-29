"""
Rivomed Waitlist API
Lambda handler for API Gateway HTTP API (v2)
"""

import json
import os
import re
import uuid
import time
from datetime import datetime
from typing import Any, Dict

import boto3
from boto3.dynamodb.conditions import Key

# Initialize AWS clients
dynamodb = boto3.resource('dynamodb')
ses = boto3.client('ses')

TABLE_NAME = os.environ.get('DYNAMODB_TABLE', 'rivomed-dev-waitlist')
FROM_EMAIL = os.environ.get('SES_FROM_EMAIL', 'noreply@rivomed.com')

VALID_TYPES = ['patient', 'provider', 'practice']


def response(status_code: int, body: dict) -> dict:
    """Create API Gateway v2 response.

    CORS is owned by the API Gateway cors_configuration, not by this handler.
    Emitting Access-Control-* here too risks duplicate headers, which browsers
    reject outright.
    """
    return {
        'statusCode': status_code,
        'headers': {'Content-Type': 'application/json'},
        'body': json.dumps(body),
    }


def success(data: Any) -> dict:
    return response(200, {'success': True, 'data': data})


def created(data: Any) -> dict:
    return response(201, {'success': True, 'data': data})


def error(message: str, status_code: int = 400) -> dict:
    return response(status_code, {'success': False, 'error': message})


def generate_id() -> str:
    """Generate unique ID."""
    timestamp = hex(int(time.time()))[2:]
    unique = uuid.uuid4().hex[:8]
    return f"wl_{timestamp}{unique}"


def is_valid_email(email: str) -> bool:
    """Validate email format."""
    pattern = r'^[^\s@]+@[^\s@]+\.[^\s@]+$'
    return bool(re.match(pattern, email))


def get_waitlist_position(waitlist_type: str, created_at: str) -> int:
    """Get position in waitlist for given type."""
    table = dynamodb.Table(TABLE_NAME)
    
    result = table.query(
        IndexName='type-date-index',
        KeyConditionExpression=Key('type').eq(waitlist_type) & Key('createdAt').lte(created_at),
        Select='COUNT'
    )
    
    return result.get('Count', 1)


def send_confirmation_email(entry: dict, position: int) -> None:
    """Send confirmation email via SES."""
    type_labels = {
        'patient': 'Patient',
        'provider': 'Healthcare Provider',
        'practice': 'Medical Practice',
    }
    
    type_messages = {
        'patient': "Get ready for healthcare that actually makes sense — clear prices, easy booking, and doctors who have time for you.",
        'provider': "Keep 70% of every visit. Get paid same-day. Zero insurance paperwork. We're building something different.",
        'practice': "Bring your entire practice to Rivomed. We handle billing, you handle patients. Simple.",
    }
    
    first_name = entry.get('firstName', 'there')
    email = entry['email']
    waitlist_type = entry['type']
    
    html_body = f"""
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f5f5f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #050505 0%, #1a1a1a 100%); padding: 40px; text-align: center;">
              <h1 style="margin: 0; font-size: 28px; font-weight: 800; color: #4ADE80;">
                Rivomed
              </h1>
              <p style="margin: 8px 0 0; font-size: 13px; color: rgba(255,255,255,0.6); letter-spacing: 0.5px;">
                Healthcare. Revived.
              </p>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              <h2 style="margin: 0 0 20px; font-size: 24px; font-weight: 700; color: #111;">
                You're on the list, {first_name}! 🎉
              </h2>
              
              <p style="margin: 0 0 20px; font-size: 16px; line-height: 1.6; color: #555;">
                Thanks for joining the Rivomed waitlist as a <strong>{type_labels[waitlist_type]}</strong>.
              </p>
              
              <p style="margin: 0 0 30px; font-size: 16px; line-height: 1.6; color: #555;">
                {type_messages[waitlist_type]}
              </p>
              
              <!-- Position Badge -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background: linear-gradient(135deg, #4ADE80 0%, #22c55e 100%); border-radius: 12px; margin-bottom: 30px;">
                <tr>
                  <td style="padding: 24px; text-align: center;">
                    <p style="margin: 0 0 8px; font-size: 14px; color: rgba(255,255,255,0.8); text-transform: uppercase; letter-spacing: 1px;">
                      Your Position
                    </p>
                    <p style="margin: 0; font-size: 48px; font-weight: 800; color: #fff;">
                      #{position}
                    </p>
                  </td>
                </tr>
              </table>
              
              <p style="margin: 0 0 20px; font-size: 16px; line-height: 1.6; color: #555;">
                We're launching soon and will reach out when it's your turn.
              </p>
              
              <p style="margin: 0; font-size: 16px; line-height: 1.6; color: #555;">
                — The Rivomed Team
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f9fafb; padding: 24px 40px; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0; font-size: 12px; color: #9ca3af; text-align: center;">
                Rivomed · Operated by PATHSDATA LLC<br>
                <a href="https://www.rivomed.com" style="color: #4ADE80; text-decoration: none;">rivomed.com</a>
              </p>
            </td>
          </tr>
          
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    """
    
    text_body = f"""
You're on the list, {first_name}!

Thanks for joining the Rivomed waitlist as a {type_labels[waitlist_type]}.

{type_messages[waitlist_type]}

Your Position: #{position}

We're launching soon and will reach out when it's your turn.

— The Rivomed Team
rivomed.com
    """
    
    try:
        ses.send_email(
            Source=FROM_EMAIL,
            Destination={'ToAddresses': [email]},
            Message={
                'Subject': {
                    'Data': f"You're #{position} on the Rivomed waitlist!",
                    'Charset': 'UTF-8',
                },
                'Body': {
                    'Html': {'Data': html_body, 'Charset': 'UTF-8'},
                    'Text': {'Data': text_body, 'Charset': 'UTF-8'},
                },
            },
        )
    except Exception as e:
        print(f"Email send failed: {e}")


def join_waitlist(event: dict) -> dict:
    """Handle POST /waitlist - Join the waitlist."""
    try:
        # Parse body
        body = json.loads(event.get('body') or '{}')
        
        waitlist_type = body.get('type')
        email = body.get('email', '').lower().strip()
        first_name = body.get('firstName', '').strip()
        last_name = body.get('lastName', '').strip()
        phone = body.get('phone', '').strip()
        
        # Validate required fields
        if not waitlist_type or not email or not first_name or not last_name:
            return error('Type, email, first name, and last name are required')
        
        if waitlist_type not in VALID_TYPES:
            return error('Type must be patient, provider, or practice')
        
        if not is_valid_email(email):
            return error('Invalid email format')
        
        # Check for duplicate
        table = dynamodb.Table(TABLE_NAME)
        
        existing = table.query(
            IndexName='email-index',
            KeyConditionExpression=Key('email').eq(email),
            FilterExpression='#t = :type',
            ExpressionAttributeNames={'#t': 'type'},
            ExpressionAttributeValues={':type': waitlist_type}
        )
        
        if existing.get('Items'):
            return error('This email is already on the waitlist', 409)
        
        # Create entry
        now = datetime.utcnow().isoformat() + 'Z'
        entry_id = generate_id()
        
        entry = {
            'id': entry_id,
            'type': waitlist_type,
            'email': email,
            'firstName': first_name,
            'lastName': last_name,
            'createdAt': now,
            'source': body.get('source', 'website'),
        }
        
        # Add optional fields
        if phone:
            entry['phone'] = phone
        
        # Provider-specific fields
        if waitlist_type == 'provider':
            if body.get('specialty'):
                entry['specialty'] = body['specialty']
            if body.get('licenseState'):
                entry['licenseState'] = body['licenseState'].upper()
        
        # Practice-specific fields
        if waitlist_type == 'practice':
            if body.get('practiceName'):
                entry['practiceName'] = body['practiceName']
            if body.get('providerCount'):
                entry['providerCount'] = int(body['providerCount'])
        
        # Patient-specific fields
        if waitlist_type == 'patient':
            if body.get('zipCode'):
                entry['zipCode'] = body['zipCode']
        
        # Add request metadata
        request_context = event.get('requestContext', {})
        if request_context.get('http', {}).get('sourceIp'):
            entry['ipAddress'] = request_context['http']['sourceIp']
        
        headers = event.get('headers', {})
        if headers.get('user-agent'):
            entry['userAgent'] = headers['user-agent']
        
        # Save to DynamoDB
        table.put_item(Item=entry)
        
        # Get position
        position = get_waitlist_position(waitlist_type, now)
        
        # Send confirmation email
        send_confirmation_email(entry, position)
        
        return created({
            'message': f"You're on the list, {first_name}!",
            'position': position,
            'type': waitlist_type,
        })
        
    except json.JSONDecodeError:
        return error('Invalid JSON body')
    except Exception as e:
        print(f"Join waitlist error: {e}")
        return error('Failed to join waitlist. Please try again.', 500)


def get_count(event: dict) -> dict:
    """Handle GET /waitlist/count - Get waitlist counts."""
    try:
        table = dynamodb.Table(TABLE_NAME)
        
        counts = {}
        for t in VALID_TYPES:
            result = table.query(
                IndexName='type-date-index',
                KeyConditionExpression=Key('type').eq(t),
                Select='COUNT'
            )
            counts[t] = result.get('Count', 0)
        
        total = sum(counts.values())
        
        # Check if specific type requested
        query_params = event.get('queryStringParameters') or {}
        requested_type = query_params.get('type')
        
        data = {
            'total': total,
            'byType': counts,
        }
        
        if requested_type and requested_type in VALID_TYPES:
            data[requested_type] = counts[requested_type]
        
        return success(data)
        
    except Exception as e:
        print(f"Get count error: {e}")
        return error('Failed to get waitlist count', 500)


def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    """
    Main Lambda handler - routes requests to appropriate function.
    Works with API Gateway HTTP API (v2).
    """
    print(f"Event: {json.dumps(event)}")
    
    # Get route info from API Gateway v2 format
    request_context = event.get('requestContext', {})
    http = request_context.get('http', {})
    method = http.get('method', event.get('httpMethod', ''))
    path = http.get('path', event.get('path', ''))
    
    # Strip stage prefix (e.g., /dev/waitlist -> /waitlist)
    # API Gateway HTTP API includes stage in path
    stage = request_context.get('stage', '')
    if stage and path.startswith(f'/{stage}'):
        path = path[len(f'/{stage}'):]
    
    # Ensure path starts with /
    if not path.startswith('/'):
        path = '/' + path
    
    print(f"Method: {method}, Path: {path}")
    
    # Route to appropriate handler
    if method == 'POST' and path == '/waitlist':
        return join_waitlist(event)
    
    elif method == 'GET' and path == '/waitlist/count':
        return get_count(event)
    
    elif method == 'OPTIONS':
        # Handle CORS preflight
        return response(200, {})
    
    else:
        return error(f'Not found: {method} {path}', 404)
