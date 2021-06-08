### Demo

A demo version of this service is hosted on AWS - POST [`https://1w4c7i5k28.execute-api.us-east-1.amazonaws.com/prod/get-json`](https://1w4c7i5k28.execute-api.us-east-1.amazonaws.com/prod/get-json)

And here is the ES6 source behind it

``` javascript
import * as getMetaData from "metadata-scraper";
export const main = async (event, context) => {
  try {
    const data = JSON.parse(event.body);
    const metadata = await getData(data.url);
    return {
      statusCode: 200,
      body: JSON.stringify(metadata),
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: e.message }),
    };
  }
};

const getData = (url) =>
  new Promise((resolve, reject) => {
    getMetaData(url)
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });

```

### Requirements

- [Install the Serverless Framework](https://serverless.com/framework/docs/providers/aws/guide/installation/)
- [Configure your AWS CLI](https://serverless.com/framework/docs/providers/aws/guide/credentials/)

### Installation

``` bash
$ npm install
```

### Usage

To run a function on your local

``` bash
$ serverless invoke local --function getData --path mocks/create-event.json 
```

#### Running Tests

Run your tests using

``` bash
$ npm test
```

We use Jest to run our tests. You can read more about setting up your tests [here](https://facebook.github.io/jest/docs/en/getting-started.html#content).
