



function Contact (props) {
  const data = [{
    avatar: 'http://',
    full_name: "Sultan Aliev",
    prise: "1800",
    occupation: "Front-End Developer",
    id: "1"
  },
  {
    full_name: "Kalys Osmonaliev",
    occupation: "Back-End Developer",
    id: "2"
  },
  {
    full_name: "Nurs Karimbekov",
    occupation: "React Developer",
    id: "3"
  }
]
  return (
    <div>
       <div className="avatar"></div>
            <div className="description">
                <h2>{props.Full_name}</h2>
                <p>{props.occupation}</p>
                
            </div>
     
 
    </div>
  );
}

export default Contact;