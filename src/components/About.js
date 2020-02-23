import React, { Component } from 'react';

class About extends Component {
  render() {
    return(
      
      <div id="main-container" class="container" style ={{ background: "#acdf", height: "425px"}}>
            <section class="main-content" >
                <h4 >About Me</h4>
                <div class="row">
                    <div class="col-lg-2">
                        <div class="thumbnail">
                        <img src= { require("./Images/barack.jpg")} alt="Me" style={{height: '200px'}} />
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <p style ={{color: "black"}}> Hello, my name is Baraka Ibrahim. I'm an aspiring Full-stack Web developer. I completed Full-stack Web development course at The University of Minnesota Bootcamp.</p>
                    </div>
                </div>
            </section>
        </div>
    )
  }
}

export default About;