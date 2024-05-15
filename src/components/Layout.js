import { Component } from "react";

const style = {
  layout:{
    backgroundColor: '#fff',
    color: '#0A283E',
    alignItems: 'center',
    display: 'flex',
    flexDirection:'column',
    boxShadow: '0 2px 3px rgb(0,0,0,0.1)'
  },
  container:{
    maxWidth: '1200px', // Ancho máximo del contenedor
    width: '100%', // Ancho del contenedor igual al 100% del tamaño del padre
    margin: '0 auto', // Centrar el contenedor horizontalmente
    padding: '0 15px', // Espacio adicional en los lados del contenedor
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap', // Permitir que los productos se envuelvan en filas adicionales si no caben en una sola línea
    justifyContent: 'space-between', // Distribuir los productos equitativamente en el contenedor
  }
}

class Layout extends Component{
  render(){
    return(
      <div style={style.layout}>
        <div style={style.container}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Layout