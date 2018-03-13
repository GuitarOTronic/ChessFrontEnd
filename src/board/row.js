import React, { Component } from 'react'
import Tile from './tile.js'

class Row extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className='row'>
        {this.props.row.map((tile, i) => <Tile key={i} index={i} tile={tile}/>)}
      </div>
    )
  }
}

export default Row
