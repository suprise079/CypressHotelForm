import { elements } from "../objects/objects";
import LandingPage  from "../pages/landing"






describe('Testing the hotel booking form', () => {
  const page = new LandingPage();
  Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });
  it('Adding data to form', () => {
     page.visit();
     page.fill_form();
    
  })

  it('Verifying data', () => {
    page.visit();
    //data takes time to load
    cy.wait(5000);
    page.verify_data();
  })

  it('Deleting row', () => {
    page.visit();
    //data takes time to load
    cy.wait(5000);
    page.delete_row()
  })
})