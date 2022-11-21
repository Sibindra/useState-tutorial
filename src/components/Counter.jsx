import React, { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    function decrementCount() {
        setCount((prevCount) => prevCount - 1);
    }

    function incrementCount() {
        setCount((prevCount) => prevCount + 1);
    }

    return (
        <div id="counter">
            <div id="heading">
                <h1>Select a Count</h1>
            </div>

            <div id="counterContainer">
                <button onClick={decrementCount} className="btn">
                    -
                </button>
                <span>{count}</span>
                <button onClick={incrementCount} className="btn">
                    +
                </button>
            </div>
        </div>
    );
}
