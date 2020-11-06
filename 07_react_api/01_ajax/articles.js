const articles = [
  { id: 1, slug: 'test', category: 'test' },
  { id: 2, slug: 'test 2', category: 'test' },
  { id: 3, slug: 'test 3', category: 'test' },
];

const categories = {
  test: [
    { id: 1, slug: 'test', category: 'test' },
    { id: 2, slug: 'test 2', category: 'test' },
    { id: 3, slug: 'test 3', category: 'test' },
  ],
};

const db = {
  getArticle(slug) {
    return new Promise((resolve, reject) => {
      const index = articles.findIndex((article) => article.slug === slug);
      // eksempel på falsy values hvis vi ikke bruker article < 0
      if (!index && index < 0) {
        reject(new Error('Article not found'));
      }
      resolve(articles[index]);
    });
  },
  getCategory(slug) {
    return new Promise((resolve, reject) => {
      const category = categories[slug];
      if (!category) {
        reject(new Error('Category not found'));
      }
      resolve(category);
    });
  },
};

const articleWork = function (slug) {
  db.getArticle(slug)
    .then((article) => db.getCategory(article.category))
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
};

// articleWork('test');

export { db };

const articleWorkAsync = async function (slug) {
  try {
    const article = await db.getArticle(slug);
    const category = await db.getCategory(article.slug);
    return { article, category };
  } catch (error) {
    console.log(error);
  }
};

// kan resolve med then eller wrappe denne i en en async funksjon sammen med andre "funksjoner"
articleWorkAsync('test').then((result) => console.log(result));
