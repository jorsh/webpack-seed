import reactDOM from 'react-dom';
import React from 'react';
import HelloComponent from './_hello';
import './styles.scss';

reactDOM.render(<HelloComponent name="Webpack"/>,
    document.getElementById('greet')
);

// Inserting an image using webpack
const imgElement = document.createElement('img');
imgElement.src = require('./images/webpack.png');
document.body.appendChild(imgElement);
