import {NBR_OF_COL, NBR_OF_LINE} from "../App";


const AVAILABLE_COLOR = ['red', 'blue', 'yellow', 'green', 'white', 'grey', 'black', 'chartreuse', 'chocolate', 'coral', 'fuchsia']
export const checkAndParseInput = ({x, y, color}: { x: string, y: string, color: string }) => {
    if (Number.isNaN(x) || Number.isNaN(y) || !color) {
        return false;
    }
    const xNum = parseInt(x) - 1
    const yNum = parseInt(y) - 1
    const cleanColor = color.replaceAll('\r\n', '');
    if (AVAILABLE_COLOR.includes(cleanColor)) {
        if (xNum >= 0 && yNum >= 0 && xNum < NBR_OF_COL && yNum < NBR_OF_LINE) {
            return {x: xNum, y: yNum, color: cleanColor}
        }
    }
    return false
}