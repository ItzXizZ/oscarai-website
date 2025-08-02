// Google Docs service for creating application documents
// Using Google API client library with service account JWT authentication
import { SignJWT, importPKCS8 } from 'jose';

class GoogleDocsService {
  constructor() {
    this.initialized = false;
    console.log('🚀 Initializing Google Docs Service...');
    

    
    console.log('Service Account Email:', import.meta.env.VITE_GOOGLE_SERVICE_ACCOUNT_EMAIL ? '✅ Present' : '❌ Missing');
    console.log('Private Key:', import.meta.env.VITE_GOOGLE_PRIVATE_KEY ? '✅ Present' : '❌ Missing');
    console.log('Project ID:', import.meta.env.VITE_GOOGLE_PROJECT_ID ? '✅ Present' : '❌ Missing');
    console.log('Drive Folder ID:', import.meta.env.VITE_GOOGLE_DRIVE_FOLDER_ID ? '✅ Present' : '⚠️ Optional - Not Set');
  }

  // Initialize Google APIs
  async initialize() {
    try {
      console.log('🔧 Initializing Google Docs service...');
      this.initialized = true;
      return true;
    } catch (error) {
      console.error('Failed to initialize Google Docs service:', error);
      this.initialized = false;
      throw error;
    }
  }

  // Create a Google Doc with application data
  async createApplicationDocument(applicationData) {
    console.log('🚀 Creating Google Doc with your credentials...');
    console.log('📝 Application data:', applicationData);
    
    return await this.createGoogleDoc(applicationData);
  }

  // Create Google Doc using Google API
  async createGoogleDoc(applicationData) {
    try {
      console.log('🚀 Creating Google Doc with your credentials...');
      console.log('📝 Application data:', applicationData);
      
      // Check required environment variables
      if (!import.meta.env.VITE_GOOGLE_SERVICE_ACCOUNT_EMAIL) {
        throw new Error('VITE_GOOGLE_SERVICE_ACCOUNT_EMAIL is required but not found in environment variables');
      }
      if (!import.meta.env.VITE_GOOGLE_PRIVATE_KEY) {
        throw new Error('VITE_GOOGLE_PRIVATE_KEY is required but not found in environment variables');
      }
      if (!import.meta.env.VITE_GOOGLE_PROJECT_ID) {
        throw new Error('VITE_GOOGLE_PROJECT_ID is required but not found in environment variables');
      }
      
      const documentContent = this.formatApplicationContent(applicationData);
      
      console.log('📄 Document Content for Google Doc:');
      console.log('=====================================');
      console.log(documentContent);
      console.log('=====================================');
      
      // Load Google API client library if not already loaded
      if (!window.gapi) {
        await this.loadGoogleAPI();
      }
      
      // Initialize Google API client
      await this.initializeGoogleAPI();
      
      // Create the document
      const title = `OscarAI ${applicationData.position || 'Leadership'} Application - ${applicationData.name} - ${new Date().toLocaleDateString()}`;
      const folderId = import.meta.env.VITE_GOOGLE_DRIVE_FOLDER_ID || null;
      
      console.log('📝 Creating document with title:', title);
      console.log('📁 Target folder ID:', folderId);
      
      // Create the Google Doc
      const docResponse = await gapi.client.docs.documents.create({
        title: title
      });
      
      const documentId = docResponse.result.documentId;
      console.log('✅ Document created with ID:', documentId);
      
      // Add content to the document
      await this.addContentToDocument(documentId, documentContent);
      
      // Move to folder if specified
      if (folderId) {
        await this.moveDocumentToFolder(documentId, folderId);
      }
      
      const documentUrl = `https://docs.google.com/document/d/${documentId}`;
      
      console.log('✅ SUCCESS! Google Doc created successfully!');
      console.log('📄 Document ID:', documentId);
      console.log('🔗 Document URL:', documentUrl);
      console.log('📁 Folder ID:', folderId || 'root');
      console.log('👤 Service Account:', import.meta.env.VITE_GOOGLE_SERVICE_ACCOUNT_EMAIL);
      
      return {
        success: true,
        documentId: documentId,
        documentUrl: documentUrl,
        folderId: folderId || 'root',
        serviceAccount: import.meta.env.VITE_GOOGLE_SERVICE_ACCOUNT_EMAIL,
        note: '🎉 SUCCESS! Google Doc created successfully!'
      };
    } catch (error) {
      console.error('❌ Failed to create Google Doc:', error);
      console.error('Error details:', error.result || error);
      throw error;
    }
  }
  
  // Load Google API client library
  async loadGoogleAPI() {
    return new Promise((resolve, reject) => {
      if (window.gapi) {
        resolve();
        return;
      }
      
      const script = document.createElement('script');
      script.src = 'https://apis.google.com/js/api.js';
      script.onload = () => {
        gapi.load('client:auth2', resolve);
      };
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }
  
  // Initialize Google API client with service account authentication
  async initializeGoogleAPI() {
    console.log('🔧 Initializing Google API with service account...');
    
    // Create JWT token for service account authentication
    const jwt = await this.createServiceAccountJWT();
    
    // Use the token to authenticate API requests
    const accessToken = await this.exchangeJWTForAccessToken(jwt);
    
    // Initialize the client without OAuth2
    await gapi.client.init({
      discoveryDocs: [
        'https://docs.googleapis.com/$discovery/rest?version=v1',
        'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'
      ]
    });
    
    // Set the access token for API requests
    gapi.client.setToken({
      access_token: accessToken
    });
    
    console.log('✅ Service account authenticated successfully!');
  }
  
  // Create JWT token for service account using proper RS256 signing
  async createServiceAccountJWT() {
    console.log('🔐 Creating JWT with proper RS256 signing...');
    
    const serviceAccountEmail = import.meta.env.VITE_GOOGLE_SERVICE_ACCOUNT_EMAIL;
    const privateKeyPem = import.meta.env.VITE_GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n');
    
    console.log('📧 Service Account:', serviceAccountEmail);
    console.log('🔑 Private Key Length:', privateKeyPem.length);
    
    try {
      // Import the private key for signing
      const privateKey = await importPKCS8(privateKeyPem, 'RS256');
      console.log('✅ Private key imported successfully');
      
      const now = Math.floor(Date.now() / 1000);
      
      // Create and sign the JWT
      const jwt = await new SignJWT({
        scope: 'https://www.googleapis.com/auth/documents https://www.googleapis.com/auth/drive.file',
      })
        .setProtectedHeader({ alg: 'RS256' })
        .setIssuedAt(now)
        .setExpirationTime(now + 3600) // 1 hour
        .setIssuer(serviceAccountEmail)
        .setAudience('https://oauth2.googleapis.com/token')
        .sign(privateKey);
      
      console.log('✅ JWT created and signed successfully');
      console.log('🎫 JWT length:', jwt.length);
      
      return jwt;
    } catch (error) {
      console.error('❌ JWT creation failed:', error);
      console.error('Private key preview:', privateKeyPem.substring(0, 100) + '...');
      throw error;
    }
  }
  
  // Exchange JWT for access token
  async exchangeJWTForAccessToken(jwt) {
    console.log('🔄 Exchanging JWT for access token...');
    console.log('🎫 JWT to exchange (first 100 chars):', jwt.substring(0, 100) + '...');
    
    const response = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
        assertion: jwt
      })
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('❌ Token exchange failed:', {
        status: response.status,
        statusText: response.statusText,
        body: errorText
      });
      throw new Error(`Failed to get access token: ${response.status} ${response.statusText} - ${errorText}`);
    }
    
    const tokenData = await response.json();
    console.log('✅ Access token received successfully');
    console.log('🔑 Token type:', tokenData.token_type);
    console.log('⏰ Expires in:', tokenData.expires_in, 'seconds');
    
    return tokenData.access_token;
  }
  
  // Add content to the Google Doc
  async addContentToDocument(documentId, content) {
    const requests = [{
      insertText: {
        location: { index: 1 },
        text: content
      }
    }];
    
    await gapi.client.docs.documents.batchUpdate({
      documentId: documentId,
      requests: requests
    });
  }
  
  // Move document to specific folder
  async moveDocumentToFolder(documentId, folderId) {
    try {
      await gapi.client.drive.files.update({
        fileId: documentId,
        addParents: folderId,
        removeParents: 'root'
      });
      console.log('✅ Document moved to folder:', folderId);
    } catch (error) {
      console.warn('⚠️ Could not move document to folder:', error);
    }
  }



  // Format application data for Google Doc
  formatApplicationContent(data) {
    const currentDate = new Date().toLocaleDateString();
    const currentTime = new Date().toLocaleTimeString();
    
    return `OSCARAI AMBASSADOR APPLICATION
==============================

Application Date: ${currentDate}
Application Time: ${currentTime}

APPLICANT INFORMATION
--------------------
Name: ${data.name}
Email: ${data.email}
School: ${data.school}
Grade Level: ${data.grade}

APPLICATION ESSAY
-----------------
${data.description}

TERMS AGREEMENT
---------------
The applicant has agreed to the program requirements including:
• Weekly video submissions (5 videos per week)
• Social media engagement (@OscarAI, #WasteSortingRevolution)
• Granting school rights for marketing materials
• 6-month commitment to environmental leadership and technology innovation
• Participation in monthly ambassador community calls
• Tracking and reporting environmental impact metrics

APPLICATION STATUS
------------------
Status: Pending Review
Submitted: ${currentDate} at ${currentTime}
Document ID: [Auto-generated by system]

NEXT STEPS
----------
1. Application review by OscarAI team (1-2 weeks)
2. Video interview if selected
3. FREE OscarAI unit deployment to school
4. Program onboarding and training

---
Generated automatically by OscarAI Ambassador Application System`;
  }
}

export default GoogleDocsService; 