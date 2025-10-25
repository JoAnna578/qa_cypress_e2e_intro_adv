/// <reference types="cypress" />
/// <reference types="../support" />

import HomePageObject from '../support/pages/HomePageObject';
import { generateUser } from '../support/generate';

describe('Sign Up page', () => {
  it('should provide an ability to register new account', () => {
    const homePage = new HomePageObject();
    const user = generateUser();

    // Wejdź na stronę Sign Up
    cy.visit('/#/register');

    // Wypełnij formularz
    cy.get('input[placeholder="Username"]').type(user.username);
    cy.get('input[placeholder="Email"]').type(user.email);
    cy.get('input[placeholder="Password"]').type(user.password);

    // Kliknij przycisk Sign Up
    cy.get('button[type="submit"]').click();

    // Sprawdź, czy username pojawia się w nagłówku
    homePage.assertHeaderContainUsername(user.username);
  });
});
