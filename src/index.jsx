import React from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';

const Hello = ({ name }) => {
  return (
    <div>
      My name is iyke strike , Hello 
      {name}
    </div>
  );
};

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<Hello name="World" />, root);
}
