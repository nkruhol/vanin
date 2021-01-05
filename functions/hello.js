export async function handler(event, context) {
  return {
      statusCode: 200, // response status code
      body: JSON.stringify({body: 'Hello, World'}), // response body
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,POST,OPTIONS,DELETE,PUT",
      }
  }
}
