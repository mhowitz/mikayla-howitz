import React, { useState } from "react";
import Modal from "../Modal";
function Projects() {
    const [project] = useState([
        {
            title: 'Money Bags Marketplace',
            photo: 'moneybagsmplace',
            cardPhoto: 'moneybags',
            link: 'https://moneybags-marketplace.herokuapp.com/',
            gitHub: 'https://github.com/mhowitz/business-adultmen',
            icon: 'flying-money'
        },
        {
            title: 'Planet Express.js',
            photo: 'planet-express',
            cardPhoto: 'p-express',
            link: 'https://planet-express-js.herokuapp.com/',
            gitHub: 'https://github.com/mhowitz/planet-express-js',
            icon: 'planet-logo'
        },
        {
            title: 'Food Finder',
            photo: 'food-finder',
            cardPhoto: 'ff-back',
            link: 'https://mhowitz.github.io/recipeapplication/',
            gitHub: 'https://github.com/mhowitz/recipeApplication',
            icon: 'food'
        },
        {
            title: 'Weather Dashboard',
            photo: 'weather-dash',
            cardPhoto: 'weth',
            link: 'https://mhowitz.github.io/weather-dashboard/',
            gitHub: 'https://github.com/mhowitz/weather-dashboard',
            icon: 'weather'
        }

    ])
    const [modalOpen, setModalOpen] = useState(false);
    const [currentProject, setCurrentProject] = useState();
    const triggerModal = (project) => {
        console.log(project);
        setCurrentProject(project);
        setModalOpen(!modalOpen);
    }
    return(
        <>
        <div className=" is-flex mt-6 ">
        
        {modalOpen && <Modal currentProject={currentProject} onClose={triggerModal}/>}
            {/* <h2 id="projects" className="is-size-3">Projects</h2> */}
            
            <div className = "tile is-ancestor ">
            <div className="tile is-12 is-flex-wrap-wrap is-justify-content-center is-justify-content-space-evenly p-1">
                {project.map((image, i) => (

                    <div key={i} className ="js-modal-trigger tile is-parent is-5 ">
                    <article className="tile pb-3 is-transparent is-child card is-clickable " onClick={() => triggerModal(image)} >
                    <div className="card-image">
                        <img src={require(`../../assets/images/${image.cardPhoto}.jpg`)} alt={image.title}/>
                    </div>
                    <div className="is-flex is-justify-content-center p-3 cardTitle">
                    <img src ={require(`../../assets/icons/${image.icon}.png`)} alt="logo" className="icon is-large is-justify-content-centered" id='projectIcon' />
                    <h1 className="title is-2 p-2">  {image.title}     </h1>
                    </div>


                    </article>

                    </div>
                ))}
            </div>
            </div>
            </div>
        </>

    )
};

export default Projects