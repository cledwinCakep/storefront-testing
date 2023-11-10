export const capitalizeSentences = (text: string) => {
  return text.replace(/(^\w|\.\s+\w)/gm, function (sentence) {
    return sentence.toUpperCase();
  });
};
