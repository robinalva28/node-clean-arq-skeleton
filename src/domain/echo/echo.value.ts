import {EchoEntity} from "./echo.entity";

export class EchoValue implements EchoEntity{
    message: string;

    constructor(message: string) {
        this.message = message;
    }
}