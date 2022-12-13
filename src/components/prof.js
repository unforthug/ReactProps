import React from "react";
import './prof.css'
import im from './imgmb.jpg'

function Profile(props){
    return (<div>
        <div className="cadre">
          <div className="photo">
          <img className="pho" src={im} alt="profile photo"/>
          </div>
          <div className="desc">
               <p>Name :{props.name}</p>
               <p>Age  : {props.age}</p>
               <p>Profession :{props.prof}</p>
               <p>E-mail :{props.mail}</p>
               <p>Bio :{props.bio}</p>
              <center><button className='but' onClick={props.fun}>Click Me !</button></center>
          </div>
          </div>
    </div>)
}
Profile.defaultProps = {
    name: "Unknown",
    age: "+18",
    profession : "Unknown" ,
    mail : "@Unknown" ,
    bio : "..."
  }
export default Profile;

