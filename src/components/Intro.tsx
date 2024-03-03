import React, {useEffect} from "react";
import {AVAILABLE_COLOR, CHANNEL, NBR_OF_COL, NBR_OF_LINE} from "../config";


export const Intro = () => {
    useEffect(()=>{
        alert("Do not deploy this project on a public server")
    },[])
    return <div>

        <p className={"Intro"}>
            <h1>Twitch pixel game</h1>

            Type "pixel x:y color" on twitch chanel {CHANNEL} to change the color

            <ul>
                <li>x is the column number starting from the left at 1
                </li>
                <li>
                    y is the line number starting from the top at 1
                </li>
                <li>color can be one of the following <b>{AVAILABLE_COLOR.join(" ")}</b></li>
            </ul>
            For example, if a user types "pixel 4:10 chartreuse" the pixel at the 4th column and 10th line will
            change its color to chartreuse.

            <p>Current grid size is <b>{NBR_OF_LINE}x{NBR_OF_COL}</b></p>

        </p>
    </div>
}