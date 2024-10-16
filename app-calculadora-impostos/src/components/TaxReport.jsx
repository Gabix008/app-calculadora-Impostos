import React from "react"
import { Container, Typography } from '@mui/material'
const TaxReport = ({taxData}) => {
  console.log(taxData)
    return (
      <Container>
        <Typography variant="h4"  style={{marginBottom: '16px', marginTop: '35px'}}>Relatório de impostos</Typography>
        <Typography variant="body1" >Nome: {taxData.name}</Typography>
        <Typography variant="body1" >Idade: {taxData.age} anos</Typography>
        <Typography variant="body1" >Renda: R$ {parseFloat(taxData.income).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} </Typography>
        <Typography variant="body1"  >Imposto a pagar: R$ {parseFloat(taxData.tax).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</Typography>
      </Container>
    )
  }
  
  export default TaxReport
  