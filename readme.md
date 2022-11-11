# image Processing API

## Table of Contents

- [Project Decription](#ProjectDecription)
- [Tools Used](#ToolsUsed)
- [Scripts](#Scripts)
- [How to use](#Howtouse)

# Project Decription

This project is TypeScript a service that consists of resizing given images by using  URL queries with filename, width,  and height  parameters .

Also, the project were tested by using jasmine unit testing and supertest for testing endpoints

# Tools Used

- node.js
- type script
- express
- fs
- sharp
- node-cache
- jasmine
- supertest
- prettier
- eslint

# Scripts

- `test`
- `lint`
- `prettier`
- `build`
- `start`

# How to use

you have to enter three parameters to the url query which are filname width and height
URL example for a working request ` http://localhost:3005/api/image?filename=salah&&width=150&&height=150`
