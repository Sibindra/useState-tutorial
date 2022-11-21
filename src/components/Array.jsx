import React, { useState } from "react";

export default function Array() {
    const [testArray, setTestArray] = useState(["element1"]);

    function addElement() {
        setTestArray((prevTestArray) => [
            ...prevTestArray,
            `element${testArray.length + 1}`,
        ]);
    }


    function clearArray(){
        setTestArray((prevTestArray)=>[
            "element1"
        ])
    }

    // map elements into a circle
    const elements = testArray.map((element) => {
        return <h4 className="element">{element}</h4>;
    });
    return (
        <div id="array">
            <div id="header">
                <h1>Add Items To Array</h1>
                <div id="buttonContainer">
                    <button className="btn" onClick={clearArray}>clear array</button>
                    <button className="btn" onClick={addElement}>
                        add item to array
                    </button>
                </div>
            </div>

            <div id="arrayComponent">{elements}</div>
        </div>
    );
}
