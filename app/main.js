const hello = require('./_hello');
const imgElement = document.createElement('img');
require('./styles.scss');

hello('Webpack');

imgElement.src = require('./images/webpack.png');
document.body.appendChild(imgElement);
