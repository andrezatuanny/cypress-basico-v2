Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('#firstName').type('Andreza')
    cy.get('#lastName').type('Tuanny')
    cy.get('#email').type('atuanny@mail.com')
    cy.get('#open-text-area').type('Teste')
    cy.contains('button', 'Enviar').click()
})