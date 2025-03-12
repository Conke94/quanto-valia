import { ForwardIcon, BackwardIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useRef, useState } from 'react'
import { useQuery } from '@tanstack/react-query'

import { QUERY_KEYS, BASE_URL, type President } from '../../utils/index.ts'
import { PresidentDTO, PresidentApi } from '../../utils/dto/President.ts';
import { Profile } from './Profile/index.tsx'
import * as S from './styles.ts'

const ITEM_WIDTH = 300;

export function MainPage(){
    const [scrollPosition, setScrollPosition] = useState(0);
    const listRef = useRef<HTMLDivElement>(null);

    const {data, isLoading, isError} = useQuery(
        {
            queryKey: [QUERY_KEYS.GET_PRESIDENTS], 
            queryFn: async () => {
                const response = await (await fetch(`${BASE_URL}/standard/president`)).json();
                const data: President[] = response.map((president: PresidentApi) => new PresidentDTO(president).toCamelCase())
                return data;
            }
        }
    );

    useEffect(() => {
        if (listRef.current) {
            listRef.current.scrollLeft = listRef.current.scrollWidth;
            setScrollPosition(listRef.current.scrollWidth);
        }
    }, [data]);

    function handleScroll(scrollAmount: number){
        if (listRef.current) {
            const newScrollPosition = scrollPosition + scrollAmount;
            listRef.current.scrollLeft = newScrollPosition;
            setScrollPosition(newScrollPosition);
        }
    }

    return (
        <S.Container>
            <div style={{width: '10%', display: 'flex', justifyContent: 'center'}}>
                <button onClick={()=>handleScroll((-1)*ITEM_WIDTH)} style={{backgroundColor: 'transparent', width: '50%', cursor: 'pointer', border: 'none', color: 'blue'}}>
                    <BackwardIcon className="w-6 h-6 text-blue-500 rotate-180" />
                    <span className="sr-only">.</span> 
                </button>
            </div>
            <S.List ref={listRef}>
                {data?.map(president => <Profile president={president} />)}
            </S.List>    
            <div style={{width: '10%', display: 'flex', justifyContent: 'center'}}>
                <button onClick={() => handleScroll(ITEM_WIDTH)} style={{backgroundColor: 'transparent', width: '50%', cursor: 'pointer', border: 'none', color: 'blue'}}>
                    <ForwardIcon className="w-6 h-6 text-blue-500" />
                    <span>.</span>                   
                </button>
            </div>
        </S.Container>
    )
}