# Echelon - Sistema de Controle de Escalas Policiais

Sistema para gerenciamento de escalas, equipes e policiais com geração de grades mensais.

## MVP (Produto Mínimo Viável)

- **Controle de Escalas e Equipes**: Gerenciamento completo de escalas e organização de equipes
- **CRUD de Policiais**: Cadastro, consulta, atualização e exclusão de policiais
- **Geração de Grade de Escala**: Criação de grades mensais organizadas por equipes e por policial

## Tecnologias Utilizadas

### Front-end
- **React** - Biblioteca JavaScript para interfaces de usuário
- **Bootstrap** - Framework CSS para UI responsiva

### Back-end
- **Node.js** - Runtime JavaScript
- **Express** - Framework web para APIs REST

### Banco de Dados
- **SQLite** - Banco de dados relacional leve e fácil configuração

## Estrutura do Projeto

```
echelon/
├── frontend/          # Aplicação React
├── backend/           # API Node.js/Express
├── database/          # Arquivos SQLite
└── README.md
```

## Como Executar

### Pré-requisitos
- Node.js (versão 14 ou superior)
- npm ou yarn

### Backend
```bash
cd backend
npm install
npm start
```

### Frontend
```bash
cd frontend
npm install
npm start
```

## Funcionalidades

### Módulo Policiais
- Cadastro de novos policiais
- Listagem e busca de policiais
- Atualização de dados
- Remoção de registros

### Módulo Escalas
- Criação e gerenciamento de escalas
- Organização por equipes
- Atribuição de policiais às escalas

### Módulo Relatórios
- Grade mensal por equipe
- Grade mensal por policial
- Visualização e exportação de escalas

## Status do Projeto

🚧 **Em Desenvolvimento** - MVP em construção