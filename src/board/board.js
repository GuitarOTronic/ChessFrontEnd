import React, { Component } from 'react'
// import Tile from './tile.js'
import boardObj from '../boardObj.js'
import '../css/board.css'
import Row from './row.js'
class Board extends Component {
  constructor(props){
    super(props)
    this.state={
      boardState:boardObj
    }
  }





  render(){
    return(
      <div className='board'>
          {this.state.boardState.map((row, i) => <Row row={row} key={i}/>)}
      </div>

    )
  }
}

export default Board
