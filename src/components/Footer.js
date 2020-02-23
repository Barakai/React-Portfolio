import React from "react";

 function Footer(){
const currentYear = new Date().getFullYear();
 return <p style = {{backgroundColor :"skyblue"}}> Copyright © {currentYear}</p>;
 }
 export default Footer;