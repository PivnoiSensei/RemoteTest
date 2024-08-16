import { useState , useEffect } from 'react'
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RenderPage from "./components/condRender/condRender"
import EmojiPedia from "./components/emojiPedia/emojiPedia";

function App() {
  const [fruits, setFruits] = useState("");
  const [users, setUsers] = useState("");
  const [emojis, setEmojis] = useState("");
  const fetchApi = async () => {
    try {
      
      const fruitsResponse = await axios.get("http://localhost:3000/");
      console.log(fruitsResponse.data.fruits);
      const fruitsArray = fruitsResponse.data.fruits;
      setFruits(fruitsArray.join(' '));

      const response = await axios.get("http://localhost:3000/emojipedia");
      const {users, emojis} = response.data;
      
      setUsers(users); 
      console.log(users);

      setEmojis(emojis);
      console.log(emojis);

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(()=>{ fetchApi();}, []);

  return(
    <Router>
        <div>
            <Routes>
                <Route path="/" element = { <RenderPage fruits = {fruits} />} />
                <Route path="/emojipedia" element = {<EmojiPedia userNames = {users} emojis = {emojis} />} />
            </Routes>
        </div>
    </Router>
)
}

export default App
