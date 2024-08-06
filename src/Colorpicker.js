import { useState } from 'react';
import './App.css';
const initialState =  [
    {
        active:false,
        index:1
    },
    {
        active:false,
        index:2
    },
    {
        active:false,
        index:3
    },
    {
        active:false,
        index:4
    },
    {
        active:true,
        index:5
    },
    {
      active:false,
      index:6
  },
  {
      active:false,
      index:7
  },
  {
      active:false,
      index:8
  },
  {
      active:false,
      index:9
  }
    ];
const Colorpicker=()=>{
    const [cur,setcur]=useState(initialState);
    const handleClickRed=()=>{
            const updateCircle=cur.filter((item)=>item.active===true)
            setcur(updateCircle)
            // console.log(updateCircle);
            
    }
    const handleClickwhite=()=>{
        const updateCircleWhite=cur.filter((item)=>item.active===false);
        setcur(updateCircleWhite)
    }
    return <div className='h'>
    <div className='headContainer'>
            <div className='btnContainer'>
                <div onClick={ handleClickRed} className='redColorBtn selected'></div>
                <p  className='textShower'>{
                cur.reduce((acc,cur)=>{
                    return cur.active?++acc:acc;
                },0)    }</p>
                <div onClick={handleClickwhite} className='whiteColorBtn unSelected'></div>
                <p className='textShower'>{
                    cur.reduce((acc,cur)=>{
                        return !cur.active?++acc:acc;
                    },0)}</p>
            </div>
            <div >
                <div className='circleHeader'>
                {
        cur.map(item=>(
         <div key={item.index}  className={`circle ${item.active?"selected":"unSelected"}`}></div>
        ))
      }
      
                
                </div>
            </div>
    </div>
    </div>
}
export default Colorpicker;