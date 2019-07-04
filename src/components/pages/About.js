import React from 'react'

 function About() {

    return (
        <React.Fragment>
            <h1 style={aboutStyle}>About Us</h1> 
            <p style={aboutStyle}>All you can know about us!   </p>
        </React.Fragment>
    )
}

const aboutStyle={
    margin: '40px 20px', 
}
export default About;