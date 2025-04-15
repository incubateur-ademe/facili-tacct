export const FocusOnElement = (id: string) => {
  if (typeof document !== 'undefined') {
    const inputElement = document.getElementById(id);
    if (inputElement) {
      inputElement.focus();
    }
  }
}
