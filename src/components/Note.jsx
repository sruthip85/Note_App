import React from "react";
//import Button from "@material-ui/core"
//import Button from '@mui/material/Button';


function Note(props) {
  return (
    <div
      className="note"
      onClick={() => {
        props.onDelete(props.id);
      }}
    >
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button>Delete</button>
      
    </div>
  );
}

export default Note;
