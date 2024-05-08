let article: readonly[number, string, boolean] = [11, "Title One", true];
article = [12, "Title Two", false];

console.log(article);

// Destructuring tuple

const [ id, title, published] = article;
console.log(id);
console.log(title);
console.log(published);



