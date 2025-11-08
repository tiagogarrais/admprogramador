# Portal ADM Programador

Este é um portal web que integra múltiplos sistemas independentes, compartilhando banco de dados e sistema de login. O portal oferece uma galeria na página inicial para acesso fácil aos subsistemas.

## Visão Geral

O portal permite que usuários façam login uma vez e acessem diversos subsistemas:

- **Ecossistema de Pão**: Gerenciamento de receitas, calculadoras e temporizadores para fabricação de pão.
- **Inventário**: Sistema completo de controle de estoque.
- **Guarda Memória**: Fórum para guardar memórias de pessoas, lugares e eventos.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript no servidor.
- **Next.js**: Framework React para renderização no lado do servidor.
- **React**: Biblioteca JavaScript para criar interfaces de usuário.
- **NextAuth.js**: Biblioteca para implementar autenticação segura compartilhada.
- **Prisma**: ORM para banco de dados MySQL.
- **MySQL**: Banco de dados hospedado na Hostinger.

## Como Usar

1. Clone este repositório: `git clone https://github.com/tiagogarrais/admprogramador`.
2. Copie o arquivo .env.example e o renomeie para .env.
3. Preencha as informações necessárias no arquivo .env (credenciais do banco MySQL, Google OAuth, etc.).
4. Execute `npm install` para instalar as dependências.
5. Execute `npx prisma db push` para sincronizar o banco de dados.
6. Execute `npm run dev` para iniciar o servidor de desenvolvimento.
7. Acesse http://localhost:3000 e faça login para ver a galeria de sistemas.

## Estrutura do Projeto

- `/src/app/page.js`: Página inicial com galeria de sistemas.
- `/src/app/pao-da-stella-maris/`: Subsistema de fabricação de pão.
- `/src/app/inventario/`: Subsistema de inventário.
- `/src/app/guarda-memoria/`: Subsistema de guarda memória.
- `/prisma/schema.prisma`: Esquema do banco de dados.

## Contribuições

Contribuições são bem-vindas! Abra uma issue ou pull request para melhorias.

---

Criado por Tiago das Graças Arrais - [Perfil no GitHub](https://github.com/tiagogarrais)
