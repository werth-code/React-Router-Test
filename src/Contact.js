import React,{useState} from 'react';

function Contact() {

  const [readMore,setReadMore]=useState(false);

  const extraContent=<div>
      <p className="extra-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, consectetur neque ab 
        porro quasi culpa nulla rerum quis minus voluptatibus sed hic ad quo sint, libero 
        commodi officia aliquam! Maxime.
      </p>
  </div>

  const linkName=readMore?'Read Less << ':'Read More >> '
  
  return (
    <div className="App">
      <a  className="read-more-link" onClick={()=>{setReadMore(!readMore)}}><h5>{linkName}</h5></a>
      {readMore && extraContent}
    </div>
  );
}

export default Contact;