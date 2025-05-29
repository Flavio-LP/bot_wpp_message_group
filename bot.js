const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({

    puppeteer: {
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    }
});

// Configurações
const GROUP_ID = "120363400501490171@g.us";
const CHECK_INTERVAL = 60000; // intervalo de verificação em milissegundos (1 minuto)
let monitoringInterval;


client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', async () => {
    console.log('Client is ready!');
    
    // starta o monitoramento assim que o cliente estiver pronto
    startMonitoring();
});


client.on('disconnected', () => {
    console.log('Client disconnected');
    stopMonitoring();
});

// Função para iniciar o monitoramento
function startMonitoring() {
    console.log('Iniciando monitoramento...');
    
    // chamada da funcao inicial para enviar a primeira mensagem
    checkAndSendMessage();
    
    // Configura o intervalo para verificar periodicamente
    monitoringInterval = setInterval(checkAndSendMessage, CHECK_INTERVAL);
}

// Função para parar o monitoramento
function stopMonitoring() {
    if (monitoringInterval) {
        clearInterval(monitoringInterval);
        console.log('Monitoramento parado');
    }
}

// Função principal que verifica e envia mensagens
async function checkAndSendMessage() {
    try {
        const chat = await client.getChatById(GROUP_ID);
        
        // Aqui você simularia a verificação de alterações no banco
        // Por enquanto, vamos sempre enviar a mensagem com timestamp
        const message = `Mensagem automática - ${new Date().toLocaleString()}`;
        
        await chat.sendMessage(message);
        console.log('Mensagem enviada com sucesso:', message);
    } catch (error) {
        console.error('Erro ao enviar mensagem:', error);
    }
}

// processamento de encerramento
process.on('SIGINT', () => {
    console.log('Encerrando aplicação...');
    stopMonitoring();
    client.destroy();
    process.exit();
});

client.initialize();