import { slugify, composeArticleSlug, extractArticleIdFromSlug } from "..";

const str = "The quick brown fox jumps over the lazy dog.";

describe("slugify", () => {
  it("dunno whats gonna show", () => {
    expect(slugify(str)).toBe("the-quick-brown-fox-jumps-over-the-lazy-dog");
  });
});

describe("composeArticleSlug", () => {
  it("also dunno what to expect", () => {
    expect(composeArticleSlug(777, "TITLE")).toBe("title-777");
  });
});

describe("extractArticleIdFromSlug", () => {
  it("exactly the same dunno what to expect", () => {
    expect(extractArticleIdFromSlug(str)).toBe(str);
  });
});
