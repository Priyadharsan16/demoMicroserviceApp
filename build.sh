#!/bin/bash
# docker pull mongo:latest
docker build -t my-site .
cd loginBackend
docker build -t my-backend .