Cypress.Commands.add('tastediveSearch', (query, type) => {
    cy.request({
        url: 'https://tastedive.com/api/similar',
        qs: {
            q: query,
            type: type
        }
    }) 
}) 
