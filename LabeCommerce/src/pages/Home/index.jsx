import './App.css'
import React from 'react'
import Produtos from '../../Components/Produtos/Produtos'
import styled from 'styled-components'

const Filtro = styled.div`
  border: 2px solid black;
  width: 300px;
  height: 300px;
  padding: 50px;
`


export default class Home extends React.Component {
  state={
    produtos:[
      {  
        nome: "Produto1" ,
        valor: 200.00 ,
        id: 1 ,
        imagemUrl: 'https://i.pinimg.com/originals/49/99/ba/4999ba2e75a176b03b89000dc3d7822c.jpg',
      } , 
      {  
        nome: "Produto2" ,
        valor:  250.00 ,
        id: 2 ,
        imagemUrl: "https://i.pinimg.com/originals/56/93/87/569387aa0243ec64129d16408462fd42.jpg",
      }
    ],

    inputValue:"",
    inputMax: "" ,
    inputMin: "",
  
  }

  controlInput = (e) =>{
    this.setState({inputValue:(e.target.value)})
    
  }

  controlInputMin= (e) =>{
    this.setState({controlInputMin:(e.target.value)})
  }

  controlInputMax = (e) => {
    this.setState({controlInputMax:(e.target.value)})
  }

  
 

  
render() {
 
  return (
    <main>
      <Filtro>
        <h1>filtro</h1>
          <p>Valor minimo</p>
            <input type="number" valeu= {this.state.inputMin} onChange={this.controlInputMin} />
          <p>valor maximo</p>
            <input type="number"  valeu= {this.state.inputMax} onChange={this.controlInputMax} />
          <p>Buscar por nome</p>
            <input type="text" valeu= {this.state.inputValue} onChange={this.controlInput}/>
      </Filtro>
        {
          this.state.produtos
          .filter(produtos => {
            return produtos.nome.toLowerCase().includes(this.state.inputValue.toLowerCase()) 
          })
          .filter(produtos => {
            return this.state.inputMin === "" || produtos.valor >= this.state.inputMin
          })
           
          .map(produtos => <Produtos key= {produtos.id} nome={produtos.nome} valor={produtos.valor} imagem = {produtos.imagemUrl} />)
         
        }

      </main>
    )
  }
}



