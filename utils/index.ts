const slugify = (str: string) => {
  return str
    .toLowerCase()
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, "-");
};

const composeArticleSlug = (id: number, title: string) => {
  return `${slugify(title)}-${id}`;
};

const extractArticleIdFromSlug = (slug: string) => {
  return slug.split("-").pop();
};

export { slugify, composeArticleSlug, extractArticleIdFromSlug };
