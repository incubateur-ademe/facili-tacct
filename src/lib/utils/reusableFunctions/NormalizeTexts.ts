export const normalizeText = (content: string): string => {
  let newContent = content;
  newContent = newContent.replace(' :', ' :');
  newContent = newContent.replace(' ?', ' ?');
  return newContent;
};
