import { useQuery } from '@tanstack/react-query'
import React from "react";


import type { AccumulatedInflation, AccumulatedWage } from '../../../utils/index.ts';
import { MinimumWageApi, MinimumWageDTO } from '../../../utils/dto/MinimumWage.ts';
import { President, QUERY_KEYS, BASE_URL } from "../../../utils/index.ts";
import { Avatar } from "./Avatar/index.tsx"

interface ProfileProps {
    president: President
}

export function Profile({president}: ProfileProps){
    const start_month = president.startDate.split('-')[1];
    const start_year = president.startDate.split('-')[0];

    const end_month = president.endDate ? president.endDate.split('-')[1] : new Date().getMonth();
    const end_year = president.endDate ? president.endDate.split('-')[0] : new Date().getFullYear();

    const {data: inflation, isLoading, isError} = useQuery(
        {
            queryKey: [QUERY_KEYS.GET_ACCUMULATED_INFLATIONS, start_month, start_year, end_month, end_year], 
            queryFn: async () => {
                const filter = `?start_month=${start_month}&start_year=${start_year}&end_month=${end_month}&end_year=${end_year}`;
                const response: AccumulatedInflation = await (await fetch(`${BASE_URL}/standard/inflation/accumulated${filter}`)).json();
                return response;
            }
        }
    );

    const {data: wage, isLoading: isLoadingWages, isError: isErrorWages} = useQuery(
        {
            queryKey: [QUERY_KEYS.GET_ACCUMULATED_WAGES, start_month, start_year, end_month, end_year], 
            queryFn: async () => {
                const filter = `?start_month=${start_month}&start_year=${start_year}&end_month=${end_month}&end_year=${end_year}`;
                const response = await (await fetch(`${BASE_URL}/standard/minimum-wage/accumulated${filter}`)).json();
                const data: AccumulatedWage = new MinimumWageDTO(response).toCamelCase();
                return data;
            }
        }
    );

    function renderEndDate(){
        if(!president.endDate){return 'Até o momento'}
        return president.endDate.split('-')[0];
    }

    return (
        <div className="flex flex-col items-center" style={{margin: '50px'}}>
            <Avatar />
            <div style={{textAlign:'center'}}>{president.name}</div>
            <div style={{textAlign:'center'}}>
                {president.startDate.split('-')[0]} - {renderEndDate()}
            </div>
            <div style={{textAlign:'center'}}>Inflação acumulada: {inflation?.total}%</div>
            <div style={{textAlign:'center'}}>Salário mínimo: {wage?.percentual.toFixed(2)}%</div>
        </div>
    )
}