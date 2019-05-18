import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { };
  }

  componentDidMount() {
    axios.get(`http://localhost:3001/reviews?randomListing=${Math.floor(Math.random() * 100) + 1}`)
      .then((data) => {
        console.log('THE DATA HAS ARRIVED!!!', data);
      })
      .catch(() => {
        console.log('THIS IS AN ERROR');
      });
  }

  render() {
    return (
      <div>
      This is working in the App!!
      </div>
    );
  }
}
export default App;
