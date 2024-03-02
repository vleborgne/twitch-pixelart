/***
 @todo find or write a lib to parse and read this
 ***/
export const parseWebsocketMessage = (msg: MessageEvent) => {
    const msgParts = msg.data.split(' ')

    if (Array.isArray(msgParts)) {
        if (msgParts.length > 3) {
            if (msgParts[1] === 'PRIVMSG') {
                const messageTypedByUser = msgParts.slice(3).join(" ");
                if (messageTypedByUser.startsWith(':pixel')) {
                    const parts = messageTypedByUser.split(" ");
                    if (Array.isArray(parts) && parts.length === 3) {
                        const coord = parts[1];
                        const color = parts[2];
                        const xy = coord.split(":");
                        if (Array.isArray(xy) && xy.length === 2) {
                            const x = xy[0];
                            const y = xy[1];
                            return {x, y, color}
                        }
                    }
                }
            }
        }
    }
}