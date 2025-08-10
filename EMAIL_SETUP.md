# Email Configuration Instructions

## Contact Form Email Setup

The contact form is now configured to send emails when users submit the form. Here's how to set up email delivery:

### Current Configuration
- **Driver**: `log` (for development/testing)
- **From Address**: `contact@questagency.com`
- **From Name**: `Quest`

### For Development/Testing
The current setup uses the `log` driver, which means emails are logged to `storage/logs/laravel.log` instead of being sent. This is perfect for testing the contact form functionality.

### For Production

#### Option 1: SMTP (Recommended)
Update your `.env` file with these settings:

```env
MAIL_MAILER=smtp
MAIL_HOST=your-smtp-server.com
MAIL_PORT=587
MAIL_USERNAME=your-email@yourdomain.com
MAIL_PASSWORD=your-email-password
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS="contact@questagency.com"
MAIL_FROM_NAME="Quest Digital Marketing"
```

#### Option 2: Gmail SMTP
```env
MAIL_MAILER=smtp
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USERNAME=your-gmail@gmail.com
MAIL_PASSWORD=your-app-password
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS="contact@questagency.com"
MAIL_FROM_NAME="Quest Digital Marketing"
```

**Note**: For Gmail, you need to use an "App Password" instead of your regular password.

#### Option 3: AWS SES
```env
MAIL_MAILER=ses
AWS_ACCESS_KEY_ID=your-access-key
AWS_SECRET_ACCESS_KEY=your-secret-key
AWS_DEFAULT_REGION=us-east-1
MAIL_FROM_ADDRESS="contact@questagency.com"
MAIL_FROM_NAME="Quest Digital Marketing"
```

### WhatsApp Configuration
Update the phone number in `resources/js/Components/WhatsAppFloat.tsx`:

```typescript
const phoneNumber = "+201234567890"; // Replace with your actual WhatsApp number
```

### Testing the Contact Form
1. Visit `/contact` on your website
2. Fill out and submit the form
3. Check `storage/logs/laravel.log` for the email content (in development)
4. In production, the email will be sent to the configured address

### Form Validation
The contact form includes:
- **Required fields**: Name, Email, Service, Message
- **Email validation**: Proper email format required
- **Message length**: Minimum 10 characters
- **Error handling**: User-friendly error messages displayed

### Features Implemented
✅ Removed "View Case Study" links from portfolio items
✅ All CTA buttons now route to the contact page
✅ WhatsApp floating button added to all pages
✅ Contact form simplified (single name field, removed budget field)
✅ Contact form sends emails with proper validation and error handling
