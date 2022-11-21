import {EchoRepository} from "../domain/echo/echo.repository";

export class EchoUseCase {
    constructor(private readonly echoRepository: EchoRepository) {
    }
    public getEchoAndShow() {
        return this.echoRepository.findEcho();
    }
}