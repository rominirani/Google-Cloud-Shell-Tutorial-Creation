const language = require('@google-cloud/language')({
    projectId: '<your-project-id>',
    keyFilename: 'key.json'
    });

language.detectSentiment('Google Natural Language API is a fantastic API which gives highly accurate results. I love it.',{'verbose':true}).then((result) => {
    console.log('Score:', result[0].score);
    console.log('Magnitude:', result[0].magnitude);
    });
