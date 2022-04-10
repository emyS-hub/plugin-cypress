/// <reference types="cypress" />

describe('Get API user tests', () => {

    let query = require('../../fixtures/testData')

    it('Get movie & music', () => {

        cy.tastediveSearch(query.name, query.type).then(response => {
            cy.log(JSON.stringify(response))
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('Similar')
   
            })
        })
})
