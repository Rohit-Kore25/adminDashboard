import Chart from '../../Components/Chart/Chart';
import Featured from '../../Components/featured/Featured';
import Navbar from '../../Components/Navbar/Navbar';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Table from '../../Components/Table/Table';
import Widget from '../../Components/widget/Widget';
import React from './Home.scss';

const Home = () => {

  

  return (
    <div className='home'>
        <Sidebar/>
        <div className='homeContainer'>
          <Navbar/>
          <div className='widgets'>
            <Widget type = "user"/>
            <Widget type = "order"/>
            <Widget type = "earning"/>
            <Widget type = "balance"/>
          </div>
          <div className='charts'>
            <Featured/>
            <Chart aspect={2/1} title = "Revenue (Last 6 Months)" color = "#8884d8"/>
          </div>
          <div className='listContainer'>
            <div className='listTitle'>Latest Transactions</div>
            <Table/>
          </div>
        </div>
    </div>
  )
}

export default Home