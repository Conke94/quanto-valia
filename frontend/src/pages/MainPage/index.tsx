import React from 'react'
import { useQuery } from '@tanstack/react-query'

import { QUERY_KEYS, BASE_URL, type President } from '../../utils/index.ts'
import { PresidentDTO, PresidentApi } from '../../utils/dto/President.ts';
import { Profile } from './Profile/index.tsx'

export function MainPage(){
    const {data, isLoading, isError} = useQuery(
        {
            queryKey: [QUERY_KEYS.GET_PRESIDENTS], 
            queryFn: async () => {
                const response = await (await fetch(`${BASE_URL}/standard/president`)).json();
                const data: President[] = response.map((president: PresidentApi) => new PresidentDTO(president).toSnakeCase())
                return data;
            }
        }
    );

    return (
        <div style={{height: '90vh', display: 'flex', alignItems: 'center', marginLeft: '200px', marginRight: '200px'}}>
                {data?.map(president => <Profile president={president} />)}
        </div>
        
    )
}