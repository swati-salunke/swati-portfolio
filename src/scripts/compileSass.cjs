const sass = require('sass');

const result = sass.renderSync({
  file: 'src/App.scss', // Path to your SCSS file
  silenceDeprecations: ['legacy-js-api'],
  // other options...
});

console.log(result.css.toString());