
import express from 'express';
import HttpErrorCreator from './HttpError.js';

const app = express();

function HttpErrorCreator(status, message = messages[status]) {
  const er = new Error(message);
  er.status = status;
  return er;
}
export default HttpErrorCreator;
app.use((err, req, res, next) => {
  if (err instanceof HttpErrorCreator) {
    const messages = {
      400: "Bad request",
      401: "Not authorized",
      403: "Forbidden",
      404: "Not found!",
      409: "Conflict",
    };
    res.status(err.status).json({ error: err.message });
  } else {
    
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
