# microservices-demo
Webinar: microservices war stories

![Image of eflyer](https://github.com/gihandesilva/microservices-demo/blob/master/resources/Episode-03-Gihan-De-Silva-Post.png)

## Architecture diagram

![Image of Architecture diagram](https://github.com/gihandesilva/microservices-demo/blob/master/resources/architecture-diagram.png)

## Inter-service communication with the event-bus
![Image of event bus](https://github.com/gihandesilva/microservices-demo/blob/master/resources/architecture-event-bus.png)


### What is this repository for?

This example application is built for a microservices demo.

- **Technology overview**

  This application is built with [ReactJs](https://reactjs.org/) and deployed to a [aws s3 bucket](https://aws.amazon.com/s3/) as a static website. Also as the authentication and authorization platform [auth0](https://auth0.com/) is used. And the backend of this application is built with [serverless framework](https://www.serverless.com/framework/docs/).

- **Prerequisite**
  - `aws-cli(v2) 2.2.44`
  - `node v14.16.0`
  - `yarn 1.22.10`
  - `serverless 2.64.0`
  - `mongodb atlas` https://cloud.mongodb.com

- **Summary of set up**

First globally install serverless framwork to the local machine by running `yarn global add serverless`. Then clone the repo to you local mechine. Open a terminal window and then `cd` to your cloned repo directory and run `yarn install`.

### Deployment guide

* First make sure you have set up your aws-cli correctly.
* Goto [MongoDB atlas](https://cloud.mongodb.com) and create an account. Then create 3 databases called `posts`, `comments` and `queries`.
* Then goto [AWS Kinesis](https://console.aws.amazon.com/kinesis/home) and create a Kinesis data stream.
* Now goto [AWS parameter store](https://console.aws.amazon.com/systems-manager/parameters/) and create blow mentioned paramters with appropriate values.

````
/ms_demo/comments/db_url
/ms_demo/posts/db_url
/ms_demo/query/db_url
/ms_demo/kinesis_stream/arn
/ms_demo/kinesis_stream/name
````

## Available Scripts

In one of service directory, you can run:

* `sls deploy --verbose` to deploy the application to AWS.


* `sls deploy function <functionName>` to deploy an individual function. NOTE: make sure you did not make any changes to serverless.yml file.

