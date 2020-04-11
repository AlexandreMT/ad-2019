# AD-2019 - ADIRETO
Aplicação de sorteio de amigo secreto

## Executando o back-end

1. Navegue até a pasta `backend` através do comando `cd backend`

2. Instale as dependências:

   ```bash
   # yarn
   yarn
   
   # npm
   npm install
   ```

3. Configure as variáveis de ambiente conforme mostrado no `.env.example`

4. Rode o projeto executando `yarn dev` ou `npm run dev`

## Executando o front-end

1. Navegue até a pasta `frontend` através do comando `cd frontend`

2. Instale as dependências

   ```bash
   # yarn
   yarn
   
   # npm
   npm install
   ```

3. Certifique-se do back-end estar rodando na porta `5000` ou altere a porta na variável de ambiente de desenvolvimento em `src/environments/environment.ts`

4. Rode o projeto através do comando `ng serve` (https://cli.angular.io/) ou caso não tenha a CLI do Angular instalada, rode através do comando `yarn start` ou `npm start`