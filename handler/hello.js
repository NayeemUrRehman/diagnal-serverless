export const hello = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Go Serverless v2.0! ${await message({
        time: 1,
        copy: "Your function executed successfullyyyyyy!",
      })}`,
    }),
  };
};

const message = ({ time, ...rest }) =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve(`${rest.copy} (with a delay hey ${time * 1000}ms) `);
    }, time * 1000)
  );
