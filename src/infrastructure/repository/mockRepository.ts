import {EchoRepository} from "../../domain/echo/echo.repository";
import {EchoValue} from "../../domain/echo/echo.value";

/* import the Schema... */

export class MockRepository implements EchoRepository {
    findEcho(): EchoValue {
        return new EchoValue('Echo...');
    }

}