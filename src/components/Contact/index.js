
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
function Contact() {
    return(
    <div className="container is-small box contactForm" >
    <h3 className="title is-centered">Contact Me!</h3>
    <h4 className="has-text-danger is-size-5">This section is still in the development process, if you wish to contact me, please email me or message me on Linkedin!</h4>
    <div className="field">
  <label className="label is-size-4">Name</label>
  <div className="control">
    <input className="input is-size-5" type="text" placeholder="Full Name"/>
  </div>
</div>
<div className="field">
  <label className="label is-size-4">Email</label>
  <div className="control has-icons-left has-icons-right">
    <input className="input is-size-5" type="email" placeholder="Email input" value="hello@"/>
    <span className="icon is-small is-left">
      <FontAwesomeIcon icon={faEnvelope}/>
    </span>
</div>


<div className="field">
  <label className="label is-size-4">Message</label>
  <div className="control">
    <textarea className="textarea is-size-5" placeholder="Send me a message here!"></textarea>
  </div>
</div>


<div className="field is-grouped">
  <div className="control">
    <button className="button is-link is-medium">Submit</button>
  </div>
  <div className="control">
    <button className="button is-link is-light is-medium">Cancel</button>
  </div>
</div>
    </div>
    </div>

    )
}

export default Contact;