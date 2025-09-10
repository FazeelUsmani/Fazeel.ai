# Testing Guide: Google Forms Integration

The application is now running at **http://localhost:5000**. Follow this guide to test the Google Forms integration.

## 🚀 **Server Status**: ✅ Running

Your development server is active and ready for testing!

## 🧪 **Testing Checklist**

### **Step 1: Update Google Forms Configuration**

First, make sure you've updated the configuration with your actual Google Form URLs:

1. Open `/client/src/lib/googleForms.ts`
2. Replace the example URLs with your actual Google Form URLs:
   ```typescript
   export const GOOGLE_FORMS_CONFIG: GoogleFormsConfig = {
     formUrl: 'YOUR_ACTUAL_GOOGLE_FORM_URL',  // e.g., https://forms.gle/abc123
     embedUrl: 'YOUR_ACTUAL_EMBED_URL',       // e.g., https://docs.google.com/forms/d/e/...
     fields: {
       // Update these with your actual entry IDs
       firstName: 'entry.YOUR_FIRST_NAME_ID',
       // ... etc
     }
   };
   ```

### **Step 2: Test Static Blog System**

1. **Navigate to Blog Section**:
   - Go to http://localhost:5000
   - Scroll down to the "Latest Insights & Research" section
   - ✅ **Expected**: You should see 3 featured blog posts loaded from static JSON

2. **Test Individual Blog Posts**:
   - Click on any blog post card
   - ✅ **Expected**: Navigate to individual blog post page with full content
   - ✅ **Expected**: Content loaded from static markdown files

3. **Test Blog Page**:
   - Go to http://localhost:5000/blog  
   - ✅ **Expected**: All blog posts displayed from static data

### **Step 3: Test Google Forms Integration**

1. **Navigate to Contact Section**:
   - Go to http://localhost:5000
   - Scroll down to the "Let's Build the Future Together" section
   - ✅ **Expected**: New contact section with Google Forms integration

2. **Test Pre-filled Form**:
   - Fill out the form fields (First Name, Last Name, Email, Company)
   - Click **"Open Contact Form (Pre-filled)"** button
   - ✅ **Expected**: Google Form opens in new window/tab with pre-filled data

3. **Test Quick Contact**:
   - Click **"Quick Form"** button
   - ✅ **Expected**: Google Form opens directly without pre-filling

4. **Test Embedded Form**:
   - Scroll down to see the embedded iframe
   - ✅ **Expected**: Google Form embedded directly in the page
   - Try filling out and submitting the embedded form

### **Step 4: Test Contact Page**

1. **Navigate to Contact Page**:
   - Go to http://localhost:5000/contact
   - ✅ **Expected**: Same Google Forms integration as homepage

### **Step 5: Verify No Backend Dependencies**

1. **Check Browser Console**:
   - Open Developer Tools (F12)
   - Check Console tab for any API errors
   - ✅ **Expected**: No failed API calls to `/api/blog` or `/api/contact`

2. **Check Network Tab**:
   - Go to Network tab in Developer Tools
   - Refresh the page
   - ✅ **Expected**: Only static file requests (JSON, markdown, images)
   - ✅ **Expected**: No backend API calls

## 🐛 **Troubleshooting**

### **Issue**: Blog posts not loading
- **Check**: Are the static JSON files accessible at `/data/blog/posts.json`?
- **Solution**: Verify files exist in `public/data/blog/` directory

### **Issue**: Google Form not opening
- **Check**: Have you updated the Google Forms configuration?
- **Solution**: Update URLs in `/client/src/lib/googleForms.ts`

### **Issue**: Pre-filling not working
- **Check**: Are the entry IDs correct in the configuration?
- **Solution**: Verify entry IDs match your Google Form's field IDs

### **Issue**: Embedded form not loading
- **Check**: Is the embed URL correct?
- **Solution**: Verify the embedded URL includes `?embedded=true`

## ✅ **Success Criteria**

Your Google Forms integration is working correctly if:

- ✅ Blog posts load from static JSON files
- ✅ Individual blog posts load from markdown files  
- ✅ Contact form opens Google Form in new window
- ✅ Pre-filled form populates with entered data
- ✅ Embedded form displays and works
- ✅ No backend API calls in browser network tab
- ✅ No console errors related to missing API endpoints

## 🎯 **Testing Commands**

You can also run these commands to verify everything works:

```bash
# Check TypeScript compilation
npm run check

# Test static file serving
curl http://localhost:5000/data/blog/posts.json

# Test individual blog post
curl http://localhost:5000/data/blog/featured.json
```

## 📱 **Mobile Testing**

Don't forget to test on mobile devices:

1. Open http://localhost:5000 on your phone
2. Test the contact form on mobile
3. Verify Google Forms work on mobile browsers

## 🚀 **Ready for Production**

Once all tests pass, your static site is ready for deployment to:
- Vercel, Netlify, GitHub Pages, or Cloudflare Pages
- Any static hosting provider
- CDN distribution

**Congratulations!** 🎉 Your dynamic website has been successfully converted to a fully static site with Google Forms integration!