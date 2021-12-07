# Readme

## Pre-Deployment Checks

I didn't include any tests in this repo, however if I did, I would include an additional GitHub Action workflow that would run the test suite. As the number of tests increase, I would add concurrency to the test run either by adding more workflow files or configuring the workflow to run the suite in parallel. 

Besides testing, I added a linting check found at `.github/workflows/linting.yml`. The check runs ESLint on only changed files which would speed up checks and allow for faster merged. This check runs on all branches except `main`.

## Deployments

The deployment for this is via a GitHub action (located in `.github/workflows/deploy.yml`). This action runs only on the `main` branch. My intention was to keep it as simple as possible.

The action authenticates into the deployment user created by Terraform. The secrets were manually placed in GitHub, in production I probably would instrument Terraform to manage the GitHub repo and place the credentials in automatically.

After authenticating, the action installs the dependencies and builds the project. 

To upload the data, I use the aws s3 sync command to sync the build folder with the artifacts bucket.

Since we're potentially using Cloudfront caching, I invalidate the cache to ensure changes catch up.

## Application Details

I went for a simple React and Node.JS app that calls two separate public APIs. The first pulls in IP and location data, the second displays a random cat picture. Even though I don't know Node (and React), I opted for that stack to show how I would deploy and stand up infrastructure for a platform such as Silo. With React I can use S3 and a Cloudfront distribution to serve the content. The calls to the public APIs serve to show how with a S3/Cloudfront combination can still reach to a backend to do more complicated operations. 

## Alternate Tooling

I struggled between two different options for how the code is deployed, ultimately I chose the one I was more comfortable with, but I have used the other option to great success.

In the end I chose GitHub actions as the deployment tool to bring the deployments closer to the codebase. The alternative would be to bring the deployment closer to the infrastructure. What that would mean is to use the Amazon Code suite of tools CodeCommit, CodeBuild, CodeArtifact, etc. Another benefit this would bring is that using GitHub actions for deployment to the backend servers may not be 100% appropriate depending on the complexity of the deployment, a tool such as CodeDeploy is meant for deployments for Java, Go, and others to EC2 or containers. If using CodeDeploy for one service, there's a lot to be said for following the pattern in other places to cut down on the number of places things happen. 
