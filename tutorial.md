# Tutorial on Google Natural Language API

## Google Natural Language API
We shall use the Google Natural Language API to demonstrate how easy it is to get started with Sentiment Analysis. Keep in mind that Sentiment Analysis is just one of the capabilities that the Natural Language API has, in addition to detecting entities, Language Analysis and more. 

### Prerequisites

 -  You have a Google Cloud Platform account and a Google Project (note the Google Project Id).
 -  You have enabled the Google Cloud Natural Language API for the above project. To do that, go to the Cloud Console, click on the main menu, then APIs and Services --> Library. Type in Natural Language API and select + enable it. 
 -  You will also need a Service Account to invoke the Natural Language API from our own application. We shall do that in the next step.

## Service Account Creation

First up, let's create an environment variable to store your Project Id. Please use the code snippet below to set the ``PROJECT_ID`` variable as given below:

```SET $PROJECT_ID=<your_project_id>```

Use the following ``gcloud`` commands to create a service account.

```gcloud iam service-accounts create nlpapi-quickstart; \ gcloud iam service-accounts keys create key.json --iam-account \ nlpapi-quickstart@$PROJECT_ID.iam.gserviceaccount.com \ && export GOOGLE_APPLICATION_CREDENTIALS=key.json```

## Use npm to install dependencies

Now, let us install the Node.js library for Google Natural Language API via the command given below:

```npm install @google-cloud/language```

## Source Code

Let us go through the JavaScript file to understand the source code. 

Click here: `walkthrough editor-open-file index.js "Open index.js"`

## Run the application

We are ready to run our application and see the results. 

Run the ``index.js`` file via the command below:

```node index.js```

You should see both a score and magnitude provided for the sentence. You can change the sentence in the code file and try the API again, if you like. 

## Conclusion

Thanks for completing this tutorial. I hope you enjoyed the power of the Google Natural Language API.

### Next Steps:

 - Check out more information on [Google Cloud Natural Language API](https://cloud.google.com/natural-language/) 
 - [Natural Language API Basics](https://cloud.google.com/natural-language/docs/basics)
