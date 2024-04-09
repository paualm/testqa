class product {
    elements = {
      //estaticos
      productStoreLogo: () => cy.get('#nava'),
      precioProducto: () => cy.get('.price-container'),
      descripcionProducto: () => cy.get('#more-information'),
      imgProducto: () => cy.get('.item > img'),
      btnAddtoCart: () => cy.get('a').contains('Add to cart'),
      btnCart: () => cy.get('#cartur'),
      btnPlaceOrder: () => cy.get('button').contains('Place Order'),
      btnPurchase: () => cy.get('button').contains('Purchase'),
      totalPurchase: () => cy.get('#totalm'),
      modalPlaceOrder: () => cy.get('.modal-body'),
      modalOrdenOK: () => cy.get('.sweet-alert'),
      btnOK: () => cy.get('.confirm'),
      descripcionOrden: () => cy.get('.lead'),
      //Editables
      campoName: () => cy.get('#name'),
      campoCountry: () => cy.get('#country'),
      campoCity: () => cy.get('#city'),
      campoCard: () => cy.get('#card'),
      campoMonth: () => cy.get('#month'),
      campoYear: () => cy.get('#year'),
      //desplegables
      
      
      //Emergente
      
      //titulos
      tituloProducto: () => cy.get('.name'),
      tituloAgradecimiento: () => cy.get('.sweet-alert > h2'),

      //elementos contenidos en un desplegable/ opciones
      
    };

    clickPurchase(){
      this.elements.btnPurchase().click();
    }

    verificarOrden(name,card,total){
     
      cy.wait(1000);
      
      this.elements.descripcionOrden().should('contain.text', 'Amount: '+total+' USD');
      this.elements.descripcionOrden().should('contain.text', 'Name: '+name);
      this.elements.descripcionOrden().should('contain.text', 'Card Number: '+card);

      this.elements.btnOK().click();

    }

    verificarTablaProductos(prod1,prod2,price1,price2){

      cy.get('tbody tr').should('contain.text', prod1+price1);
      cy.get('tbody tr').should('contain.text', prod2+price2);

    }
  }
  module.exports = new product();

 
  