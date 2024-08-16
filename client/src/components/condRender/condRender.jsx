import React, {useState} from "react";
import "../../styles/condRender.css";

//import Login from "./Login";
//var userIsRegistered = true;
// const currentTime = new Date().getHours();
// console.log(currentTime);

function App(props) {
  const [headingText, setHeadingText] = useState("Hello")
  const [buttonBackColor, setButtonBackColor] = useState("white")
  const [fullName, setFullName] = useState({
    fName:  "",
    lName: "",
  })
  const [headerName, setHeaderName] = useState("")
    function handleClick(){
      setHeaderName(name)
    }
  function checkEmpty(event){
    if(fullName.fName == ""){
      setHeadingText("Please fill the first name")
      event.preventDefault();
      return false;
    }else if(fullName.lName == ""){
      setHeadingText("Please fill the last name")
      event.preventDefault();
      return false;
    }
    else{
      setHeadingText("Submitted")
      return true;
    }
  }
  function changeStyle(isOver){
    setButtonBackColor(isOver ? "black" : "white");
  }
  function handleChange(event){
    const {value, name} = event.target;
    
    setFullName (prevName =>{
      if(name === "fName"){
        return{
          fName: value,
          lName: prevName.lName
        }  
      }else if(name === "lName"){
        return{
          fName: prevName.fName,
          lName: value
        }
      }
    })
  }
  return (
    <div className="container">
        <h1>{headingText} {fullName.fName} {fullName.lName}</h1>
        <h2>{props.fruits}</h2> 
        <form action="http://localhost:3000/addUser" method="POST" onSubmit={() => checkEmpty()}>
          <input 
            onChange={handleChange} 
            name="fName"
            type="text" id = "username" placeholder="First name" 
            value={fullName.fName}
          />
           <input 
            onChange={handleChange} 
            name="lName"
            type="text" id = "username" placeholder="Last name"  
            value={fullName.lName}
          />
          <button 
            id = "button-submit" type="submit"
            onClick={handleClick} 
            onMouseOver={() => changeStyle(true)} onMouseOut={() => changeStyle(false)} 
            style={{backgroundColor: buttonBackColor}}>
            Submit
          </button>
        </form>
        
        {/* {
            userIsRegistered ? <Login buttonText = "Login" LoggedIn = {true} onclickAction = ""/> : <Login buttonText = "Register" LoggedIn = {false}/>
        } */}
        <a href="/emojipedia">Get to emojis</a>
    </div>
  );
}

export default App;