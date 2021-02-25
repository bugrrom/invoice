// Core
import "./config";
import dg from "debug";
// Instruments
import { getPort } from "./helpers";
import { app } from "./server";

const port = getPort();
const debugSrv = dg("server:main");

app.listen(port, () => {
  debugSrv(`Server API is up on port ${port}`);
});
