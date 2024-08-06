/// <reference types="cypress" />

describe('Teste das funcionalidades da agenda de contatos', () => {
  beforeEach(() => {
    cy.visit('https://agenda-contatos-react.vercel.app')
  })
  //Adicionar
  it('Deve preencher o formulario e apertar no botão adicionar', () => {
    cy.get('[type="text"]').type('Vinicius')
    cy.get('[type="email"]').type('vinicius@ebac.com.br')
    cy.get('[type="tel"]').type('41912344321')
    cy.get('.adicionar').click()

    cy.get('.contato').should('have.length', 4)
    cy.screenshot('screenshot-adicionar')
  })
  //Editar
  it('Deve clicar no botão editar alterar os campos e salvar', () => {
    cy.get(':nth-child(5) > .sc-gueYoa > .edit').click()
    cy.get('[type="text"]').clear()
    cy.get('[type="text"]').type('Vinicius Mellegari')
    cy.get('[type="email"]').clear()
    cy.get('[type="email"]').type('vinicius.mellegari@ebac.com.br')
    cy.get('[type="tel"]').clear()
    cy.get('[type="tel"]').type('41987654321')
    cy.get('.alterar').click()

    cy.get(':nth-child(5) > .sc-dmqHEX > .sc-eDDNvR > :nth-child(1)').contains('Vinicius Mellegari')
    cy.screenshot('screenshot-editar')
  })
  //Remoção
  it('Deve clicar no botão deletar e o contato sumir', () => {
    cy.get(':nth-child(5) > .sc-gueYoa > .delete').click()

    cy.get('.contato').should('have.length', 3)
    cy.screenshot('screenshot-remover')
  })
})