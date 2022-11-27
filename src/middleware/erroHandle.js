import discoverStatusCode from "../utils/discoverStatusCode.js";

export default async function errorHandle(
  error,
  req,
  res,
  next
) {
  if (error) {
    const statusCode = discoverStatusCode(error.code);
    return res.status(statusCode).send(error.message);
  }

  res.status(500).send('Internal Server Error');
}
