import React, {Component} from 'react';

class Portfolio extends Component{
    render(){
        return(
            
            <div  id="main-container" className="container">
            <section className = "main-content" style ={{ background: "#aeaca6", marginBottom: "10px"}}>
                <h4 style={{backgroundColor:"skyblue"}}>Projects</h4>
                <div class="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <h4 style={{color:"black;"}}>Weather Dashboard</h4>
                        <div className="thumbnail">
                        <img style = {{padding: 0}} src= { require("./Images/weather.png")} alt="Me" className="me-img"/>
                            <br/>
                            <a href= "https://github.com/Barakai/barakai.github.io/tree/master/homework06" class="link">Github Repo</a>
                            <br/>
                            <a href="https://Barakai.github.io/homework06/" class="link">Deployed Site</a>
                            <br/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <h4 style={{color:"black;"}}>Global Eats</h4>
                        <div className="thumbnail">
                        <img style = {{padding: 0}} src= { require("./Images/capture.PNG")} alt="Me" className="me-img"/>
                             <br/>
                             <a href= "https://github.com/Barakai/project-1" class="link">Github Repo</a>
                             <br/>
                             <a href="https://kaykuhl.github.io/project-1/html" class="link">Deployed Site</a>
                        </div>
                    </div>
                </div>
                <div class="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <h4 style={{color:"black;"}}>Note Taker</h4>
                            <div className="thumbnail">
                            <img style = {{padding: 0}} src= { require("./Images/note-taker.png")} alt="Me" className="me-img"/>
                                <br/>
                                <a href= "https://github.com/Barakai/Note-Taker" class="link">Github Repo</a>
                                <br/>
                                <a href="https://barak-note-taker.herokuapp.com/" class="link">Deployed Site</a>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <h4 style={{color:"black;"}}>Team Profile Generator</h4>
                          <div className="thumbnail">
                          <img style = {{padding: 0}} src= { require("./Images/team.png")} alt="Me" className="me-img"/>
                                <br/>
                                <a href= "https://github.com/Barakai/barakai.github.io/tree/master/homework10" class="link">Github Repo</a>
                                <br/>
                                <a href="https://Barakai.github.io/homework10/my-team.html" class="link">Deployed Site</a>
                          </div>
                        </div>
                </div>      
                
            </section>
        </div>
        
        )       
    }
}

export default Portfolio;