import { useState } from 'react';
import './App.css';

const initialState = [
];

// color picker state controller
const Colorpicker = () => {
  const [cur, setCur] = useState(initialState);

  const Addcircle = () => {
    const maxIndex = cur.reduce((max, item) => (item.index > max ? item.index : max), 0);


    const newObject = { active: false, index: maxIndex + 1 };

    setCur([...cur, newObject]);
    console.log(cur);
    
  };
  const HandleClick=(currentItem)=>{
    let circleconfig= cur.map(item=>{
  
  return (item.index ===currentItem.index? {...item,active:!item.active}:item)
}
  )
  setCur(circleconfig)
  }


  return (
    <div className='h'>
      <div className='headContainer'>
        <div className='btnContainer'>
          <div className='redColorBtn selected'></div>
          <p className='textShower'>
            {cur.reduce((acc, cur) => (cur.active ? ++acc : acc), 0)}
          </p>
          <div className='whiteColorBtn unSelected'></div>
          <p className='textShower'>
            {cur.reduce((acc, cur) => (!cur.active ? ++acc : acc), 0)}
          </p>
        </div>
        <div>
          <button onClick={Addcircle}>Add Circle</button>
          <div className='circleHeader'>
            {cur.map((item) => (
              <div onClick={(item) =>HandleClick()} key={item.index} className={`circle ${item.active ? 'selected' : 'unSelected'}`}></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Colorpicker;
