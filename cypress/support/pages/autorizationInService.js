export class AutorizationInService {

    typeInputEmail(email){
        cy.get('[type="email"]').type(email);
    }
    
    typeInputPassword(password){
        cy.get('[type="password"]').type(password);
    }

    typeButtonClick(){
        cy.get('.button__content').click();
    }
}

export const autorizationInService = new AutorizationInService()