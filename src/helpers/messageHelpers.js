export const formatMessage = (template, word) => {
  return template.title.split("****").join(word.title);
};