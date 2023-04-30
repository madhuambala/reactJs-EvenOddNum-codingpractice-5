// Write your code here

import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  showGetResult = () => {
    const newNum = Math.ceil(Math.random() * 100)
    this.setState(prevState => ({count: prevState.count + newNum}))
  }

  newRandomNum = () => {
    const {count} = this.state
    return count % 2 === 0 ? 'Even' : 'Odd'
  }

  render() {
    const {count} = this.state
    const numType = this.newRandomNum()
    return (
      <div className="bg-container">
        <h1 className="heading">Count {count}</h1>
        <p className="paragraph">Count is {numType}</p>
        <button className="button" type="button" onClick={this.showGetResult}>
          Increment
        </button>
        <p className="para">*Increase By Random Number Between 0 to 100</p>
      </div>
    )
  }
}

export default EvenOddApp
