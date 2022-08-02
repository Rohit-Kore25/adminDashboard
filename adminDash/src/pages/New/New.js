import React from './New.scss';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Navbar from '../../Components/Navbar/Navbar';
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from 'react';

const New = ({inputs,title}) => {

  const [file, setFile] = useState("");


  
  return (
    <div className='new'>
      <Sidebar/>
      <div className='newContainer'>
        <Navbar/>
        <div className = 'top'>
          <h1>{title}</h1>
        </div>
        <div className='bottom'>
          <div className='left'>
            <img src={file ? URL.createObjectURL(file):'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'} alt=''></img>
          </div>
          <div className='right'>
            <form>
              <div className='formInput'>
                <label htmlFor='file'>Image: <DriveFolderUploadOutlinedIcon className='icon'/></label>
                <input onChange={e => setFile(e.target.files[0])} style={{display:"none"}} type='file' id='file'></input>
              </div>
              {/* <div className='formInput'>
                <label>FullName</label>
                <input type='text' placeholder='John Doe'></input>
              </div>
              <div className='formInput'>
                <label>Email</label>
                <input type='email' placeholder='John_Doe@gmail.com'></input>
              </div>
              <div className='formInput'>
                <label>Phone Number</label>
                <input type='text' placeholder='+12 23345 67889'></input>
              </div>
              <div className='formInput'>
                <label>Password</label>
                <input type='password' placeholder='Password'></input>
              </div>
              <div className='formInput'>
                <label>Address</label>
                <input type='text' placeholder='Nehru Road, 345 Bombay'></input>
              </div>
              <div className='formInput'>
                <label>Country</label>
                <input type='text' placeholder='India'></input>
              </div> */}
              {inputs.map(input => (
                <div className='formInput' key = {input.id}>
                <label>{input.label}</label>
                <input type={input.type} placeholder={input.placeholder}></input>
              </div>
              ))}
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New