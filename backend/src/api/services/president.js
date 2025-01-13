import logger from '../utils/logger.js'

export class PresidentService{
    constructor(repository){
        this.repository = repository;
    }

    async index(){
        logger.info("[PresidentService] index init");
        // const data = [
        //     {
        //         name: 'Luis Inácio Lula',
        //         startYear: 2007,
        //         endYear: 2010,
        //         urlLogo: '',
        //         inflation_percentage: 1,
        //         salary_increase_percentage: 0
        //     },
        //     {
        //         name: 'Dilma Roussef',
        //         startYear: 2011,
        //         endYear: 2014,
        //         urlLogo: ''
        //     },
        //     {
        //         name: 'Dilma Roussef',
        //         startYear: 2015,
        //         endYear: 2016,
        //         urlLogo: ''
        //     },
        //     {
        //         name: 'Michel Temer',
        //         startYear: 2016,
        //         endYear: 2019,
        //         urlLogo: ''
        //     },
        //     {
        //         name: 'Jair Messias Bolsonaro',
        //         startYear: 2019,
        //         endYear: 2023,
        //         urlLogo: ''
        //     },
        //     {
        //         name: 'Luis Inácio Lula',
        //         startYear: 2023,
        //         endYear: 2026,
        //         urlLogo: ''
        //     }
        // ];
        const data = await this.repository.findAll();
        logger.info("[PresidentService] index finish");
        return data;
    }
}