import "dotenv/config";
import cors from "cors";

import express from "express";
const app = express();
// const PORT = process.env.PORT || 443;
const PORT = process.env.PORT || 8800;
const FrontendUrl = process.env.FRONTEND_URL;

// app.use((req, res, next) => {
//   res.setHeader(
//     "Access-Control-Allow-Origin",
//     "https://jellyfish.azurewebsites.net"
//   );
//   res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
//   next();
// });

app.use(
  cors({
    origin: FrontendUrl,
  })
);

// * Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  return res.send("Health Check Passed!");
});

// * Routes file
import routes from "./routes/index.js";
app.use(routes);

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
