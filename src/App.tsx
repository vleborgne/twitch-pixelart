import React, {useEffect, useState} from 'react';
import './App.css';
import {parseWebsocketMessage} from "./util/parseWebsocketMessage";
import {checkAndParseInput} from "./util/checkInput";
import useWebSocket, {ReadyState} from 'react-use-websocket';
import {Table} from "./components/Table";
import {Intro} from "./components/Intro";
import {ACCOUNT, CHANNEL, NBR_OF_COL, NBR_OF_LINE, PASSWORD} from "./config";


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
            <div className={"Content"}>
                <Intro/>
                <Table table={table}/>

            </div>
            <div className={"footer"}>
                Source code : <b> https://github.com/vleborgne/twitch-pixelart</b>

            </div>

        </div>
    );
}

export default App;
