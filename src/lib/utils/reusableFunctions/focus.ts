export const FocusOnElement = (id: string) => {
  console.log('typeof document', typeof document);
  if (typeof document !== 'undefined') {
    const inputElement = document.getElementById(id);
    if (inputElement) {
      inputElement.focus();
    }
  }
};
