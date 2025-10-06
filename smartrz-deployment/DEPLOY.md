# SmartRZ Live Classes - Deployment Guide

## Deploying to Render

### Prerequisites
- A Render account (sign up at https://render.com)
- This codebase

### Step 1: Prepare Your Repository
1. Upload this code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Make sure all files are committed

### Step 2: Create a New Web Service on Render
1. Go to https://dashboard.render.com
2. Click "New +" and select "Web Service"
3. Connect your Git repository
4. Configure the service:

### Step 3: Service Configuration
- **Name**: `smartrz-live-classes` (or any name you prefer)
- **Region**: Choose the closest to your users
- **Branch**: `main` (or your default branch)
- **Root Directory**: Leave blank
- **Runtime**: `Node`
- **Build Command**: `npm install`
- **Start Command**: `npm run dev`

### Step 4: Environment Variables (Optional)
If you need to set any environment variables:
- Click "Advanced" 
- Add environment variables as needed
- Click "Add Environment Variable"

### Step 5: Deploy
1. Click "Create Web Service"
2. Render will automatically build and deploy your app
3. Wait for the build to complete (usually 3-5 minutes)
4. Your app will be available at: `https://your-app-name.onrender.com`

### Important Notes

#### Free Tier Limitations
- Render's free tier spins down after 15 minutes of inactivity
- First request after spin-down takes ~30 seconds to wake up
- For always-on service, upgrade to paid tier ($7/month)

#### Background Script
- The bash script runs automatically every 60 seconds
- No separate background worker needed (saving you money!)
- Script executes in the same process as your web server

#### Logs and Monitoring
- View logs in Render dashboard under "Logs" tab
- Monitor bash script execution and API calls
- Check for any errors in class fetching

### Troubleshooting

#### Build Fails
- Check that `package.json` exists
- Verify Node version compatibility
- Review build logs in Render dashboard

#### App Not Loading Classes
- Check logs for bash script execution messages
- Verify external API (rolexcoderz.in) is accessible
- Bash script runs every minute - wait for next execution

#### Script Permissions
- The bash script is already executable (chmod +x)
- Render runs it with proper permissions
- Check logs for "Running bash script to fetch classes..."

### Custom Domain (Optional)
1. Go to your service settings
2. Click "Custom Domain"
3. Add your domain
4. Follow DNS configuration instructions
5. SSL certificate is automatic and free

### Monitoring Updates
- The app auto-updates every minute
- Check footer for "Last updated" timestamp
- Each section (Live, Upcoming, Recorded) updates independently

### Support
If classes aren't showing:
- The external API might be down temporarily
- Check individual section status
- Recorded classes work independently of Live/Upcoming
