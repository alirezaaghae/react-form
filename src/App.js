import Table from './components/Table';
import Form from './components/Form';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect, useState} from 'react';

const App = () => {
  var isDupplicate = false;
  const [listEdit, setListEdit] = useState({});
  const [list, setList] = useState([
    {
      name: 'Alireza',
      family: 'aghaei',
      id: '0019924992',
      score: '20'
    }, {
      name: 'Mohadese',
      family: 'keramati',
      id: '003232323',
      score: '18'
    }, {
      name: 'maryam',
      family: 'hajipoor',
      id: '0293029382',
      score: '15'
    }, {
      name: 'reza',
      family: 'sadafi',
      id: '273962423',
      score: '12'
    }
  ]);

  const handleDeleteRow = (key) => {
    setList((item) => item.filter((_, index) => index !== key))
  }
  const handelEditRow = (key) => {
    setListEdit(list[key]);
  }

  const handelSaveData = (data) => {
    const updateList = list.map((item)=>{
      if(item.id === data.id){
        console.log(item.id+data.id)
        isDupplicate = true;
        return data
      } else{
        return item
      }
    });
    isDupplicate ? setList(updateList) : setList([...updateList,data])
    isDupplicate = false;
    // const newList = list.filter((item) => item.id !== data.id);
    // newList.push(data);
    // setList(newList);
  }

  return (
    <div className='main'>
      <section>
        <div className='title'>
          <h1>Form</h1>
        </div>
        <Form 
          saveData={(data)=> handelSaveData(data)}
          edit={Object.keys(listEdit).length !== 0 && listEdit} 
          setEdit={setListEdit}
        />
      </section>
      <section>
        <div className='title'>
          <h1>List component</h1>
        </div>
        <Table
          data={list}
          deleteRow={(key) => handleDeleteRow(key)}
          editRow={(key) => handelEditRow(key)}
        />
      </section>
    </div>
  );
}

export default App;
