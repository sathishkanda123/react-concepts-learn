import React, { useEffect, useState } from "react";
import '../../App.css'

const UseEffect = () => {

    const [data, setstate] = useState("click me am data1");
    const [data2, setData2] = useState("click me am data2");
    const [items,setItems]= useState([]);

    const changeData = () =>{
        setstate(data => data + 'Learn');
    }

    const changeData2 = () =>{
        setData2(data => data + 'Fast');
    }

    useEffect(() => {
      console.log("use effect rendered for fetch api");
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) => setItems(json));
    }, [data2]);

    useEffect(()=>{
        console.log('use effect rendered for data');
    }, [data])

     return(
        <div className='useEffect'>
           <h4>Please check console for better understanding</h4>
            <h3>Use effect - will use when ever u need to call any api or method , if change occurs</h3>
            <button onClick={changeData}>{data}</button>
            <div>
                <h5>Rest api call</h5>
                <button onClick={changeData2}>Fetch</button>
                {items.map(item=>{
                    return <pre>{JSON.stringify(item)}</pre>
                })}
            </div>
        </div>
     )
}

export default UseEffect;