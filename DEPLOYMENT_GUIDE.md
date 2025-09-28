# 🚀 Deployment Guide - GitHub Pages

## Quick Setup Steps

### 1. Create GitHub Repository
1. Go to [github.com](https://github.com) and sign in
2. Click "New repository"
3. Name it: `matheusbraz-portfolio` (or any name you prefer)
4. Make it **Public** (required for free GitHub Pages)
5. Click "Create repository"

### 2. Upload Your Files
1. Click "uploading an existing file"
2. Drag and drop ALL these files:
   - `index.html`
   - `body-of-work.html`
   - `styles.css`
   - `script.js`
   - `body-of-work.js`
   - `language.js`
   - `assets/` folder (with all images)

### 3. Enable GitHub Pages
1. Go to your repository **Settings**
2. Scroll down to **Pages** section
3. Under "Source", select **Deploy from a branch**
4. Select **main** branch and **/ (root)** folder
5. Click **Save**

### 4. Get Your Live URL
- Your site will be live at: `https://yourusername.github.io/repository-name`
- Example: `https://matheusbraz.github.io/matheusbraz-portfolio`

## 🌐 Connect Custom Domain (Optional)

### If you have a domain (e.g., matheusbraz.com):

1. **In your domain registrar** (GoDaddy, Namecheap, etc.):
   - Add a **CNAME** record:
     - **Name**: `www` (or `@` for root domain)
     - **Value**: `yourusername.github.io`

2. **In GitHub repository**:
   - Go to Settings → Pages
   - Under "Custom domain", enter: `matheusbraz.com`
   - Check "Enforce HTTPS"

3. **Wait 24-48 hours** for DNS propagation

## ✅ What You Get

- **Free hosting** forever
- **Custom domain** support
- **Automatic SSL** certificate
- **Global CDN** for fast loading
- **Easy updates** (just push new files)

## 🔄 Updating Your Site

1. Edit files locally
2. Upload new versions to GitHub
3. Changes go live automatically!

## 📞 Contact Form

The contact form is ready for Wix integration. To make it work:
1. Get your Wix form endpoint
2. Update the form submission in `script.js`
3. Or use a service like Formspree for easier setup

---

**Your bilingual portfolio is ready to go live! 🎉**
