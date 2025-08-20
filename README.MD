# ⚽ Champions API

API do jogo **Champions**, desenvolvida em **REST** com **Express**.  
Permite gerenciar jogadores (*players*) com operações de **CRUD**: adicionar, remover, atualizar e mudar status.  

---

## 🚀 Tecnologias
- [Node.js](https://nodejs.org/)  
- [Express](https://expressjs.com/)  
- [TypeScript](https://www.typescriptlang.org/)  

---

## 📦 Instalação

Clone o repositório e instale as dependências:

```bash
git clone <url-do-repositorio>
cd champions-api
npm install
```
▶️ Executando o projeto
Desenvolvimento
bash
Copiar código
npm run start:dev
Desenvolvimento com Watch
bash
Copiar código
npm run start:watch
Produção (build + execução)
bash
Copiar código
npm run start:dist
📂 Estrutura básica do projeto
bash
Copiar código
src/
 ├── server.ts      # Ponto de entrada da aplicação
 ├── routes/        # Definição das rotas
 └── controllers/   # Lógica das rotas
🔧 Funcionalidades
Listar jogadores

Adicionar jogadores

Atualizar informações

Alterar status

Remover jogadores
