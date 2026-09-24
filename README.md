# Melodia

Landing page do app de música **Melodia**, feita para o Check-Point 05 de Engenharia de Software (Front-end Design) da FIAP.

**Página publicada:** _cole aqui o link do GitHub Pages_

## Sobre a aplicação

A Melodia é um app de música para jovens e amantes de música que querem descobrir artistas novos. A página apresenta os quatro diferenciais do app:

- qualidade de som superior;
- criação de playlists personalizadas;
- descoberta de novos artistas;
- interface intuitiva.

## Seções da página

1. **Menu fixo** com efeito de transparência (fica transparente no topo e ganha fundo ao rolar).
2. **Hero:** título "Melodia: Sua Música, Sua Forma", descrição, botão "Ouvir Agora" e imagem em destaque (capa de álbum e vinil).
3. **Apresentação:** quatro benefícios com ícones do Font Awesome.
4. **Funcionalidades:** três cards.
5. **Depoimentos:** citações com foto de perfil.
6. **Formulário de contato:** coleta nome e e-mail.
7. **Rodapé:** contato, redes sociais e política de privacidade (texto que abre ao clicar).

## Tecnologias usadas

| Tecnologia | Uso no projeto |
| --- | --- |
| HTML5 | Estrutura da página (`header`, `main`, `section`, `article`, `figure`, `footer`) |
| CSS3 | Fontes, vinil, capa de álbum e efeito do menu (`css/style.css`) |
| Tailwind CSS (CDN) | Layout responsivo, cores, tipografia e espaçamentos, usando só as classes padrão (sem configuração) |
| Font Awesome 6 | Ícones dos benefícios, das funcionalidades e do rodapé |
| Google Fonts | Unbounded (títulos) e Figtree (textos) |
| JavaScript | Menu com transparência, botão "Ouvir Agora" e mensagem de sucesso do formulário |

## Estrutura de arquivos

```
melodia/
├── index.html
├── README.md
├── css/
│   └── style.css
├── js/
│   └── main.js
└── assets/
    ├── favicon.svg
    └── avatars/
        ├── beatriz.svg
        ├── rafael.svg
        └── camila.svg
```

## Decisões de design

- **Paleta:** cores padrão do Tailwind: `blue-600`, `slate-900`, `lime-300`, `pink-300` e `blue-50`, sem `tailwind.config`.
- **Tipografia:** Unbounded nos títulos e Figtree nos textos.
- **Visual clean:** poucas cores por seção, bastante espaço entre os blocos e sem elementos decorativos em excesso.
- **Responsividade:** classes do Tailwind com breakpoints `sm`, `md` e `lg` (uma coluna no celular, várias no desktop).
- **Áudio sem copyright:** o botão "Ouvir Agora" toca uma melodia com beat (bumbo e chimbal) gerados pela Web Audio API, sem usar arquivo de áudio.
- **Imagens:** a capa, o vinil e os avatares são feitos por nós (CSS e SVG). Depoimentos e nomes são fictícios.

## Interações em JavaScript

1. Menu fixo que ganha fundo ao rolar a página (evento `scroll`).
2. Botão **Ouvir Agora** que toca e pausa a melodia com beat e faz o vinil girar.
3. Formulário com campos obrigatórios (`required`) que mostra uma mensagem de sucesso ao enviar.

## Rodar localmente

https://ryanzinzx.github.io/Melodia/

## Integrantes do grupo

- Nome completo: Ryan Romagnoli Santos, RM:568845
- Nome completo: Lucas Zarantonelli Lourenço, RM:569164
- Nome completo: Vinicius Di Tulio Gomes Silva, RM:573019
- Nome completo: Felipe Romano de Paula Souza, RM:571653
- Nome completo: Nicole Barbosa Oliveira de Lima, RM:569505
