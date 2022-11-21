import "dotenv/config";
import express from 'express';
import cors from 'express';
import {echoRoute} from "./infrastructure/routes/echo.route";

export const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3001;

app.use('/api', echoRoute);

app.listen(port, () => console.log(`Server is running at port ${port}`));

module.exports = app;



