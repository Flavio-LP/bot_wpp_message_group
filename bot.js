const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
    authStrategy: new LocalAuth() // Salva a sessão localmente
});

client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', async () => {
    console.log('Client is ready!');

    const GroupID = "120363400501490171@g.us";

    setInterval(async () => {
        try {
            const chat = await client.getChatById(GroupID);
            await client.sendMessage(GroupID, 'Mensagem enviada pelo Bot!');
            console.log(`Mensagem enviada para: ${chat.name}`);
        } catch (error) {
            console.log(error);
        }
    }, 5000); // 5000 ms = 5 segundos
});

client.initialize();

