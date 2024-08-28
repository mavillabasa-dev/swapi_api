import express, { Application } from "express";
import mongoose from "mongoose";
import syncData from "./services/syncService";

import peopleRoutes from "./routes/peopleRoutes";
import filmRoutes from "./routes/filmRoutes";
import starshipRoutes from "./routes/starshipRoutes";
import planetRoutes from "./routes/planetRoutes";

const app: Application = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

async function start() {
  try {
    const app: Application = express();

    mongoose
      .connect("mongodb://localhost:27017/starwars_api")
      .then(() => {
        console.log("Connected to MongoDB");
        syncData();
      })
      .catch((err) => {
        console.error("Failed to connect to MongoDB", err);
      });

    app.get("/", (req, res) => {
      res.send("Star Wars API");
    });

    app.use("/people", peopleRoutes);
    app.use("/films", filmRoutes);
    app.use("/starships", starshipRoutes);
    app.use("/planets", planetRoutes);

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

start();
