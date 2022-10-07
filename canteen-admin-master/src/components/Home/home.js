import React,{useState} from 'react';
import Sidebar from '../Slidebar/sidebar';
import { IoIosArrowForward,IoIosArrowDown } from "react-icons/io";

import './home.css'


const Home = () => {
  const Orders=50;
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${day}-${month}-${year}`;
  const [toggle, setToggle] = useState(true);
  return (
    <>

      <Sidebar />
      <div className='container' > 
        <h5 id='date'>
          {currentDate} 
        </h5>
        <div className="container__inner__1">
            <div className="container__inner__1__sec1">
              <h6>
                Today's Meals
              </h6>
              <h4>
                Orders Confirmed
              </h4>
            </div>
            <h2>
              {Orders}
            </h2>
        </div>
        <div className="history__container__inner__1">
          <div className="his__1">
            <div className="history__container__inner__1__sec1">
                <h4>
                  Order ID
                </h4>
                <h6>
                  Staff ID, Number
                </h6>
                <div style={{marginTop:'3rem',cursor:'pointer',position:'relative'}} onClick={() => setToggle(!toggle)} > 
                  Product List
                  {(toggle && <IoIosArrowForward style={{position:'absolute', top:'.5rem ',right:'-2rem'}} display={'inline-bloack'}/> )|| <IoIosArrowDown style={{position:'absolute', top:'.5rem ',right:'-2.5rem'}}/>}
                </div>
            </div>
            <div className="history__inner" >
              <h2>Successfull</h2>
            </div>
          </div>

          <div className="Product__Component">
            <div className="his__2__inner">
              <div className="product" style={{display:!toggle?'block':'none'}}>
                  <h4 style={{margin:'3rem 3rem 0 0'}}>Products</h4>
                  <h6 style={{margin:'3rem 3rem 0 0',color:'#3C3D47',fontWeight:'600'}}>Product 1</h6>
                  <h6 style={{margin:'1rem 3rem 0 0',color:'#3C3D47',fontWeight:'600'}}>Product 1</h6>
                  <h6 style={{margin:'1rem 3rem 0 0',color:'#3C3D47',fontWeight:'600'}}>Product 1</h6>
              </div>
              <div className="his__2__inner__inner">
                <div className="price" style={{display:!toggle?'block':'none'}}>
                    <h4 style={{margin:'3rem 3rem 0 0'}}>Price</h4>
                    <h6 style={{margin:'3rem 3rem 0 0',color:'#3C3D47',fontWeight:'400'}}>10</h6>
                    <h6 style={{margin:'1rem 3rem 0 0',color:'#3C3D47',fontWeight:'400'}}>10</h6>
                    <h6 style={{margin:'1rem 3rem 0 0',color:'#3C3D47',fontWeight:'400'}}>10</h6>
                </div>
                <div className="qty" style={{display:!toggle?'block':'none'}}>
                    <h4 style={{marginTop:'3rem'}}>Quantity</h4>
                    <h6 style={{marginTop:'3rem',color:'#3C3D47',fontWeight:'400'}}>1</h6>
                    <h6 style={{marginTop:'1rem',color:'#3C3D47',fontWeight:'400'}}>1</h6>
                    <h6 style={{marginTop:'1rem',color:'#3C3D47',fontWeight:'400'}}>1</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Home;