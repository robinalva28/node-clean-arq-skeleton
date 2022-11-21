import {Request, Response} from "express";
import {EchoUseCase} from "../../application/echoUseCase";

export class EchoController {
    constructor(private echoUseCase: EchoUseCase) {
        this.getController = this.getController.bind(this);
    }

    public getController(req: Request, res: Response) {
        const echo = this.echoUseCase.getEchoAndShow();
        res.send({message: echo.message});
    }
}
