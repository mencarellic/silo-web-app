# Readme

## Requirements

* Node.JS 17.0.1 (Only for development)

## Deployments

The deployment for this is via a GitHub action (located in `.github/workflows/deploy.yml`).

I aimed to keep it as simple as possible.

The action authenticates into the deployment user created by Terraform. The secrets were manually placed in GitHub, in production I probably would instrument Terraform to manage the GitHub repo and place the credentials in automatically.

After authenticating, the action installs the dependencies and builds the project. 

To upload the data, I use the aws s3 sync command to sync the build folder with the artifacts bucket.

Since we're potentially using Cloudfront caching, I invalidate the cache to ensure changes catch up.