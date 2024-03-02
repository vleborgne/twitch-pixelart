import {CELL_SIZE} from "../App";
import {Cell} from "./Cell";


export const Table = ({table}: { table: Array<Array<string>> }) => {

    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${table[0].length}, 1fr)`,
            width: `${table[0].length * CELL_SIZE}px`
        }}>
            {table.map((row, rowIndex) => (
                row.map((color, colIndex) => (
                    <Cell key={`${rowIndex}-${colIndex}`} color={color}/>
                ))
            ))}
        </div>
    );
}