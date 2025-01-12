export class PresidentController{
    constructor(service){
        this.service = service;

        this.index = this.index.bind(this);
    }

    async index(req, res){
        try{
            const data = await this.service.index();
            res.status(200).send(data);
        } catch (error){
            res.status(400).send("Failed to fetch presidents");
        }
    }
}