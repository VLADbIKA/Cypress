export class AddPaymentPage {

    typeCheckboxIncomeReview(){
        cy.get('.checkbox__icon').eq(0).should('have.class', 'checkbox__icon--checked');
    }

    typeTextareaDescription(description){
        cy.get('[type="textarea"]').eq(0).type(description);
    }

    typeCheckboxActiveClick(){
        cy.get('.checkbox__icon').eq(3).click();
    }

    typeInputAmountPlan(amount){
        cy.get('input[type="text"]').eq(0).type(amount);
    }

    typeInputAmountFact(amount){
        cy.get('input[type="text"]').eq(1).type(amount);
    }

    typeCheckboxPaidClick(){
        cy.get('.checkbox__icon').eq(6).click();
    }

    typeInputDatePlan(date){
        cy.get('[readonly="readonly"]').eq(0)
            .then(elem => {
                elem.val(date);
            })
            .trigger('change')
            .type(date, {
                force: true,
           });
    }

    typeInputDateFact(date){
        cy.get('[readonly="readonly"]').eq(1)
        .then(elem => {
            elem.val(date);
        })
        .trigger('change')
        .type(date, {
            force: true,
       });
    }

    typeSelectSource(){
        cy.contains(" Выберите ").eq(0).type("{enter}");
    }

    typeTextareaSource(source){
        cy.get('[type="textarea"]').eq(1).type(source);
    }

    typeButtonAddClick(){
        cy.get('.button__content').eq(2).click()
    }

}

export const addPaymentPage = new AddPaymentPage()