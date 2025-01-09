import { PresidentController } from "../controllers/president.js"

export class PresidentFactory{
    static createInstance(){
        const controller = new PresidentController();
        return { controller };
    }
}