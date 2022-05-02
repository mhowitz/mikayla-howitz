import React from "react";
import portrait from '../../assets/images/me.JPG'
function About() {

    return(
        <div className="container">
        <section className="columns box aboutBox">
         
            <div className="column  is-4"> 
                <img className="image is-small "src={portrait} alt="myself"/>
            
            </div>
            <div className="column is-8">
            
                <p className="is-size-3">
                    My name is Mikayla Howitz and I am from Salt Lake City Utah. I graduated from the University of Utah in May 2020 with a B.S. in Geography with an emphasis in Geographic Information Systems (GIS) and a B.S. in Environmental and Sustainability Studies with an emphasis in Air, Water, and Health. I have recently graduated from a coding Bootcamp at the University of Utah where I  learned HTML, CSS, JavaScript, Express, Node.js, MySql, MongoDB, React, and more! If I'm not coding I might be skateboarding, rock climbing, traveling, or biking!
                </p>
                </div>
 

        </section>
        </div>

    );
}

export default About;