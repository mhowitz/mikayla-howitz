import React from "react";

function Modal({ onClose, currentProject}) {
    const { title, photo, link, github } = currentProject;
    
    return(
        <div className="modal is-active">
            <div className="modal-background"></div>
            <div className="modal-card ">
            <header className="modal-card-head">
            <h1 className="modal-card-title has-text-centered">{title}</h1>
            <button onClick={onClose} className="delete" aria-label="close"></button>
            </header>
            <section className="modal-card-body">
            <p className="image">
            <img  className="image is-large" id="modalImage" src={require(`../../assets/images/${photo}.JPG`)}  alt={title}/>

            </p>
            
 
            </section>
            <footer className="modal-card-foot columns">
            <a className="button is-link is-medium column m-2 is-size-4 has-text-light" href={link}>Deployed Link</a>
                <a className ="button is-link is-medium column m-2 is-size-4 has-text-light" href={github}>Github</a>
            </footer>


            </div>

        </div>
    )
}

export default Modal;