 /// <reference types="Cypress"/>

 const readXlsx=require('./read-xlsx')
 module.exports=(on,config)=>{
    on('task',{
        'readXlsx':readXlsx.readXls
    })
 }