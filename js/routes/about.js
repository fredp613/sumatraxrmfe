import React from "react";
import ReactTransitionGroup  from "react-addons-transition-group"
import ReactCSSTransitionGroup  from "react-addons-css-transition-group"
import { connect } from 'react-redux';
import css from "../../css/app.css";

 
class About extends React.Component {
  
  constructor() {
      super();      
  }

  render() {
          
    
      return (

          <div class="container-fluid">  
            <strong>ABOUT Sumatra Lifestyle</strong>                   
        </div>

      );
      
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(About);


