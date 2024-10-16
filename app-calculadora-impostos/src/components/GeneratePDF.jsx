import React from "react"
import {useState} from 'react'
import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'
import { style } from "@mui/system"
import './style.css'
pdfMake.vfs = pdfFonts.pdfMake.vfs
function GeneratePDF({taxData}) {
    const [fontSizeTitle, setFontSizeTitle] = useState("20")
    const [fontColorTitle, setFontColorTitle] = useState('red')
    const[isTitleBold, setIsTitleBold] = useState(true)

    const [fontSize, setFontSize] = useState("15")
    const [fontColor, setFontColor] = useState('black')
    const[isBold, setIsBold] = useState(false)
    const generatePDF = () => {
        console.log(taxData)

        const customStylesTitle = {
            fontSize: fontSizeTitle,
            color: fontColorTitle,
            bold: isTitleBold
        }

        const customStyles = {
            fontSize: fontSize,
            color: fontColor,
            bold: isBold
        }
        const documentDefinition = {
            content:[
                {text: 'Relatório de impostos', style: 'customStylesTitle'},
                {text: `Nome: ${taxData.name}`, style: 'customStyles' },
                {text: `Idade: ${taxData.age} anos `, style: 'customStyles' },
                {text: `Renda: R$ ${taxData.income}`, style: 'customStyles' },
                {text: `Imposto a pagar: R$ ${taxData.tax}`, style: 'customStyles' },

            ],
            styles:{
                customStylesTitle:customStylesTitle,
                customStyles:customStyles
            },
        };
        pdfMake.createPdf(documentDefinition).download();
    }
  
  return (
    <button onClick={generatePDF} className="botao">Gerar relatorio</button>
  )
}

export default GeneratePDF;
