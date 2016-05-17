import React from "react";
import { Link } from "react-router";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";


export default class Layout extends React.Component {
  navigate() {    
    // this.props.history.replaceState(null, "/");
    this.props.history.pushState(null, "/");
  }

  render() {
        
    const { history } = this.props;
          
    return (    
        <div class="container-fluid">
           
              {<Header />}              
              {this.props.children}
              {<Footer />}            
             {/* <button class="btn btn-info" onClick={this.navigate.bind(this)}>Featured</button> */}          
       </div>
    );
  }
}