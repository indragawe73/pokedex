import React, { Component } from "react";

class Loading extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "",
     };    
    
  }
  

  render() {
    return(
        <div className="wrap_loading">
            <div className="spinner"></div>
        </div> 
      )
  }
}

export default Loading;