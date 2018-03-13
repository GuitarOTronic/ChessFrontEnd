import React, { Component } from 'react'
import '../css/tile.css'


class Tile extends Component{
  constructor(props){
    super(props)
  }

shouldComponentUpdate(){

  }

   printMe=()=>{
    console.log('col: ', this.props.tile.columnIndex, 'row: ', this.props.tile.rowIndex);
  }

  render(){
    return (
      <div onClick={this.printMe} className={`tile ${ (this.props.tile.columnIndex + this.props.tile.rowIndex) % 2 ? 'whiteTile':'blackTile'}`}>
        <h2>{this.props.tile.piece != null ? this.props.tile.piece._name : ''}</h2>
        <h2>{this.props.tile.piece != null ? this.props.index : ''}</h2>
      </div>

    )
  }

}

export default Tile
