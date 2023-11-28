# Consulta CEP: Cep By Miles

Este é um sistema para consultar CEPs, criado por meio de um desafio, o sistema foi criado utilizando um backend em Nest.js e o frontend em Angular.

## Para Começar:

## Configuração do Backend

1. **Navegue até a pasta `back-end-giross-prisma`:**

    ```bash
    cd back-end-giross-prisma
    ```

2. **Instale as dependências:**

    ```bash
    npm install
    ```

3. **Execute as migrações do banco de dados:**

    ```bash
    npx prisma migrate dev
    ```

4. **Inicie o servidor Nest.js:**

    ```bash
    npm run start:dev
    ```

   Acesse [http://localhost:3000](http://localhost:3000) para ter acesso a api.

## Configuração do Frontend

1. **Navegue até a pasta `frontEndDesafioCep`:**

    ```bash
    cd frontEndDesafioCep
    ```

2. **Instale as dependências:**

    ```bash
    npm install
    ```

3. **Inicie o servidor Angular:**

    ```bash
    ng serve
    ```

    Acesse [http://localhost:4200](http://localhost:4200) para utilizar o FrontEnd.

## Inserindo CEPs no Banco de Dados

1. **Na pasta `prisma`, no diretório `migrations` na pasta `insertCeps` há uma migration para ser executada e adicionar os ceps ao banco de dados, ao executá-la você adicionará alguns ceps no banco de dados para utilizar na aplicação, execute o comando:**

    ```bash
    npx prisma migrate dev
    ```

   **OU**

   Ou se preferir execute a query a seguir no banco de dados Mysql:
   
    ```bash
    INSERT INTO Cep (code, latitude, longitude) VALUES ('44091755', 57.775, -102.419), ('44091756', 57.780, -102.420), ('44091757', 57.785, -102.425), ('44091758', 57.790, -102.430), ('44091759', 57.795, -102.435), ('44091760', 57.800, -102.440), ('44091761', 57.805, -102.445), ('44091762', 57.810, -102.450), ('44091763', 57.815, -102.455), ('44091764', 57.820, -102.460), ('44091765', 57.825, -102.465);
    ```

---

**Detalhes:** O projeto não consume de uma API de ceps, toda a lógica de capturar os ceps dentro do raio de km inseridos foi criada com o auxílio da biblioteca geolib, o qual auxíliou a fazer o retorno deste cálculo.
##


### Desafio do Sistema de Consulta de CEPs ###

#### Objetivo:
Desenvolver um sistema multiplataforma que permita aos usuários logados realizar consultas de CEPs baseadas em um raio de distância específico e exibir os resultados em uma tabela. Além disso, é necessário ter uma página de histórico para visualização das consultas realizadas.

#### Funcionalidades Principais:
1. **Autenticação de Usuário:**
   - Os usuários devem ser capazes de se autenticar para acessar o sistema.
   - Após login, eles terão acesso à funcionalidade de consulta de CEPs.

2. **Consulta de CEPs por Raio de KM:**
   - Após o login, o usuário poderá inserir um CEP e um valor em km.
   - O sistema retornará todos os CEPs dentro do raio especificado em uma tabela.

3. **Página de Histórico de Consultas:**
   - O sistema deverá exibir um histórico das consultas realizadas por cada usuário.
   - Essa página deve apresentar as consultas anteriores em forma de lista ou tabela, com detalhes como data e hora da consulta, CEP e raio especificados.

#### Critérios de Avaliação:

1. **Histórico de commit:**
   - Frequência e consistência dos commits durante o período de sete dias.
   - Mensagens de commit claras e concisas, indicando as alterações realizadas.

2. **Organização e Estrutura do Código:**
   - Estrutura de pastas e arquivos bem definida, seguindo boas práticas de desenvolvimento.
   - Nomenclatura significativa para variáveis, funções e arquivos.
   - Utilização de padrões de projeto, quando aplicável.

3. **Qualidade do Código:**
   - Clareza, legibilidade e manutenibilidade do código.
   - Utilização de comentários explicativos para partes mais complexas do código.
   - Implementação de testes unitários para garantir a funcionalidade correta das principais partes do sistema.

4. **Resultado Funcional:**
   - Funcionamento adequado de todas as funcionalidades descritas.
   - Interface amigável e responsiva para a consulta de CEPs e visualização do histórico.

#### Tecnologias Obrigatórias:
- Angular (Front-end)
- NestJS (Back-end)
- SQL (Banco de dados)
- Testes unitários no Angular e NestJS
  
#### Prazo:
O desafio deve ser completado no prazo de 7 (sete) dias, a contar a partir do momento em que o repositório for enviado por e-mail.

#### Observação:
Em caso de ter uso de API externas, não precisa adicionar suas credenciais, apenas deixe um .env de exemplo e onde nossa equipe pode gerar as credenciais para teste. Só serão aceitas plataformas externas com teste gratuito.
