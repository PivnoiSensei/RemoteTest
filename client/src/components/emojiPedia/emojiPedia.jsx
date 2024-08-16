import React from "react";
// import emojiData from "./emojiData"
import Entry from "./entry";
import "../../styles/emojiPedia.css"

function EmojiPedia(props) {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {Array.isArray(props.emojis) && props.emojis.length > 0 ?
        props.emojis.map(emoji => (
          <Entry
            key={emoji.id}
            emoji={emoji.emoji}
            name={emoji.name}
            meaning={emoji.meaning}
          />
        )): <div>Emojis are absent, add a new one!</div>
      }
      </dl>
      <h2>User List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(props.userNames) && props.userNames.length > 0 ? (
            props.userNames.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.userName}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2">Loading users...</td>
            </tr>
          )}
        </tbody>
      </table>
      
      <a href="/" className="centered-link">Get to home</a>
    </div>
  );
}
  
  export default EmojiPedia;