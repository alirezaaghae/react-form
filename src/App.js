import Table from './components/Table';
import Form from './components/Form';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';

const  App = () => {
  const [isEdit , setIsEdit] = useState(false) ;
  const [list , setList] = useState([])
  const [listEdit , setListEdit] = useState({});
  useEffect(()=>{ console.log(list)},[list])


    return (
      <div>
        {isEdit ? (<Form getInput={(event)=>setList([...list , event])} setInput={listEdit} setEdit={setIsEdit}/>) : (<Form getInput={(event)=>setList([...list , event])}/>) }
        <Table L={list} setL={setList} setObjEdit={setListEdit} setEdit={setIsEdit}/>
      </div>
    );
}

export default App;
