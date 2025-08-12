<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Form Submission</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f8f9fa;
        }
        .container {
            background: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .header {
            text-align: center;
            margin-bottom: 30px;
            padding-bottom: 20px;
            border-bottom: 2px solid #e9ecef;
        }
        .header h1 {
            color: #6366f1;
            margin: 0;
            font-size: 24px;
        }
        .field {
            margin-bottom: 20px;
        }
        .field-label {
            font-weight: bold;
            color: #495057;
            display: block;
            margin-bottom: 5px;
        }
        .field-value {
            background: #f8f9fa;
            padding: 10px;
            border-radius: 5px;
            border-left: 3px solid #6366f1;
        }
        .message-field {
            background: #f8f9fa;
            padding: 15px;
            border-radius: 5px;
            border-left: 3px solid #6366f1;
            white-space: pre-wrap;
        }
        .footer {
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #e9ecef;
            text-align: center;
            color: #6c757d;
            font-size: 14px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>New Contact Form Submission</h1>
            <p>You've received a new message through your website's contact form.</p>
        </div>

        <div class="field">
            <span class="field-label">Name:</span>
            <div class="field-value">{{ $data['name'] }}</div>
        </div>

        <div class="field">
            <span class="field-label">Phone Number:</span>
            <div class="field-value">{{ $data['phone'] }}</div>
        </div>

        @if(!empty($data['company']))
        <div class="field">
            <span class="field-label">Company:</span>
            <div class="field-value">{{ $data['company'] }}</div>
        </div>
        @endif

        <div class="field">
            <span class="field-label">Service Interest:</span>
            <div class="field-value">{{ $data['service'] }}</div>
        </div>

        <div class="field">
            <span class="field-label">Message:</span>
            <div class="message-field">{{ $data['message'] }}</div>
        </div>

        <div class="footer">
            <p>This message was sent from your website's contact form on {{ date('F j, Y \a\t g:i A') }}</p>
            <p><strong>Quest Digital Marketing Agency</strong></p>
        </div>
    </div>
</body>
</html>
