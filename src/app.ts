import express from "express";
import cors from "cors";
import config from "config";
import connect from "./db/connect";
import routes from "./routes";

const port = config.get("port") as number;
const host = config.get("host") as string;

const app = express();
app.use(cors());

app.use(express.json());

app.listen(port, host, () => {
  console.log(`Server listening at http://${host}:${port}`);

  connect();

  routes(app);
});
