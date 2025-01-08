import React from 'react'
import { useQuery } from '@tanstack/react-query'

import { QUERY_KEYS, BASE_URL, type President } from '../../utils/index.ts'
import { Profile } from './Profile/index.tsx'

export function MainPage(){
    // const data: President[] = [
    //     {
    //         name: 'Luis Inácio Lula',
    //         startYear: 2007,
    //         endYear: 2010,
    //         urlLogo: ''
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
    // ]

    const {data, isLoading, isError} = useQuery(
        {
            queryKey: [QUERY_KEYS.GET_PRESIDENTS], 
            queryFn: async () => {
                const response = await fetch(`${BASE_URL}/president`);
                return await (response.json()) as President[];
            }
        }
    );

    return (
        <div style={{height: '90vh', display: 'flex', alignItems: 'center', marginLeft: '200px', marginRight: '200px'}}>
                {data?.map(president => <Profile president={president} />)}
        </div>
        
    )
}