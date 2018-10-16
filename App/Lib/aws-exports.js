export default {
  Auth: {
    // Amazon Cognito Identity Pool ID
    identityPoolId: 'us-west-2:0e7fd52b-b564-4154-84d4-8bed4100174c',
    // Amazon Cognito Region
    region: 'us-west-2',
    // Amazon Cognito User Pool ID
    userPoolId: 'us-west-2_UkDBpJIgn',
    // Amazon Cognito Web Client ID
    userPoolWebClientId: '1vos0tg0lsgiu7gffbqdie1ft0',
  },
  API: {
    endpoints: [
      {
        name: 'rekognition',
        endpoint: 'https://rekognition.us-west-2.amazonaws.com',
        service: 'rekognition',
        region: 'us-west-2',
      },
    ],
  },
};
