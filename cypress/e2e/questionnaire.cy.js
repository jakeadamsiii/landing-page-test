// cypress/e2e/questionnaire.cy.js

describe('Questionnaire Functionality', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/');
    });
  
    it('should open and close the questionnaire modal', () => {
      // Open modal
      cy.get('button').contains('Take the quiz').click();
      cy.get('div[data-cy="questionnaire"]').should('be.visible');
  
      // Close modal
      cy.get('button[aria-label="Back"]').click();
      cy.get('div[data-cy="questionnaire"]').should('not.exist');
    });
  
    it('should allow navigating through the questionnaire and submitting answers', () => {
      // Open modal
      cy.get('button').contains('Take the quiz').click();
      
      // Answer first question
      cy.get("label[data-cy='0']").click();
      
      // Answer second question
      cy.get('label[data-cy="1"]').contains('No').click();
      
      // Answer third question
      cy.get('label[data-cy="1"]').contains('No').click();
      
      // Check results
      cy.get('p').contains('Great news!').should('be.visible');
    });
  
    it('should handle rejection scenarios correctly', () => {
      // Open modal
      cy.get('button').contains('Take the quiz').click();
      
      // Answer first question with a rejection answer
      cy.get('label[data-cy="2"]').click();
      
      // Answer second question
      cy.get('label').contains('No').click();
      
      // Answer third question
      cy.get('label').contains('No').click();
      
      // Check rejection message
      cy.get('p').contains('Unfortunately, we are unable to prescribe this medication for you').should('be.visible');
    });
  
    it('should allow going back to the previous question', () => {
      // Open modal
      cy.get('button').contains('Take the quiz').click();
      
      // Answer first question
      cy.get('label[data-cy="0"]').click();
      
      // Go back to the previous question
      cy.get('button[aria-label="Back"]').click();
      cy.get('h2').contains('Which image best matches your hair loss?').should('be.visible');
    });
  
    it('should allow closing the modal from any question', () => {
      // Open modal
      cy.get('button').contains('Take the quiz').click();
      
      // Answer first question
      cy.get('label[data-cy="0"]').click();
      
      // Close modal from second question
      cy.get('button[aria-label="Back"]').click();
      cy.get('button[aria-label="Back"]').click();
      cy.get('div[data-cy="questionnaire"]').should('not.exist');
    });
  });
  