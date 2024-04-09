class home {
    elements = {
      //estaticos
      productStoreLogo: () => cy.get('#nava'),
      menuLaptops: () => cy.get('[onclick="byCat(\'notebook\')"]'),

      //Editables
         
      //desplegables
      
      
      //Emergente
      
      //titulos
      tituloProducto: (producto) => cy.get('.card-title').contains(producto)
      //elementos contenidos en un desplegable/ opciones
      
     
    };

    clickEnProducto(producto){
      this.elements.tituloProducto(producto).click();
    }

    iraLaptops(){
      this.elements.menuLaptops().click();
    }

  }
  module.exports = new home();

 
  