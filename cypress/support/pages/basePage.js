export class BasePage {

    open(url){
        cy.visit(url);
    }

    typeButtonAddPaymentClick(){
        cy.get('button.button--state-filled').click();
    }
}

export const basePage = new BasePage()