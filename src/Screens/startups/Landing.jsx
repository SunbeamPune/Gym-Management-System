import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Carrd from './Carrd';

import Grid from '@mui/material/Grid';


export default function CarouselComponent() {
    return (
      <>
      <center>
        <div className="carousel-wrapper" >
          
          
          
          <nav className="navbar navbar-default" role="navigation" style={{backgroundColor:"black"}} >
            
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">Title</a>
            </div>
            <div className="collapse navbar-collapse navbar-ex1-collapse">
              <ul className="nav navbar-nav">
                <li className=""><a href="register">Register</a></li>
                <li><a href="login">Login</a></li>
              </ul>
              <form className="navbar-form navbar-left" role="search" style={{marginTop:"-10px"}}>
                <div className="form-group" style={{marginTop:"13px"}}>
                  <input type="text" className="form-control" placeholder="Search"/>
                  <button type="submit" className="btn btn-default">Submit</button>
                </div>
                
                
                <h1 className="form-group" style={{color:'white',fontStyle:'oblique',paddingLeft:'100px',fontFamily:"serif"}}>GYM MANEGEMENT SYSTEM</h1>
              </form>
              
          
              <ul className="nav navbar-nav navbar-right">
                <li><a href="#">Link</a></li>
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown">Dropdown <b class="caret"></b></a>
                  <ul className="dropdown-menu">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li><a href="#">Separated link</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>  
            <div id="carousel-id" className="carousel slide" data-ride="carousel" style={{marginTop:"-20px"}}  >
                <ol className="carousel-indicators">
                    <li data-target="#carousel-id" data-slide-to="0" className=""></li>
                    <li data-target="#carousel-id" data-slide-to="1" className=""></li>
                    <li data-target="#carousel-id" data-slide-to="2" className="active"></li>
                </ol>
                <div className="carousel-inner" style={{height:'500px'}}>
                    <div className="item">
                    <img data-src="holder.js/900x500/auto/#777:#7a7a7a/text:First slide" alt="First slide" src='../IMG4.jpg'/>
                        <div className="container">
                            <div className="carousel-caption" style={{position:'absolute',bottom:'70%',zIndex:'20',textShadow:'0 1px rgba(0,0,0,6)'}}>
                                <h1 style={{color:"black",fontStyle:'oblique',fontFamily:"serif"}}>50% OFF</h1>
                                <p style={{color:"black"}}>ON FRIST GYM BOOKING GET A CHANCE TO HAVE 50% DISCOUNT </p>
                                <p><a className="btn btn-lg btn-primary" href="#" role="button">Sign up today</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                    <img data-src="holder.js/900x500/auto/#777:#7a7a7a/text:First slide" alt="First slide" src='../IMG5.jpg' style={{minHeight:'100px'}}/>
                        <div className="container">
                            <div className="carousel-caption" style={{position:'absolute',bottom:'70%',zIndex:'20',textShadow:'0 1px rgba(0,0,0,6)'}}>
                                <h1>Another example headline.</h1>
                                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                                <p><a className="btn btn-lg btn-primary" href="#" role="button">Learn more</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="item active">
                    <img className="holder.js/900x500/auto/#777:#7a7a7a/text:First slide" alt="First slide" src='../IMG6.jpg'/>
                        <div className="container">
                            <div className="carousel-caption" style={{position:'absolute',bottom:'70%',zIndex:'20',textShadow:'0 1px rgba(0,0,0,6)'}}>
                                <h1>One more for good measure.</h1>
                                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                                <p><a className="btn btn-lg btn-primary" href="#" role="button">Browse gallery</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="left carousel-control" href="#carousel-id" data-slide="prev"><span className="glyphicon glyphicon-chevron-left"></span></a>
                <a className="right carousel-control" href="#carousel-id" data-slide="next"><span className="glyphicon glyphicon-chevron-right"></span></a>
            </div>
            
        </div>
        </center>
        <div >
        <Grid container padding={10} gap={17} justify="center">
        <Carrd img="../IMG11.jpg" /><Carrd img="../IMG22.jpg"  /><Carrd  img="../IMG33.jpg" />
        </Grid>
        
        </div>
        </>
    );
}