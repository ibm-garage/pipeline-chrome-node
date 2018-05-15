#!/bin/bash -ex

today=$(date +%Y-%m-%d)
name="ibmgarage/pipeline-chrome-node"
docker build . -t "$name:$today" -t "$name:latest"
docker push "$name"
