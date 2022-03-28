/// <reference types="Cypress" />


import { basePage } from "../support/pages/basePage";
import { autorizationInService } from "../support/pages/autorizationInService";
import { addPaymentPage } from "../support/pages/addPaymentPage";


it("Test page add payment", () => {
    basePage.open('https://fabrique:fabrique@finance.dev.fabrique.studio/accounts/login/');
    autorizationInService.typeInputEmail('admin@admin.ad');
    autorizationInService.typeInputPassword('admin');
    autorizationInService.typeButtonClick();
    cy.wait(2000);
    basePage.typeButtonAddPaymentClick();
    addPaymentPage.typeCheckboxIncomeReview();
    addPaymentPage.typeTextareaDescription('Cypress проверка.');
    addPaymentPage.typeCheckboxActiveClick();
    addPaymentPage.typeInputAmountPlan('1000');
    addPaymentPage.typeInputAmountFact('1000');
    addPaymentPage.typeCheckboxPaidClick();
    addPaymentPage.typeInputDatePlan('11.11.2022');
    addPaymentPage.typeInputDateFact('11.11.2022');
    addPaymentPage.typeSelectSource();
    addPaymentPage.typeTextareaSource('Cypess проверка.');
    addPaymentPage.typeButtonAddClick();

});