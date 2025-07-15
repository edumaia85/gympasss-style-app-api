# Gympass Style App API

API inspirada no Gympass, desenvolvida em Node.js com Fastify, Prisma e PostgreSQL.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **TypeScript**: Tipagem estática para JavaScript.
- **Fastify**: Framework web rápido e eficiente.
- **Prisma ORM**: Mapeamento objeto-relacional para banco de dados PostgreSQL.
- **PostgreSQL**: Banco de dados relacional.
- **Vitest**: Testes automatizados.
- **Zod**: Validação de dados.
- **Docker**: Containerização de serviços (banco de dados).

## Requisitos Mínimos

- **Node.js** v18 ou superior
- **npm** v9 ou superior
- **Docker** (opcional, mas recomendado para rodar o banco de dados facilmente)
- **PostgreSQL** (caso não utilize Docker)

## Instalação e Execução

1. **Clone o repositório:**
   ```sh
   git clone <https://github.com/edumaia85/gympasss-style-app-api.git>
   cd gympasss-style-app-api
   ```

2. **Instale as dependências:**
   ```sh
   npm install
   ```

3. **Configure as variáveis de ambiente:**
   - Crie um arquivo `.env` na raiz do projeto com a variável `DATABASE_URL` apontando para seu banco PostgreSQL. Exemplo:
     ```
     DATABASE_URL="postgresql://docker:docker@localhost:5432/gympass"
     ```

4. **Suba o banco de dados com Docker (opcional, recomendado):**
   ```sh
   docker-compose up -d
   ```

5. **Execute as migrations do Prisma:**
   ```sh
   npx prisma migrate deploy
   ```

6. **Inicie a aplicação em modo desenvolvimento:**
   ```sh
   npm run start:dev
   ```

7. **Testes:**
   - Para rodar os testes:
     ```sh
     npm run test
     ```
   - Para rodar os testes end-to-end:
     ```sh
     npm run test:e2e
     ``` 