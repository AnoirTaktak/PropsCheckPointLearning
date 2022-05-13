import React from 'react'
import PropTypes from 'prop-types';
const Prof = (props) => {
    console.log(props);
  return (
    
    <div>
        <h1>
        Nom et Prenom : {props.x.fullName} <hr></hr>
        {props.children} <hr></hr>
        Biographie : {props.x.bio}<hr></hr>
        Adresse : {props.x.adresse}<hr></hr>
        </h1> 
        <button onClick={() => props.z(props.x.fullName)}>alert</button>
    </div>
  )
}
Prof.defaultProps = {
   // props.x.fullName = 'me',
    //props.x.bio ='fafafa',
    //props.x.adresse ='here',
}
Prof.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  adresse: PropTypes.string
};
export default Prof