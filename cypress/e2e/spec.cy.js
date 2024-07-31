describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://turbo.az/')
    cy.get("[data-id='q_make']").then(input =>{
      cy.wrap(input).click().should("have.class", "is-open").find(".tz-dropdown__option").contains("Audi").click();
    })
    cy.get("[data-id='q_model']").then(input =>{
      cy.wrap(input).click().find(".tz-dropdown__option-label").each($value=>{
        $value.text() == "80" ? cy.wrap($value).click(): "";
      })
    })
    cy.get("body").click({force: true})
    cy.get(".main-search__btn").contains("Elanları göstər").click()
    cy.get(".products-i__bottom").each($input=>{
      cy.log($input.text())
      cy.writeFile("data.json", $input.text())
    })
  })
})