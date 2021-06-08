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
