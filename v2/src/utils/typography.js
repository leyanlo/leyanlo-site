import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '18px',
  headerFontFamily: [],
  bodyFontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Oxygen',
    'Ubuntu',
    'Cantarell',
    'Fira Sans',
    'Droid Sans',
    'Helvetica Neue',
    'sans-serif'
  ],
  overrideStyles: () => ({
    html: {
      overflowY: 'initial'
    }
  })
});

export default typography;
