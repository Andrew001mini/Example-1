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
  ]
function Example() {
  const [check,setcheck]=useState(initialState )

  const handleClick=(currentItem)=>{
    let circleconfig= check.map(item=>{
      // (item.index ===currentItem.index? {...item,active:!item.active}:item)
  if(item.index===currentItem.index){
    item.active=!item.active
  }
  return item
}
  )
    setcheck(circleconfig)
  }
   
  return (
    <div className='headContainer'>
    <div className='circleConatiner'> 
    <div className="headOfTheCircle">
      {
        check.map(item=>(
         <div onClick={()=>handleClick(item)} key={item.index} className={`circle ${item.active? "selected":"unSelected"}`}></div>
        ))
      }
      
    </div>
    </div>
    <div>
    <div className='redCoumter selected'></div>
    <p  >{check.reduce((acc,item)=>{
      return item.active?++acc:acc
    },0)}</p>
    <div className='whiteCounter unSelected'></div>
    <p>{check.reduce((acc,item)=>!item.active?++acc:acc,0)}</p>
  </div>
  </div>
  );
}

export default Example;
