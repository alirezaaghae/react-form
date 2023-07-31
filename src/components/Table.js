
const Table = ({data , deleteRow , editRow}) => {

  const removeItem = (key) => {
    deleteRow(key);
  }
 
    
    return (
      <>
        <div className="table">
        <div className="liead-dark">
            <ul className="ullist">
              <li className="col">#</li>
              <li className="col">Name</li>
              <li className="col">Family</li>
              <li className="col">National</li>
              <li className="col">Score</li>
              <li className="col">buttons</li>
            </ul>
        </div>
        <div>
        {
        data  && data.map((item , key)=>
            <ul key={key} className="ullist">
                <li className="col num">{key}</li>
                <li className="col name">{item.name}</li>
                <li className="col family">{item.family}</li>
                <li className="col id">{item.id}</li>
                <li className="col score">{item.score}</li>
                {/* <li className="col btns"><button onClick={() => {editItem(key)}} className="edit btn">edit</button><button onClick={() => {removeItem(key)}} className="remove btn">X</button></li> */}
                <li className="col btns"><button onClick={() => {editRow(key)}} className="edit btnn">✑</button><button onClick={() => {removeItem(key)}} className="remove btnn">␡</button></li>
            </ul>
            
         )
        }
 
        </div>
        </div>
      </>
    );
};

export default Table;