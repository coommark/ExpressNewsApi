# Complete News/Blog API using NodeJS (Express), MongoDB with Swagger

This is the source code for Complete News/Blog API using NodeJS (Express), MongoDB with Swagger - Part 1 of my Complete MERN Stack video tutorial.

## Watch YouTube Video Here:

[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/qrDD7jgnZTU/0.jpg)](https://www.youtube.com/watch?v=qrDD7jgnZTU)

In this repo, we develop the REST API with the following features:

1. Authentication and authorization using PassportJS and JWT
2. Model validations using express-validator
3. Data modeling and schema construction using Mongoose
4. Categories, stories, videos and comments CRUD and authorized or protected routes
5. Swagger documentation with authentication and image uploading using swagger-autogen
6. Emails sending, data pagination, rate limiting, and image uploading.

In the four-part tutorial series, we will develop end-to-end news or blog application comprising of a REST API, an Admin panel, a frontend website, and Android and iOS mobile applications using NodeJS, Express, MongoDB, ReactJS and React Native as follows:

1. Part 1: Complete News/Blog API using NodeJS (Express), MongoDB with Swagger (this repo)
2. Part 2: Develop a complete Admin Dashboard for News and Blog Site using ReactJS and Ant Design (coming soon)
3. Part 3: Develop a complete News and Blog Mobile App for Android and iOS using React Native, UI Kitten, and Expo (coming soon)
4. Part 4: Develop a complete News and Blog Website using ReactJS and Bootstrap (coming soon)

---

## Blog Post

In this series I have also written the tutorial blogs-

- Blog post
  [Complete News/Blog API using NodeJS (Express), MongoDB with Swagger](https://markscodingspot.com/complete-news-blog-api-using-nodejs-express-mongodb-with-swagger)

---

## Requirements

For development, you will need Node.js, MongoDb, Yarn or NPM installed in your development machine

## Getting Started

```sh
# clone it
git clone git@github.com:developit/express-es6-rest-api.git
cd express-es6-rest-api

# Make it your own
rm -rf .git && git init && npm init

# Install dependencies using Yarn
yarn

# Start development server & swagger
yarn start-gendoc

```

## Swagger documentation (UI)

http://localhost:5000/doc
