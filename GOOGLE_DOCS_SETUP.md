# Google Docs Integration Setup Guide

This guide will help you set up Google Docs integration for the OscarAI Ambassador application system.

## Current Status

✅ **Google Docs service is implemented and ready to use**
📝 **Currently running in MOCK mode** (logs application data to console)
🔑 **Real Google Docs creation available** (requires Google credentials setup)

## Quick Start (Mock Mode)

The application currently works in mock mode, which means:
- Applications are processed successfully
- Application data is logged to the browser console
- No actual Google Docs are created
- Users receive success confirmation messages

**To see application data:**
1. Open browser Developer Tools (F12)
2. Go to Console tab
3. Submit an application
4. View the formatted application content in the console

## Full Setup (Real Google Docs)

To enable real Google Docs creation, follow these steps:

### Step 1: Google Cloud Console Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the following APIs:
   - Google Drive API
   - Google Docs API

### Step 2: Create Service Account

1. Navigate to **IAM & Admin** > **Service Accounts**
2. Click **Create Service Account**
3. Enter a name (e.g., "oscarai-docs-service")
4. Click **Create and Continue**
5. Skip role assignment for now
6. Click **Done**

### Step 3: Generate Service Account Key

1. Click on your newly created service account
2. Go to the **Keys** tab
3. Click **Add Key** > **Create new key**
4. Select **JSON** format
5. Download the key file (keep it secure!)

### Step 4: Create Google Drive Folder

1. Go to [Google Drive](https://drive.google.com)
2. Create a new folder called "OscarAI Ambassador Applications"
3. Right-click the folder > **Share**
4. Add your service account email (from the JSON file) with **Editor** permissions
5. Copy the folder ID from the URL (the long string after `/folders/`)

### Step 5: Environment Configuration

1. Copy `.env.example` to `.env`
2. Fill in the values from your service account JSON file:

```env
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@your-project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour Private Key Here\n-----END PRIVATE KEY-----"
GOOGLE_PROJECT_ID=your-project-id
GOOGLE_DRIVE_FOLDER_ID=your-google-drive-folder-id-for-applications
```

### Step 6: Test the Integration

1. Restart your development server (`npm run dev`)
2. Submit a test application
3. Check your Google Drive folder for the new document
4. Check the browser console for success messages

## Application Document Format

Each submitted application creates a Google Doc with:

- **Application Details**: Name, email, school, grade level
- **Application Essay**: Student's motivation and goals
- **Terms Agreement**: Confirmation of program requirements
- **Status Tracking**: Submission date/time and next steps
- **Professional Formatting**: Ready for review process

## Troubleshooting

### Common Issues

1. **"Google credentials not found"**
   - Check that your `.env` file exists and has the correct variable names
   - Ensure the private key includes the full `-----BEGIN/END PRIVATE KEY-----` markers

2. **"Permission denied" errors**
   - Make sure the service account has access to your Google Drive folder
   - Verify the APIs are enabled in Google Cloud Console

3. **"Document creation failed"**
   - Check the browser console for detailed error messages
   - Verify your service account key is valid and not expired

### Getting Help

- Check browser console for detailed error messages
- Ensure all environment variables are properly set
- Verify Google Cloud APIs are enabled
- Test with a simple application submission

## Security Notes

- Never commit your `.env` file to version control
- Keep your service account key secure
- Consider using environment-specific service accounts for production
- Regularly rotate service account keys for enhanced security

## Features

✅ **Automatic document creation** with formatted application data
✅ **Folder organization** in your Google Drive
✅ **Professional formatting** ready for review
✅ **Error handling** with fallback to mock mode
✅ **Loading states** and user feedback
✅ **Detailed logging** for debugging

The system is designed to be robust - if Google Docs integration fails for any reason, applications will still be processed successfully and you'll be notified of the issue. 