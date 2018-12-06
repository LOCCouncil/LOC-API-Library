async function sendMessage() {
    const msg = await message.channel.send('test');
msg.edit('k');
}
sendMessage();