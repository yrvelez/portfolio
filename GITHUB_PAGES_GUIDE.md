# Hosting Your Portfolio on GitHub Pages

This guide will walk you through the process of hosting your portfolio on GitHub Pages, making it accessible online for free.

## Prerequisites

1. A GitHub account
2. Git installed on your computer
3. Node.js and npm installed

## Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in to your account.
2. Click on the "+" icon in the upper-right corner and select "New repository".
3. Name your repository (e.g., "portfolio").
4. Choose "Public" visibility.
5. Click "Create repository".

## Step 2: Push Your Code to GitHub

If your project is not yet connected to a GitHub repository, follow these steps:

```bash
# Initialize Git repository (if not already done)
git init

# Add all files to Git
git add .

# Commit your changes
git commit -m "Initial commit"

# Add GitHub repository as remote
git remote add origin https://github.com/YOURUSERNAME/portfolio.git

# Push your code to GitHub
git push -u origin main
```

Replace `YOURUSERNAME` with your actual GitHub username and make sure to use the correct branch name (`main` or `master`).

## Step 3: Configure Next.js for GitHub Pages

The following files have already been modified to work with GitHub Pages:

1. `next.config.js` - Configured for static export
2. `package.json` - Added deployment scripts
3. `public/404.html` - Added redirect for client-side routing
4. `public/index.html` - Added redirect handling script

If you're deploying to a GitHub Pages project page (username.github.io/portfolio), you need to uncomment these lines in `next.config.js`:

```js
basePath: '/portfolio',
assetPrefix: '/portfolio',
```

Replace 'portfolio' with your actual repository name.

## Step 4: Deploy Using GitHub Actions (Automatic Deployment)

1. GitHub Actions workflow has been set up in `.github/workflows/deploy.yml`.
2. Whenever you push changes to the `main` branch, your site will automatically deploy to GitHub Pages.

To enable GitHub Pages in your repository:

1. Go to your GitHub repository.
2. Click on "Settings".
3. Scroll down to the "GitHub Pages" section.
4. In the "Source" dropdown, select "gh-pages" branch.
5. Click "Save".

## Step 5: Deploy Manually

If you prefer to deploy manually, you can use the provided script:

```bash
./deploy-gh-pages.sh
```

This script will:
1. Pull the latest changes
2. Install dependencies
3. Build the project
4. Set up necessary GitHub Pages files
5. Deploy to the gh-pages branch

## Step 6: Access Your Site

After deployment, your site will be available at:

```
https://YOURUSERNAME.github.io/portfolio/
```

Replace `YOURUSERNAME` with your GitHub username and `portfolio` with your repository name.

## Step 7: Using a Custom Domain (Optional)

If you want to use a custom domain:

1. Purchase a domain from a domain registrar (e.g., Namecheap, GoDaddy).
2. Go to your GitHub repository settings.
3. Scroll down to the "GitHub Pages" section.
4. Under "Custom domain", enter your domain name and click "Save".
5. Configure your domain's DNS settings:
   - For an apex domain (example.com), add A records pointing to GitHub's IP addresses.
   - For a subdomain (www.example.com), add a CNAME record pointing to your GitHub Pages URL.

6. Uncomment and modify this line in the `deploy-gh-pages.sh` script:
   ```bash
   echo "yourdomain.com" > out/CNAME
   ```

## Troubleshooting

- **404 errors when accessing routes directly**: Make sure the 404.html file is properly set up and copied to the `out` directory during deployment.
- **Styles not loading**: Check if `basePath` and `assetPrefix` are properly configured in `next.config.js`.
- **Deployment failing**: Check your GitHub Actions logs for any errors.

## Updating Your Site

To update your site, simply push changes to your main branch:

```bash
git add .
git commit -m "Update site content"
git push
```

GitHub Actions will automatically deploy your changes, or you can run the manual deployment script. 