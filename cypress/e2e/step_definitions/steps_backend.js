import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";


Given('Crear un nuevo usuario al path signup', () => {
  cy.request({
    method: "POST",
    url: "https://api.demoblaze.com/signup",
    body: {
      username: "userbts8",
      password: "test123"
    }
  }).as("signup");

});



Then('Validar status code 200', () => {
  cy.get("@signup").its("status").should("eq", 200);
})

And('Validar mensaje que se creó exitosamente', () => {
  cy.get("@signup").its("body").should("include", "");
})


Given('Login de un usuario existente al path login', () => {
  cy.request({
    method: "POST",
    url: "https://api.demoblaze.com/login",
    body: {
      username: "userbts1",
      password: "test123"
    }
  }).as("login");
 

});

And('Validar status code 200 de login usuario existente', () => {
  cy.get("@login").its("status").should("eq", 200);
  
})

And('Validar que el login fue exitoso', () => {
  cy.get("@login").its("body").should("include", "Auth_token");
})


Given('Crear un usuario existente al path signup', () => {
  cy.request({
    method: "POST",
    url: "https://api.demoblaze.com/signup",
    body: {
      username: "userbts1",
      password: "test123"
    }
  }).as("signup");

});


And('Validar status code 200 de signup usuario existente', () => {
  cy.get("@signup").its("status").should("eq", 200);
});

And('Validar mensaje que se no fue creado', () => {
  cy.get("@signup").its("body").should("include", {"errorMessage":"This user already exist."});
});


Given('Login de un usuario inexistente al path login', () => {
  cy.request({
    method: "POST",
    url: "https://api.demoblaze.com/login",
    body: {
      username: "a123213fdafds",
      password: "asdadsadddddd"
    }
  }).as("login");

});

And('Validar status code 200 de un usuario inexistente', () => {
  cy.get("@login").its("status").should("eq", 200);
});

And('Validar que el login fue erróneo', () => {
  cy.get("@login").its("body").should("include", {"errorMessage":"User does not exist."});
});