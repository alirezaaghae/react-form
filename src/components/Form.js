import { useState } from "react";

const Form = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [inputs, setInputs] = useState({});
 
    console.log(Object.keys(props.edit));
    
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }
    
      const handleSubmit = (event) => {
        event.preventDefault();
        props.getInput(inputs);
        // props.setEdit(false);
        reset()
      }
      const reset =() =>{
        setInputs([])
      }

    return(
      <>
          <form className="form" onSubmit={handleSubmit}>
            <input className="textInput" type="text" name="name" value={inputs.name || ""} onChange={handleChange} placeholder="instert Name ..." />
            <input className="textInput" type="text" name="family" value={inputs.family || ""} onChange={handleChange} placeholder="instert Family ..." />
            <input className="textInput" type="text" name="id" value={inputs.id || ""} onChange={handleChange} placeholder="instert Id ..." />
            <input className="textInput" type="text" name="score" value={inputs.score || ""} onChange={handleChange} placeholder="instert Score ..." />
            { Object.keys(props.edit).length? (<input className="submitInput" type="submit" value="update"/>) : (<input className="submitInput" type="submit" value="Send Request"/>) }
            
          </form>
      </>
      
    )
}

export default Form;