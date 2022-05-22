import './App.css';
import React, { Component } from 'react'


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            score: 0,
            index: 1,
            alp: 'abcdefghijklmnopqrstuvwxyz',
            ans: ['Z','A','O'],
        }
    }


    getLetter = () => {
        let arr = this.state.alp.toUpperCase().split('')
        let rand = Math.ceil(Math.random() * (27 - 1) -1)
        let two = Math.ceil(Math.random() * (27 - 1) -1)

        this.setState({
            index: this.state.index + 1,
            ans: [arr[rand],arr[this.state.index],arr[two]].sort(() => .5 - Math.random() )
        })
        if (this.state.index > 25 || this.state.score > 25) {
            this.setState({
                score: 0,
                index: 1,
                ans: ["P","A","X"]
            })
        }
    }


    test = (event) => {
        let text = event.target.innerHTML.toLowerCase()
        let arr = this.state.alp.split('')

        if (text === arr[this.state.index -1]){ // why is this off by one?
            // readLetter()
            this.setState({
                score: this.state.score + 1,
            })
            this.getLetter()
            // play correct sound.
            console.log("Correct")
        } else {
            // play incorrect sound.
            console.log("Incorrect")
            // readLetter()
        }
    }

    // readLetter = () => {}





    render(){
        return(
            <div className="alpha">

                <div>
                    <h1>Alphabet Practice</h1>
                    <div>Score: {this.state.score}</div>


                    <div className="test-box">

                        {this.state.ans.map((v,i) => {
                            return <button onClick={this.test} key={`${v}${i}`}>{this.state.ans[i]}</button>
                        })}

                    </div>

                </div>
            </div>
        )
    }
}
export default App;
