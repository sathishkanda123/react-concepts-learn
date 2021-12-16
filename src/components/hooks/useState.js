import React, { useState } from "react";
import '../../App.css'

const UseState = () => {
    
    function initializeState() {
        console.log("initializeState called");
        return 0;
    }

    //const [counter, setCounter] = useState(initializeState); // this will call always when ever change

    const [counter, setCounter] = useState(() => initializeState()); // better to use functional way then it will call only once
    const [myinput, setInput] = useState("i will change");
    const [myObj, setObject] = useState({
        name: "sathish",
        designation: "Lead Software Engineer",
    });
    const objectData = myObj;

    const increment = () => {
        setCounter((prevcount) => prevcount + 1);
    };

    const changeName = () => {
        setObject((prevData) => {
            return { ...prevData, designation: "Team Lead" };
        });
    };

    return (
        <div className='useState'>
        <h3>use state learning</h3>
            <h5><u>incremenet + button</u></h5>
            counter value is {counter}
            <button onClick={increment}>+</button>
            <div>
            <h5><u>input change</u></h5>
                <input
                    type="text"
                    placeholder="type"
                    onChange={(e) => setInput(e.target.value)}
                />
                {myinput}
            </div>
            <div>
                <h5><u>Below is object manipulation</u></h5>
                {objectData.name} .. {objectData.designation}
                <button onClick={changeName}>ChangeName</button>
            </div>
        </div>
    );
};

export default UseState;
