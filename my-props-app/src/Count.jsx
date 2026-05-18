import React from 'react'

const Count = () => {

    let num = 38497;

    let count = 0;

    while (num > 0) {
        count++;
      num = Math.floor(num / 10);
    }

    console.log("final count = ", count)

    return (
        <div>
            <h2>Final Count = {count}</h2>
        </div>
    )
}

export default Count
