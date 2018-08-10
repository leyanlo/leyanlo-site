import Typography from 'typography';
import stAnnesTheme from 'typography-theme-st-annes';

// Override overflow-y: scroll
// From https://github.com/KyleAMathews/typography.js/issues/154
stAnnesTheme.overrideStyles = () => ({
  html: {
    overflowY: 'initial'
  }
});

const typography = new Typography(stAnnesTheme);

export default typography;
