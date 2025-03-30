
export const ToggleTheme = (computedStyle, style) => {
  const noticeStyle = computedStyle.getPropertyValue('--height-notice');

  noticeStyle === "575px" ? style.setProperty('--height-notice', "415px") : style.setProperty('--height-notice', '575px');
}
