# Google Forms Setup Guide

This guide explains how to set up Google Forms integration for the static contact form.

## Step 1: Create Google Form

1. Go to [Google Forms](https://forms.google.com)
2. Click "Blank" to create a new form
3. Set the title: **"Contact - Fazeel AI Solutions"**
4. Add description: **"Get in touch with our AI experts to discuss your project"**

## Step 2: Add Form Fields

Add the following fields in this exact order:

### 2.1 First Name
- **Type**: Short answer
- **Label**: "First Name"
- **Required**: Yes

### 2.2 Last Name
- **Type**: Short answer  
- **Label**: "Last Name"
- **Required**: Yes

### 2.3 Email
- **Type**: Short answer
- **Label**: "Email Address"
- **Required**: Yes
- **Validation**: Email

### 2.4 Company
- **Type**: Short answer
- **Label**: "Company" 
- **Required**: No

### 2.5 Project Type
- **Type**: Multiple choice
- **Label**: "Project Type"
- **Required**: Yes
- **Options**:
  - LLM Development
  - Model Training & Fine-tuning
  - AI Strategy Consulting
  - NLP Solutions
  - Research & Development
  - Other

### 2.6 Budget Range
- **Type**: Multiple choice
- **Label**: "Project Budget"
- **Required**: Yes
- **Options**:
  - Under $10k
  - $10k - $50k
  - $50k - $100k
  - $100k - $500k
  - $500k+

### 2.7 Project Description
- **Type**: Paragraph
- **Label**: "Project Description"
- **Description**: "Tell us about your project goals, requirements, and timeline"
- **Required**: Yes

### 2.8 Terms Agreement
- **Type**: Multiple choice
- **Label**: "Agreement"
- **Required**: Yes
- **Options**:
  - I agree to the privacy policy and terms of service

## Step 3: Configure Form Settings

1. Click the **Settings** gear icon
2. **General** tab:
   - ✅ Collect email addresses: OFF (we have email field)
   - ✅ Limit to 1 response: OFF
   - ✅ Edit after submit: OFF

3. **Presentation** tab:
   - ✅ Show progress bar: ON
   - ✅ Shuffle question order: OFF
   - ✅ Show link to submit another response: ON

4. **Responses** tab:
   - ✅ Accepting responses: ON
   - ✅ Send respondents a copy of their response: OFF

## Step 4: Get Form URLs

### 4.1 Get the Main Form URL
1. Click **Send** button
2. Click the **Link** tab (🔗)
3. Click **Shorten URL** if desired
4. Copy the URL (looks like: `https://forms.gle/abcd1234`)

### 4.2 Get the Embed URL
1. In the **Send** dialog, click **Embed** tab (`<>`)
2. Copy the `src` URL from the iframe code
3. It should look like: `https://docs.google.com/forms/d/e/1FAIpQLSc...../viewform?embedded=true`

## Step 5: Get Field Entry IDs

1. Open your form in a new tab
2. Right-click on the page and select **"View Page Source"** or press `Ctrl+U`
3. Search for `entry.` to find the field IDs
4. Each field will have an ID like `entry.123456789`

**Alternative method:**
1. Open your form
2. Open browser Developer Tools (F12)
3. Go to **Elements** tab
4. Look for `input` elements with `name` attributes starting with `entry.`

Example field mappings:
```html
<input name="entry.123456789" ...> <!-- First Name -->
<input name="entry.987654321" ...> <!-- Last Name -->
<input name="entry.456789123" ...> <!-- Email -->
```

## Step 6: Update Configuration

Open `/client/src/lib/googleForms.ts` and update:

```typescript
export const GOOGLE_FORMS_CONFIG: GoogleFormsConfig = {
  // Replace with your actual form URL from Step 4.1
  formUrl: 'https://forms.gle/YOUR_ACTUAL_FORM_ID',
  
  // Replace with your actual embed URL from Step 4.2  
  embedUrl: 'https://docs.google.com/forms/d/e/YOUR_ACTUAL_FORM_ID/viewform?embedded=true',
  
  // Replace with your actual entry IDs from Step 5
  fields: {
    firstName: 'entry.YOUR_FIRST_NAME_ID',
    lastName: 'entry.YOUR_LAST_NAME_ID',
    email: 'entry.YOUR_EMAIL_ID',
    company: 'entry.YOUR_COMPANY_ID',
    projectType: 'entry.YOUR_PROJECT_TYPE_ID',
    budget: 'entry.YOUR_BUDGET_ID',
    description: 'entry.YOUR_DESCRIPTION_ID',
    agreedToTerms: 'entry.YOUR_TERMS_ID'
  }
};
```

## Step 7: Test Integration

1. Start your development server
2. Go to the contact page
3. Fill out the form fields
4. Click "Open Contact Form (Pre-filled)" button
5. Verify that the Google Form opens with pre-filled data
6. Submit a test form
7. Check your Google Forms responses to confirm it worked

## Step 8: Set up Response Notifications (Optional)

1. In your Google Form, click the **Responses** tab
2. Click the **More** menu (⋮) 
3. Select **Get email notifications for new responses**
4. Choose when you want to be notified

## Step 9: Create Response Spreadsheet (Optional)

1. In your Google Form, click the **Responses** tab
2. Click the **Create Spreadsheet** icon (📊)
3. Choose "Create a new spreadsheet"
4. This will automatically collect all form responses in a Google Sheet

## Customization Options

### Custom Thank You Message
1. In form builder, click **Settings**
2. Go to **Presentation** tab
3. Set custom confirmation message:
   ```
   Thank you for contacting Fazeel AI Solutions! 
   We'll get back to you within 24 hours.
   ```

### Custom Form Theme
1. Click the **Theme** palette icon
2. Choose colors that match your brand
3. Upload a custom header image if desired

### Response Validation
Add custom validation to fields:
- Email: Automatically validated
- Phone: Add regex pattern if needed
- Custom validation messages

## Troubleshooting

### Form Not Loading
- Check that the embed URL is correct
- Verify the form is set to "Accepting responses"
- Test the form URL directly in browser

### Pre-filling Not Working
- Verify entry IDs are correct
- Check field names match exactly
- Test with simple values first

### CORS Issues
- Google Forms should work from any domain
- If issues persist, use the direct link method instead of embedding

## Security Considerations

✅ **Advantages of Google Forms:**
- Google handles spam protection
- HTTPS encryption by default
- No server-side code needed
- Reliable uptime and delivery

✅ **Privacy:**
- No sensitive data stored on your servers
- Google's privacy policies apply
- Can be GDPR compliant with proper setup

## Alternative: Custom Thank You Page

You can redirect users to a custom thank you page after form submission by adding URL parameters to your form configuration.

This completes the Google Forms integration setup for your static website!