/// <reference types="cypress" />
/// <reference types="../support" />

import HomePageObject from '../support/pages/HomePageObject';
import { generateUser } from '../support/generate';

describe('Sign Up page', () => {
  it('should provide an ability to register new account', () => {
    const homePage = new HomePageObject();
    const user = generateUser();

    // Wejdź na stronę Sign Up
    cy.visit('/user/register');

    // Wypełnij formularz
    cy.get('[data-cy="username-sign-up"]').type(user.username);
    cy.get('[data-cy="email-sign-up"]').type(user.email);
    cy.get('[data-cy="password-sign-up"]').type(user.password);

    // Kliknij przycisk Sign Up
    cy.get('[data-cy="sign-up-btn"]').click();

    // Sprawdź, czy username pojawia się w nagłówku
    homePage.assertHeaderContainUsername(user.username);
  });
});
