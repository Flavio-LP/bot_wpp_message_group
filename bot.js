const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client();

client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', async () => {
    console.log('Client is ready!');


    const GroupID = "120363400501490171@g.us";
    const chats = await client.getChatById(GroupID);
    

    //chats.isGroup && chats.name === 'Teste_envio_wpp'

    try {
        //console.log(chats.name);
        //console.log(`ID: ${chats.id._serialized}`);
        chats.sendMessage('Mensagem enviada pelo Bot!');
    } catch(error){
        console.log(error);
    }

    
    console.log('End');
});

client.initialize();

