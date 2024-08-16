import React from "react";

function Form(props) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      {/* <input type="password" placeholder="Password" /> 
      {!props.LoggedIn && <input type="password" placeholder="Confirm Password" />} */}
      <input type="submit" id = "button" value={props.buttonText}/>
    </form>
  );
}

export default Form;