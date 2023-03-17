import { elements } from "../objects/objects";

class LandingPage {
  visit() {
    cy.visit(elements.link);
  }

  fill_form() {
    cy.get(elements.firstName).type("John");
    cy.get(elements.lastName).type("Doe");
    cy.get(elements.price).type("100");

    cy.get(elements.deposit)
      .select("false")
      .invoke("val")
      .should("eq", "false");

    cy.get(elements.checkIn).type("2020-01-01");
    cy.get(elements.checkOut).type("2020-01-02");
    cy.get(elements.save).click();

    cy.wait(3000);

    cy.get(elements.rows).its("length").should("be.gte", 1);
  }

  verify_data() {
    cy.get(elements.rows).each(($el, index, $list) => {
      let cellData = $el.find(elements.tableCell).text();
      if (cellData.includes("John")) {
        cy.get($el).find(elements.tableCell).should("contain", "John");
        cy.get($el).find(elements.tableCell).should("contain", "Doe");
        cy.get($el).find(elements.tableCell).should("contain", "100");
        cy.get($el).find(elements.tableCell).should("contain", "false");
        cy.get($el).find(elements.tableCell).should("contain", "2020-01-01");
        cy.get($el).find(elements.tableCell).should("contain", "2020-01-02");
      }
    });
  }

  delete_row() {
    cy.get(elements.delete).each(($el, index, $list) => {
      cy.get($el).click({ multiple: true });
    })
    // let count = cy.get(elements.rows).length;

    // cy.get(elements.rows)
    //   .each(($el, index, $list) => {
    //     let cellData = $el.find(elements.tableCell).text();
    //     if (cellData.includes("John")) {
    //       cy.get(elements.delete).click();
    //     }
    //   })
    //   .should("be.lt", count - 1);
  }
}

export default LandingPage;
