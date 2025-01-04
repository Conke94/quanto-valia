import React from "react";

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
                {president.startYear} - {president.endYear}
            </div>
        </div>
    )
}