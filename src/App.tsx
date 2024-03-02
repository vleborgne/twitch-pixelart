import React, {useEffect, useState} from 'react';
import './App.css';
import {parseWebsocketMessage} from "./util/parseWebsocketMessage";
import {checkAndParseInput} from "./util/checkInput";
import useWebSocket, {ReadyState} from 'react-use-websocket';
import {Table} from "./components/Table";


// Your target chanel (usually the usermname)
const CHANNEL = '#johndoe';  // Replace with your channel, starts with #
// Your account
const ACCOUNT = 'johndoe';   // Replace with the account the bot runs as
// Password can be generated here https://twitchapps.com/tmi/
const PASSWORD = 'oauth:xxx';


// Size of the grid
export const NBR_OF_LINE = 100;

// For now LINE=COLUMNS
export const NBR_OF_COL = NBR_OF_LINE;
// Size in pixel of one cell
export const CELL_SIZE = 7;


const INIT_TABLE = Array(NBR_OF_COL).fill("").map(() => Array(NBR_OF_LINE).fill(""))

function App() {

    const {sendMessage, lastMessage, readyState} = useWebSocket('ws://irc-ws.chat.twitch.tv:80', {
        onOpen: () => {
            console.log('WebSocket connection established.');
        }
    });

    useEffect(() => {
        if (readyState === ReadyState.OPEN) {
            sendMessage(`PASS ${PASSWORD}`)
            sendMessage(`NICK ${ACCOUNT}`)
            sendMessage(`JOIN ${CHANNEL}`)
        }
    }, [readyState])

    const [table, setTable] = useState(INIT_TABLE)

    const updateTable = ({x, y, color}: { x: number, y: number, color: string }) => {
        let newTable = [...table]
        newTable[x][y] = color;
        setTable(newTable)
    }


    useEffect(() => {
        if (lastMessage?.data) {
            const parsedMsg = parseWebsocketMessage(lastMessage);
            if (parsedMsg) {
                const coordonatesToUpdate = parsedMsg && checkAndParseInput(parsedMsg)
                coordonatesToUpdate && updateTable(coordonatesToUpdate)
            }
        }
    }, [lastMessage])


    return (
        <div className="App">
            <Table table={table}/>
        </div>
    );
}

export default App;