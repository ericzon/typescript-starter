import { Calculator } from "../support/calculator";
import { World } from "cucumber";
 
declare module "cucumber" {
    interface World {
        calculator: Calculator;
        actual: number;
    }
}