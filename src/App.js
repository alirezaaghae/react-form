import Table from './components/Table';
import Form from './components/Form';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';

const  App = () => {
  const [isEdit , setIsEdit] = useState({}) ;
  // const []
  const [list , setList] = useState([

    {name: '1', family: '1', id: '1', score: '1'},

{name: '2', family: '1', id: '1', score: '1'},

{name: '3', family: '1', id: '1', score: '1'},

{name: '4', family: '1', id: '1', score: '1'}
  ]);
  // const [listEdit , setListEdit] = useState({});
  // const formShow = isEdit ? (<Form getInput={(event)=>setList([...list , event])} setInput={listEdit} setEdit={setIsEdit}/>) : (<Form getInput={(event)=>setList([...list , event])}/>) 
  const formShow = <Form getInput={(event)=>setList([...list , event])} edit={isEdit}/>
  // useEffect(()=>{ console.log(list)},[list])
  const handleDeleteRow = (key) =>{
    setList((item) => item.filter((_, index) => index !== key))
  }

  const handelEditRow = (key) => {
    setIsEdit(list[key]);
  }

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
          <Table data={list} deleteRow={(key) => handleDeleteRow(key)} editRow={(key)=> handelEditRow(key)}/>
        </section>
      </div>
    );
}

export default App;
