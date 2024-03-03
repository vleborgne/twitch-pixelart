
const is3orMorePartMessge = (arr: Array<string>)=>{
    return Array.isArray(arr) && arr.length > 3;
}

const isPrivateMessage = (arr: Array<string>)=>{
    return is3orMorePartMessge(arr) && arr[1] === 'PRIVMSG'
};

const getMessage = (arr: Array<string>)=>{
    return arr.slice(3)
}

const getPixelCommand = (msg:Array<string>)=>{
    if (Array.isArray(msg) && msg.length === 3) {
        const coord = msg[1];
        const color = msg[2];
        const xy = coord.split(":");
        if (Array.isArray(xy) && xy.length === 2) {
            const x = xy[0];
            const y = xy[1];
            return {x, y, color}
        }
    }
}
export const parseWebsocketMessage = (msg: MessageEvent) => {
    try{
        const msgParts = msg.data.split(' ')
        if (isPrivateMessage(msgParts)) {
            const messageTypedByUser = getMessage(msgParts);
            if (messageTypedByUser[0]===':pixel') {
                return getPixelCommand(messageTypedByUser)
            }
        }
    }catch(err: unknown){
        console.error("parseWebsocketMessage: Can't parse the message ")
    }

}