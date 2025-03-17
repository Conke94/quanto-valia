import { AccumulatedWage } from "../types";

export interface MinimumWageApi {
    initial_value: number;
    final_value: number;
    percentual: number;
}

export class MinimumWageDTO{
    initial_value: number;
    final_value: number;
    percentual: number;

    constructor(MinimumWage: MinimumWageApi){
        this.initial_value = MinimumWage.initial_value;
        this.final_value = MinimumWage.final_value;
        this.percentual = MinimumWage.percentual;
    }

    toCamelCase(): AccumulatedWage {
        return {
            initialValue: this.initial_value,
            finalValue: this.final_value,
            percentual: this.percentual
        };
    }
}