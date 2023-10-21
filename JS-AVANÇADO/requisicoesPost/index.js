// função que cria os elementos dos artigos na pagina

async function renderArticle(articleData) {
  const article = document.createElement(`article`);
  article.classList.add(`article`);
  article.id = `article-${articleData.id}`;

  const title = document.createElement(`h3`);
  title.classList.add(`article-title`);
  title.textContent = articleData.title;

  const content = document.createElement(`div`);
  content.classList.add(`article-content`);
  content.innerHTML = articleData.content;

  const author = document.createElement(`div`);
  author.classList.add(`article-author`);
  author.textContent = articleData.author;

  article.append(title, author, content);
  document.getElementById(`articles`).appendChild(article);
}

// requisição GET para mostrar os artigos na pagina

async function fetchArticles() {
  const articles = await fetch(`http://localhost:3000/articles`).then((res) =>
    res.json()
  );

  articles.forEach(renderArticle);
}

// quando conteudo do DOOM for carregado executa a função fetchArticles() para mostrar os artigos
document.addEventListener(`DOMContentLoaded`, fetchArticles);

// pegando o formulario para renderizar
const form = document
  .querySelector(`form`)
  .addEventListener(`submit`, async (ev) => {
    ev.preventDefault();

    const articleData = {
      title: document.querySelector(`#title`).value,
      author: document.querySelector(`#author`).value,
      content: document.querySelector(`#content`).value,
    };

    // requisição POST tem que fazer essas pequenas alterações passando um objeto como segundo parametro
    const response = await fetch(`http://localhost:3000/articles`, {
      method: `POST`,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(articleData),
    });

    const savedArticle = await response.json(); //===> convertendo a response para json()
    form.reset(); // ===> reset() para limpar o formulario
    renderArticle(savedArticle);
    console.log(savedArticle);
  });
