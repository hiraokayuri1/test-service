import express, { Express } from "express";
import rootDir from "app-root-path";
import cors from "cors";
import { routes } from "./infrastructure/routes";

export default (): Express => {
  const app = express();

  app.use("/static", express.static(rootDir + "/dist/public/"));
  app.use(express.urlencoded({ extended: true, limit: "50mb" }));
  app.use(express.json({ limit: "50mb" }));

  /* corsの設定 */
  app.use(
    cors({
      allowedHeaders: [
        "Origin",
        "X-Requested-With",
        "Content-Type",
        "Accept",
        "X-Access-Token"
      ],
      credentials: true,
      methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
      origin: ["http://localhost:8080"],
      preflightContinue: false
    })
  );

  /* header情報の登録 */
  app.get("*", function (req, res, next) {
    const protocol = req.headers["x-forwarded-proto"];
    const hostname = req.hostname;
    if (protocol !== "https" && hostname !== "localhost")
      res.redirect(process.env.DOMAIN + req.url);
    else next();
  });

  /* routesの登録 */
  routes(app);

  return app;
};