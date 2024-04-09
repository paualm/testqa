class login {
    elements = {
      //estaticos
      productStoreLogo: () => cy.get('#nava'),
      modalLogIn: () => cy.get('#logInModal > .modal-dialog > .modal-content'), 
      btnLogin: () => cy.get('#login2'),
      btnLoguearse: () => cy.get('button').contains('Log in'),
      btnLogout: () => cy.get('#logout2'),
      
      //Editables
      campoUsuario: () => cy.get('#loginusername'),
      campoPassword: () => cy.get('#loginpassword'),
     
      //desplegables
      
      
      //Emergente
      
      //titulos
      bienvenidaUser: () => cy.get('#nameofuser')
      //elementos contenidos en un desplegable/ opciones
      
     
    };

    verificarLogoVisible(){
      this.elements.productStoreLogo().should('be.visible');
    }
   
    LogIn(user,pwd){
        this.elements.btnLogin().click();
        cy.wait(2000);
        this.elements.modalLogIn().should('be.visible');
        this.elements.campoUsuario().type(user);
        this.elements.campoPassword().type(pwd);
        this.elements.btnLoguearse().click();

    }

    verificarLogIn(user){
      this.elements.bienvenidaUser().should('be.visible');
      this.elements.bienvenidaUser().should('have.text', 'Welcome ' +user);
    }

  }
  module.exports = new login();

 
  