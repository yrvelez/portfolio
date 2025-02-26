# Deployment Steps for yrvelez/portfolio

Since you already have a Git repository initialized with a remote origin, follow these specific steps to deploy your portfolio to GitHub Pages:

## Step 1: Check your current Git status

```bash
git status
```

This will show your current branch name and any uncommitted changes.

## Step 2: Create the GitHub repository (if not already done)

1. Go to [GitHub](https://github.com) and sign in
2. Create a new repository named "portfolio" at https://github.com/yrvelez/portfolio
3. Don't initialize it with any files if it doesn't exist yet

## Step 3: Check your remote configuration

```bash
git remote -v
```

If the output doesn't match your GitHub repository, reconfigure it:

```bash
git remote set-url origin https://github.com/yrvelez/portfolio.git
```

## Step 4: Commit any changes

```bash
git add .
git commit -m "Configure for GitHub Pages deployment"
```

## Step 5: Push to GitHub (using your current branch)

Since your local branch is "master", push to that branch:

```bash
git push -u origin master
```

## Step 6: Enable GitHub Pages in repository settings

1. Go to https://github.com/yrvelez/portfolio/settings/pages
2. Under "Source", select "gh-pages" branch
3. Click "Save"

## Step 7: Deploy your site

You have two options:

### Option A: Manual deployment

Run the deployment script:

```bash
./deploy-gh-pages.sh
```

### Option B: Let GitHub Actions handle it

GitHub Actions will automatically deploy whenever you push to the master branch. I've configured the workflow file to recognize your "master" branch instead of "main".

## Step 8: Access your site

After deployment completes, your portfolio will be available at:

[https://yrvelez.github.io/portfolio/](https://yrvelez.github.io/portfolio/)

It may take a few minutes for the site to become available after the first deployment.

## Troubleshooting

If you encounter any issues:

1. Check that your GitHub repository exists at https://github.com/yrvelez/portfolio
2. Verify the gh-pages branch was created after deployment
3. Check if GitHub Actions completed successfully (look in the "Actions" tab of your repository)
4. Make sure you've enabled GitHub Pages in repository settings, using the gh-pages branch as source 