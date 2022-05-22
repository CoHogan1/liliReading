import './App.css';
import React, { useState }  from 'react'
import Raya from './books/raya.js'

let allBooks = [Raya, Raya, Raya]

function App() {
    let [ ind, setInd ]   = useState(0) // what page
    let [ view, setView ] = useState(-1)
    let [ page, setPage ] = useState(0)

    const targeted = (ind) => {
        if (view === ind){
            setView(-1)
        } else {
            setView(ind)
        }
    }
    const restart = () => {
        setPage(0)
    }

    const nextPage = () => {
        setPage(page + 1)
        if (page >= allBooks[ind][1].length){
            console.log("too high")
            return
        }
        console.log("next", page)
    }

    const prevPage = () => {
        setPage(page - 1)
        if (page <= 0){
            setPage(0)
            return
        }
        console.log('prev', page)

    }

  return (
    <div className="allBooks">

        <div className="titles">
            {  allBooks.map((v,i) => {
                return <p className="selection" key={i} onClick={() => targeted(i)}>{allBooks[i][0]}</p>
               })
            }
        </div>

        {view === 0 ?
            <div className="book">
                <p>Book 1</p>
                <p>{allBooks[0][0]}</p>
                <img src={allBooks[0][2][page]}/>
                <p>{allBooks[0][1][page]}</p>

            </div> : null }


        {view === 1 ? <div>This is two</div> : null }
        {view === 2 ? <div>This is thr</div> : null }




            <button onClick={prevPage} >Prev</button>
            <button onClick={restart}>Restart</button>
            <button onClick={nextPage} >Next</button>




    </div>
  );
}

export default App;
