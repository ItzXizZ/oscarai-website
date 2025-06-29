# Google API Setup Guide for OscarAI Template

## Overview
This guide will help you set up Google API credentials to enable real Google Docs integration instead of the mock implementation.

## Required Environment Variables

Add these variables to your `.env` file:

```env
VITE_GOOGLE_SERVICE_ACCOUNT_EMAIL=your_service_account_email@project.iam.gserviceaccount.com
VITE_GOOGLE_PRIVATE_KEY=-----BEGIN PRIVATE KEY-----\nyour_private_key_here\n-----END PRIVATE KEY-----
VITE_GOOGLE_PROJECT_ID=your_google_project_id
VITE_GOOGLE_DRIVE_FOLDER_ID=your_folder_id_here  # Optional
```

## How to Get These Credentials

### Step 1: Create a Google Cloud Project

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Click "Create Project" or select an existing project
3. Note down your `PROJECT_ID` for the `VITE_GOOGLE_PROJECT_ID` variable

### Step 2: Enable Required APIs

1. In the Google Cloud Console, go to "APIs & Services" > "Library"
2. Enable these APIs:
   - **Google Docs API**
   - **Google Drive API**

### Step 3: Create Service Account

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "Service Account"
3. Enter a name (e.g., "OscarAI Docs Service")
4. Click "Create and Continue"
5. Skip role assignment for now (click "Continue")
6. Click "Done"

### Step 4: Generate Service Account Key

1. Click on the service account you just created
2. Go to the "Keys" tab
3. Click "Add Key" > "Create new key"
4. Choose "JSON" format and click "Create"
5. A JSON file will download - this contains your credentials
6. Extract the values:
   - `client_email` → `VITE_GOOGLE_SERVICE_ACCOUNT_EMAIL`
   - `private_key` → `VITE_GOOGLE_PRIVATE_KEY`
   - `project_id` → `VITE_GOOGLE_PROJECT_ID`

### Step 5: Create Drive Folder (Optional)

1. Go to [Google Drive](https://drive.google.com)
2. Create a folder where you want documents to be saved
3. Right-click the folder > "Get link"
4. Copy the folder ID from the URL (the part after `/folders/`)
5. Use this for `VITE_GOOGLE_DRIVE_FOLDER_ID`

## Example .env File

```env
VITE_GOOGLE_SERVICE_ACCOUNT_EMAIL=oscarai-docs-service@my-oscarai-project.iam.gserviceaccount.com
VITE_GOOGLE_PRIVATE_KEY=-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC...\n-----END PRIVATE KEY-----
VITE_GOOGLE_PROJECT_ID=my-oscarai-project
VITE_GOOGLE_DRIVE_FOLDER_ID=1BxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxY
```

## Authentication Flow

When users submit the ambassador application:

1. The app will check for your service account credentials
2. If found, it will authenticate using the service account (no user interaction required)
3. It will create a real Google Doc using the service account permissions
4. If you specified a folder ID, the document will be organized there
5. The document will be owned by the service account but accessible to users you share it with

## Security Notes

- API keys should be restricted to specific APIs and domains
- Never commit your `.env` file to version control
- Add `.env` to your `.gitignore` file
- For production, consider additional security measures

## Troubleshooting

### "Google credentials not found" error
- Ensure all required environment variables are set in your `.env` file
- Restart your development server after adding the variables

### Authentication popup blocked
- Allow popups for your domain
- Try using a different browser

### "Access denied" errors
- Ensure the Google Docs and Drive APIs are enabled
- Check that your OAuth client ID is configured correctly
- Verify the authorized domains match your current domain

## Testing

After setting up your credentials:

1. Restart your development server
2. Fill out the ambassador application form
3. Submit the form
4. You should see authentication prompts and real Google Doc creation
5. Check the browser console for detailed logs

The mock message should be replaced with: "🎉 SUCCESS! Real Google Doc created with your credentials!" 