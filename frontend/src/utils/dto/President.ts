import { President } from "../types";

export interface PresidentApi {
    name: string;
    start_date: string;
    end_date: string;
    url_logo: string;
}

export class PresidentDTO{
    name: string;
    start_date: string;
    end_date: string;
    url_logo: string;

    constructor(president: PresidentApi){
        this.name = president.name;
        this.start_date = president.start_date;
        this.end_date = president.end_date;
        this.url_logo = president.url_logo;
    }

    toCamelCase(): President {
        return {
            name: this.name,
            startDate: this.start_date,
            endDate: this.end_date,
            urlLogo: this.url_logo
        };
    }
}