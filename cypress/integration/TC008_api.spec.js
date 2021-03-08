describe('API Testing',async()=>{
    Cypress.config('baseUrl', 'http://dummy.restapiexample.com')
    it('GET-read', ()=>{ 
        cy.request('GET','/employee').then(response=>{
            expect(response).to.have.property('status',200)
            expect(response.body).to.not.be.null
        })
        
    })
    it('POST-create', () => {
        const item = {"name":"test","salary":"123","age":"23"}
        cy.request('POST', '/create',item)
        .its('body')
        .its('data')
       // .should('deep.eq',item)
       .should('include', {name:'test'})
    })
    it('PUT-update', ()=>{
        const item = {"name":"test1"}
        cy.request('PUT','/update/1', item)
        //cy.request({method:'PUT', url:'/update/1', body:item, failOnStatusCode: false}).its('status').should('eq', 401)
    })

})