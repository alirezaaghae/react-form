import Table from './components/Table';
import Form from './components/Form';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';

const  App = () => {
  const [isEdit , setIsEdit] = useState(false) ;
  const [list , setList] = useState([]);
  const [listEdit , setListEdit] = useState({});
  const formShow = isEdit ? (<Form getInput={(event)=>setList([...list , event])} setInput={listEdit} setEdit={setIsEdit}/>) : (<Form getInput={(event)=>setList([...list , event])}/>) 
  useEffect(()=>{ console.log(list)},[list])


    return (
      <div className='main'>
        <section>
          <div className='title'>
            <h1>Form</h1>
          </div>
          {formShow}
        </section>
        <section>
          <div className='title'>
            <h1>List component</h1>
          </div>
          <Table L={list} setL={setList} setObjEdit={setListEdit} setEdit={setIsEdit}/>
        </section>
      </div>
    );
}

export default App;
