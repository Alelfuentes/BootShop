import { Component } from "react";

const style = {
  title:{
    marginBottom: '30px',
    position: 'relative',
  }
}

class Title extends Component{
  render(){
    return(
      <h1 style={style.title} className="text-3xl font-bold tracking-tight text-gray-900">Botas</h1>
    )
  }
}
export default Title