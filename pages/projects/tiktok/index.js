const { WebcastPushConnection } = require('tiktok-live-connector');

export default function TikTok() {

    // Username of someone who is currently live
    const tiktokUsername = "ouckah";

    // Create a new wrapper object and pass the username
    const tiktokLiveConnection = new WebcastPushConnection(tiktokUsername);

    // Connect to the chat (await can be used as well)
    tiktokLiveConnection.connect().then((state) => {
        console.info(`Connected to roomId ${state.roomId}`);
    }).catch((err) => {
        // username is not valid or user is not live
        // TODO: make UI for card of my tiktok based on if connection works or not
        console.error('Failed to connect', err);
    })

    // Define the events that you want to handle
    // In this case we listen to chat messages (comments)
    tiktokLiveConnection.on('chat', (data) => {
        console.log(`${data.uniqueId} (userId:${data.userId}) writes: ${data.comment}`);
    })

    // And here we receive gifts sent to the streamer
    tiktokLiveConnection.on('gift', data => {
        console.log(`${data.uniqueId} (userId:${data.userId}) sends ${data.giftId}`);
    })

    return (
        <>
        
            <h1>Testing TikTok API!</h1>
        
        </>
    )

}