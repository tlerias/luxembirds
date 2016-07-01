import React from 'react';
import ReactDOM from 'react-dom';

class Sticky extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        scrollingLock: false
      };
      // example how to bind object in React ES6
      this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount(){
      window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {

    if (window.pageYOffset > 150) {
      this.setState({
        scrollingLock: true
      });
    } else if (window.pageYOffset < 150) {
      this.setState({
        scrollingLock: false
      });
    }

  }

  render() {
    return (
      <div className={ (this.state.scrollingLock ? 'sticky__fixed' : 'sticky__default') + " " +this.props.givenClass}>
        {this.props.children}
      </div>
    )
  }
}

export default Sticky;