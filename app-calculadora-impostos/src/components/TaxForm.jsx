import React from "react"
import { TextField, Button, Container } from "@mui/material"
import {useFormik} from 'formik'
const TaxForm = ({onSubmit}) => {
    const formik = useFormik({
        initialValues: {
            name: '',
            age: '',
            income: ''
        },
        validate: (values) => {
            const errors = {}
            if(!values.name) {
                errors.name = 'O campo nome é obrigatorio'
            }
            if(!values.age) {
                errors.age = 'O campo idade é obrigatorio'
            }
            if(!values.income) {
                errors.income = 'O campo renda é obrigatorio'
            }
            return errors
        },
        onSubmit: (values) =>{
            onSubmit(values)
        } 
    })
    return (
      <Container>
        <form onSubmit={formik.handleSubmit}>
            <TextField fullWidth label="Nome" name="name"  style={{marginBottom: '16px'}} onChange={formik.handleChange}  helperText={formik.errors.name} error={Boolean(formik.errors.name)}  value={formik.values.name}/>

            <TextField fullWidth label="Idade" name="age"  type="number" style={{marginBottom: '16px'}} onChange={formik.handleChange} helperText={formik.errors.age} error={Boolean(formik.errors.age)} value={formik.values.age}/>

            <TextField fullWidth label="Renda" name="income"  type="number" style={{marginBottom: '16px'}} onChange={formik.handleChange} helperText={formik.errors.income} error={Boolean(formik.errors.income)} value={formik.values.income}/>
            <Button type="submit" color="primary" variant="contained">Calcular</Button>
        </form>
      
      </Container>
    )
  }
  
  export default TaxForm
  