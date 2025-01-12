import { PresidentController } from "../controllers/president.js"
import { PresidentService } from "../services/president.js"

export class PresidentFactory{
    static createInstance(){
        const service = new PresidentService();
        const controller = new PresidentController(service);
        return { controller };
    }
}