import {Router} from "express";
import {EchoController} from "../controllers/echo.controller";
import {MockRepository} from "../repository/mockRepository";
import {EchoUseCase} from "../../application/echoUseCase";

export const echoRoute = Router();
/*
* Init Repository
* */
const mockEchoRepository = new MockRepository();
/*
* Init Use Cases
* */
const echoUseCase = new EchoUseCase(mockEchoRepository);
/*
* Init Echo Controller
* */
const echoController = new EchoController(echoUseCase);
/*
* Routes
* */

export default echoRoute
    .get('/echo', echoController.getController)

