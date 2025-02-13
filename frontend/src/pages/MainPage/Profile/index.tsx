import React from "react";
import { format } from 'date-fns';

import type { President } from "../../../utils";
import { Avatar } from "./Avatar/index.tsx"

interface ProfileProps {
    president: President
}

export function Profile({president}: ProfileProps){

    function renderEndDate(){
        if(!president.endDate){return 'At the moment'}
        return format(new Date(president.endDate), 'yyyy')
    }


    return (
        <div className="flex flex-col items-center" style={{margin: '50px'}}>
            <Avatar />
            <div style={{textAlign:'center'}}>{president.name}</div>
            <div style={{textAlign:'center'}}>
                {format(new Date(president.startDate), 'yyyy')} -  {renderEndDate()}
            </div>
        </div>
    )
}