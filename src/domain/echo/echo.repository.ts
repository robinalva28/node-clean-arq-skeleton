import {EchoValue} from "./echo.value";

export interface EchoRepository {
    findEcho(): EchoValue;
}