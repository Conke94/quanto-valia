import React from 'react'
import { useQuery } from '@tanstack/react-query'

import { QUERY_KEYS, BASE_URL, type President } from '../../utils/index.ts'
import { Profile } from './Profile/index.tsx'

export function MainPage(){
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