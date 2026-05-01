/* eslint-disable no-undef */
describe('Guided Tour E2E', () => {
  it('successfully navigates through the guided tour', () => {
    // Visit the home page
    cy.visit('/');
    
    // Ensure we are on the Intro Screen
    cy.contains('Master the Election Cycle in Minutes').should('be.visible');
    
    // Start the tour
    cy.contains('Start Guided Tour').click();
    
    // Verify we are on the first step
    cy.contains('Step 1 of').should('be.visible');
    cy.contains('Voter Registration').should('be.visible');
    
    // Click through a few steps
    cy.get('.nav-btn.next').click();
    
    cy.contains('Step 2 of').should('be.visible');
    cy.contains('Campaigns & Information').should('be.visible');
    
    // Open Glossary
    cy.get('button[aria-label="Open Glossary"]').click();
    cy.contains('Election Glossary').should('be.visible');
    cy.get('.close-btn').click();
  });
});
