import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';

// const Hello = ({ name }) => {
//   return (
//     <div>
//       My name is iyke strike , Hello 
//       {name}
//     </div>
//   );
// };

class Hello extends Component {
  constructor (props) {
    super(props);

    this.state = {
      clicked: true

    };
 
  }

  render () {
    return (
      <div className = {this.state.clicked ? 'clicked' : null }>
        Hello {this.props.name}
      </div>
    )

  }


}

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<Hello name="World" />, root);
}
 