export class PresidentController{
    constructor(){}

    async index(req, res){
        try{
            const data = [
                {
                    name: 'Luis Inácio Lula',
                    startYear: 2007,
                    endYear: 2010,
                    urlLogo: ''
                },
                {
                    name: 'Dilma Roussef',
                    startYear: 2011,
                    endYear: 2014,
                    urlLogo: ''
                },
                {
                    name: 'Dilma Roussef',
                    startYear: 2015,
                    endYear: 2016,
                    urlLogo: ''
                },
                {
                    name: 'Michel Temer',
                    startYear: 2016,
                    endYear: 2019,
                    urlLogo: ''
                },
                {
                    name: 'Jair Messias Bolsonaro',
                    startYear: 2019,
                    endYear: 2023,
                    urlLogo: ''
                },
                {
                    name: 'Luis Inácio Lula',
                    startYear: 2023,
                    endYear: 2026,
                    urlLogo: ''
                }
            ];
            res.status(200).send(data);
        } catch (error){
            res.status(400).send("Failed to fetch presidents");
        }
    }
}