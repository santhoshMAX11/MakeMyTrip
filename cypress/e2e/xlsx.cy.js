 describe('Read XL',()=>{
    it('read xl on login',()=>{
        cy.task("readXlsx",{filepath: "bugs.xlsx",sheetName: "bugs"})
    })
 })