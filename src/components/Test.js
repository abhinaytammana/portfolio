import React, { Component } from 'react'
import axios from 'axios';

class Test extends Component {
    onClick = async () => {
        const response = await axios.get("http://127.0.0.1:5000");
        console.log(response);
    };

  render() {
    return (
      <div className='py-5 my-5'>
        <button className='btn btn-info btn-lg on' onClick={this.onClick}>click here!</button>
      </div>
    )
  }
}

export default Test;