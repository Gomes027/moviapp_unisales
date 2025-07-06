# MovieApp Web

## Descrição do Projeto

Este projeto é a versão web do MovieApp, desenvolvido originalmente como desafio para mobile. Ele permite que os usuários pesquisem filmes, visualizem detalhes, elenco e trailers utilizando a API do TMDB. A aplicação foi desenvolvida utilizando React com Vite, garantindo uma experiência rápida e responsiva no navegador.

O objetivo do projeto é aplicar conceitos de desenvolvimento web front-end, consumindo APIs externas, gerenciando rotas e apresentando uma interface amigável para o usuário.

---

## Tecnologias Usadas

- [React](https://reactjs.org/) — Biblioteca para construção da interface
- [Vite](https://vitejs.dev/) — Ferramenta de build e dev server moderno
- [TypeScript](https://www.typescriptlang.org/) — Superset do JavaScript com tipagem estática
- [React Router](https://reactrouter.com/) — Gerenciamento de rotas no SPA
- [TMDB API](https://www.themoviedb.org/documentation/api) — Fonte dos dados de filmes, elenco e trailers
- CSS Modules e CSS tradicional para estilização

---

## Como Rodar Localmente

1. Clone o repositório:

```bash
git clone https://github.com/Gomes027/moviapp_unisales.git
```

2. Entre na pasta do projeto:

```bash
cd moviapp_unisales
```

3. Instale as dependências:

```bash
npm install
```

4. Crie um arquivo `.env` na raiz do projeto com sua chave da API TMDB:

```
VITE_API_KEY=suachaveaqui
```

5. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

6. Abra o navegador no endereço indicado pelo terminal (normalmente `http://localhost:5173`)

---

## Link do Site Hospedado

Acesse a versão web publicada no GitHub Pages:

[https://gomes027.github.io/moviapp_unisales/](https://gomes027.github.io/moviapp_unisales/)

---

## Funcionalidades

- Listagem de filmes em exibição (now playing)
- Pesquisa dinâmica de filmes
- Página de detalhes com informações completas do filme, elenco e trailer
- Interface responsiva e intuitiva
- Tratamento e exibição de erros e carregamentos

---

## Estrutura do Projeto

- `/src/components` — Componentes React reutilizáveis (MovieCard, MovieInfo, CastList, Trailer)
- `/src/hooks` — Hook customizado para consumo da API (`useMovies`)
- `/src/pages` — Páginas principais (Home, Details)
- `/src/services` — Serviços para chamadas à API e funções auxiliares
- `/src/styles` — Arquivos CSS para estilização

---

## Desafios e Aprendizados

Os principais desafios foram integrar a API do TMDB e adaptar o layout para web usando React e Vite, além de lidar com o deploy no GitHub Pages e configuração do ambiente `.env`. Aprendi sobre roteamento SPA com React Router e consumo de APIs com tratamento de estados (loading, error).

---

## Contato

Para dúvidas, sugestões ou contribuições, entre em contato:

- GitHub: [Gomes027](https://github.com/Gomes027)
- Email: werllen2016@gmail.com
