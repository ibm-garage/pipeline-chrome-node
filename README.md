# pipeline-chrome-node

This repo build a Docker image that allows node apps to run selenium testing in the IBM DevOps Services Continuous Delivery Pipeline.

This image is deployed to [ibmgarage/pipeline-chrome-node](https://hub.docker.com/r/ibmgarage/pipeline-chrome-node/) on dockerhub.

It includes:

* Selenium 3.12.0
* Node 8

In order to use it, you must specify the `--headless` option for Chrome. See [google.spec.js](example/google.spec.js) for an example.
