import React from "react";
import {CELL_SIZE} from "../config";

export const Cell = React.memo(({color}: { color: string }) => {
    console.log("render cell", color)
    return (<div style={{
            backgroundColor: color || 'Cornsilk',
            width: `${CELL_SIZE}px`,
            height: `${CELL_SIZE}px`,
            border: '0.3px solid grey'
        }}></div>
    );
})