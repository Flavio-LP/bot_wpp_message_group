# node_wpp

Este projeto é um bot simples para envio automático de mensagens em grupos do WhatsApp utilizando a biblioteca [whatsapp-web.js](https://github.com/pedroslopez/whatsapp-web.js).

## Funcionalidades

- Envia mensagens automáticas para um grupo do WhatsApp em intervalos configuráveis.
- Utiliza autenticação persistente (com `LocalAuth`) para não precisar escanear o QR Code toda vez.
- Exibe QR Code no terminal para autenticação inicial.

## Requisitos

- Node.js (v14 ou superior)
- Uma conta do WhatsApp (pode ser Business ou pessoal)
- Google Chrome ou Chromium instalado no sistema

## Instalação

1. Clone este repositório:
    ```sh
    git clone https://github.com/seu-usuario/node_wpp.git
    cd node_wpp
    ```

2. Instale as dependências:
    ```sh
    npm install
    ```

## Uso

1. Execute o bot:
    ```sh
    node bot.js
    ```

2. No primeiro uso, escaneie o QR Code exibido no terminal com o WhatsApp Web.

3. O bot enviará mensagens automáticas para o grupo configurado no intervalo definido.

## Configuração

- Edite o arquivo `bot.js` para alterar:
    - O ID do grupo (`GROUP_ID`)
    - O intervalo de envio (`CHECK_INTERVAL`)

## Observações

- O bot só envia mensagens para grupos dos quais o número autenticado faz parte.
- A sessão é salva localmente na pasta `.wwebjs_auth` (já ignorada pelo `.gitignore`).

## Licença

Este projeto é apenas para fins educacionais.