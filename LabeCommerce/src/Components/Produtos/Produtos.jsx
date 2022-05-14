import React, { Component } from 'react'
import Button from '../Button'
import styled from 'styled-components'

const Img = styled.img`
  height: 400px;
  width: 400px;
` 
const Container = styled.main`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  align-items: center;
  padding: 30px 0px;
  width: 500px;
  height: 500px;
`


export default class Produtos extends Component {
  

  render() {
    return (
      <Container>
       
        <Img src= {this.props.imagem} alt="Imagem" /> 
        <div>{this.props.nome}</div>
        <div>{this.props.valor}</div>
        
        
        <Button/>
      </Container>
    )
  }
}
