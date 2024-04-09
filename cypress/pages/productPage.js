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
      menuHome: () => cy.get('.nav-link').contains('Home'),
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
      //elementos contenidos en un desplegable/ opciones
   
    };

   
    verificarInformacionProducto(producto){
      this.elements.tituloProducto().should('have.text', producto);
      this.elements.precioProducto().should('be.visible');
      this.elements.descripcionProducto().should('be.visible');
      this.elements.imgProducto().should('be.visible');
    }

    obtenerPrecioProducto(){
        const text =  this.elements.precioProducto().invoke('text');
        return text;
    }

    clickAddtocart(){
      this.elements.btnAddtoCart().click();
    }

    clickCart(){
      this.elements.btnCart().click();
    }

    completarPlaceOrder(name,country,city,card,month,year, total){
      this.elements.btnPlaceOrder().click();
      cy.wait(1000);

      this.elements.totalPurchase().should('have.text','Total: ' + total);
      this.elements.modalPlaceOrder().should('be.visible');
      this.elements.campoName().type(name);
      this.elements.campoCountry().type(country);
      this.elements.campoCity().type(city);
      this.elements.campoCard().type(card);
      this.elements.campoMonth().type(month);
      this.elements.campoYear().type(year);

    }

    iraHome(){
      this.elements.menuHome().click();
    }
  }
  module.exports = new product();

 
  