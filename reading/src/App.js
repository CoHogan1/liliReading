import './App.css';
import React, { useState } from 'react'
import Alpha from './alphabet.js'
import Books from './allBook.js'
import Numbers from './numbers.js'

function App() {
    let [display, setDisplay] = useState(-1)

    const toggle = (num) => {
        if (num === display){
            setDisplay(-1)
        }
        setDisplay(num)
    }


  return (
    <div className="App">
        <div className="test" >

            <ul>
                <li onClick={()=> toggle(0)}>Books</li>
                <li onClick={()=> toggle(1)}>Alphabet</li>
                <li onClick={()=> toggle(2)}>Numbers</li>
            </ul>

            {display === 0 ? <Books /> : null}
            {display === 1 ? <Alpha /> : null}
            {display === 2 ? <Numbers /> : null}

        </div>

    </div>
  );
}

export default App;
