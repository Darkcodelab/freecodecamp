import { marked } from "marked";
marked.use({
  breaks: true,
});

export const mdToHTML = (md) => {
  const parsedMd = marked.parse(md);
  return parsedMd;
};
