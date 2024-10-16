import TaxReport from "./components/TaxReport"
import Taxform from "./components/TaxForm"
import { useState } from "react"
import {Container, Typography} from '@mui/material' 
import GeneratePDF from "./components/GeneratePDF"
function App() {
  const [taxData, setTaxData] = useState(null)

  const calculateTax = (values) => {
    let tax = 0
    const income = parseFloat(values.income)

    if(income <= 10000){
      tax = income * 0.5
    } else if (income <= 20000){
      tax = income * 0.1
    }else{
      tax = income * 0.15
    }
    const taxData = {
      ...values,
      tax
    }
    setTaxData(taxData)

  }
  return (
    <Container style={{maxWidth: '800px', margin: '0 auto'}}>
      <Typography variant="h3" align="center" style={{marginBottom: '16px'}}>Calculadora de impostos</Typography>
    <Taxform onSubmit={calculateTax}/>
    {taxData && <TaxReport taxData={taxData}/>}
    <GeneratePDF taxData={taxData}/>
    </Container>
   
  )
}

export default App
