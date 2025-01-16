import React from "react";
import { format } from 'date-fns';

import type { President } from "../../../utils";
import { Avatar } from "./Avatar/index.tsx"

interface ProfileProps {
    president: President
}

export function Profile({president}: ProfileProps){
    return (
        <div className="flex flex-col items-start" style={{margin: '50px'}}>
            <Avatar />
            <div>{president.name}</div>
            <div>
                {format(new Date(president.startDate), 'yyyy')} -  {format(new Date(president.endDate), 'yyyy')}
            </div>
        </div>
    )
}