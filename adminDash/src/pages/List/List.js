import Datatable from '../../Components/Datatable/Datatable';
import Navbar from '../../Components/Navbar/Navbar';
import Sidebar from '../../Components/Sidebar/Sidebar';
import React from './List.scss';

const List = () => {
  return (
    <div className='list'>
      <Sidebar/>
      <div className='listContainer'>
        <Navbar/>
        <Datatable/>
      </div>
    </div>
  )
}

export default List