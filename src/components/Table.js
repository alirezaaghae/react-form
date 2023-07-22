import { useState } from "react";

const Table = (props) => {

  const editItem = (key) => {
    // props.setEdit(true);
    props.setObjEdit(props.L[key]);
    console.log(props.L[key]);
  }
  const removeItem = (key) => {
    props.L.splice(key, 1);
    props.setL(props.L);
    console.log(props.L);
  }
    
    return (
      <>
        <div className="table">
        <div className="liead-dark">
            <ul className="row">
              <li className="col">#</li>
              <li className="col">Name</li>
              <li className="col">Family</li>
              <li className="col">National Code</li>
              <li className="col">Score</li>
              <li className="col">buttons</li>
            </ul>
        </div>
        <div>
        {
        props.L && props.L.map((item , key)=>
            <ul key={key} className="row">
                <li className="col num">{key}</li>
                <li className="col name">{item.name}</li>
                <li className="col family">{item.family}</li>
                <li className="col id">{item.id}</li>
                <li className="col score">{item.score}</li>
                {/* <li className="col btns"><button onClick={() => {editItem(key)}} className="edit btn">edit</button><button onClick={() => {removeItem(key)}} className="remove btn">X</button></li> */}
                <li className="col btns"><button onClick={() => {editItem(key)}} className="edit btn">edit</button><button onClick={() => {removeItem(key)}} className="remove btn">X</button></li>
            </ul>
            
         )
        }
 
        </div>
        </div>
      </>
    );
};

export default Table;