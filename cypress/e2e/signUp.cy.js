/// <reference types="cypress" />
/// <reference types="../support" />

import HomePageObject from '../support/pages/HomePageObject';

describe('Sign Up page', () => {
  it('should provide an ability to register new account', () => {
    const homePage = new HomePageObject();

    // Używamy komendy do rejestracji nowego użytkownika
    cy.registerNewUser().then((user) => {
      // Sprawdzamy, czy username pojawia się w nagłówku
      homePage.assertHeaderContainUsername(user.username);
    });
  });
});
