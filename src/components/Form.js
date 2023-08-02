import { useState, useRef } from "react";

const Form = (props) => {
  const [state, setState] = useState(0);
  const inputs = useRef({})
  var editMode = Object.keys(props.edit).length ? true : false;
  if (editMode) {
    inputs.current = props.edit;
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    if (editMode){
      Object.keys(inputs.current).forEach(function(key, index) {
        if ( key === name){
          inputs.current[key] = value;
        }
      });
      setState(state+1)
    } else{
      inputs.current[name] = value;
      
      setState(state+1)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.saveData(inputs.current);
    reset()
  }
  const reset = () => {
    inputs.current = {}
    props.setEdit({});
    editMode = false;
  }

  return ( 
  <> 
   <form className="form" onSubmit={handleSubmit}>
    <input className="textInput" type="text" name="name" value={inputs.current.name || ""} onChange={handleChange} placeholder="instert Name ..."/>
    <input className="textInput" type="text" name="family" value={inputs.current.family || ""} onChange={handleChange} placeholder="instert Family ..."/>
    <input className="textInput" type="text" name="id" value={inputs.current.id || ""} onChange={handleChange} placeholder="instert Id ..."/>
    <input className="textInput" type="text" name="score" value={inputs.current.score || ""} onChange={handleChange} placeholder="instert Score ..."/> 
    {editMode ? (<input className="submitInput" type="submit" value="update"/>) : (<input className="submitInput" type="submit" value="Send Request"/>)}
   </form> 
  </>
      
    )
}

export default Form;