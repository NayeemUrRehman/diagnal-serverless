import * as handler from "../getData";

test("getData", async () => {
  const event = "event";
  const context = "context";
  const callback = (error, response) => {
    expect(response.statusCode).toEqual(200);
    expect(typeof response.body).toBe("string");
    expect(JSON.parse(response.body).title).toBeDefined();
  };

  await handler.main(event, context, callback);
});
