import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../../pages/loginPage";
import homePage from "../../pages/homePage";
import productPage from "../../pages/productPage";
import cartPage from "../../pages/cartPage";


const datosQA = require("../../fixtures/datosPrueba.json");

let totalOrden = 0;
let valorProd1;
let valorProd2;
let spPrecio;

Given('Ingresar a demoblaze', () => {
  cy.visit('https://www.demoblaze.com');
  cy.url().should('eq', 'https://www.demoblaze.com/')

  loginPage.verificarLogoVisible();
 
});

Given('Ingresar a demoblaze y loguearse con {string} y {string}', (user,pwd) => {
  cy.visit('https://www.demoblaze.com');
  cy.url().should('eq', 'https://www.demoblaze.com/')
  loginPage.verificarLogoVisible();

  // LogIn en la aplicación
  loginPage.LogIn(user,pwd);
  loginPage.verificarLogIn(user);
 
});

When('Agregar 2 productos al carro', () => {

  homePage.clickEnProducto('Samsung galaxy s7');
  cy.url().should('eq', 'https://www.demoblaze.com/prod.html?idp_=4');
  cy.wait(2000);

  productPage.verificarInformacionProducto('Samsung galaxy s7');

  productPage.obtenerPrecioProducto().then((precio) => { 
    valorProd1 = precio;
    valorProd1 = valorProd1.replace('$', '')
    valorProd1 = valorProd1.replace('*includes tax', '')
    valorProd1 = valorProd1.replace(' ', '')
  });
  productPage.clickAddtocart();

  // vuelvo a la home para agregar otro producto
  productPage.iraHome();

  homePage.iraLaptops();
  homePage.clickEnProducto('MacBook Pro');
  
  productPage.clickAddtocart();
  productPage.verificarInformacionProducto('MacBook Pro');
  
  // cuento el total de orden y productos

  productPage.obtenerPrecioProducto().then((precio) => {
    valorProd2 = precio;
    valorProd2 = valorProd2.replace('$', '')
    valorProd2 = valorProd2.replace('*includes tax', '')
    valorProd2 = valorProd2.replace(' ', '')
    totalOrden = parseFloat(valorProd1) + parseFloat(valorProd2);

    cy.log('El total de la orden es: '+totalOrden);

    productPage.clickCart();

    cy.wait(3000);
    cartPage.verificarTablaProductos('Samsung galaxy s7','MacBook Pro',valorProd1,valorProd2)

  });

  
  
});

Then('Completar los datos correspondientes', () => {
  cy.url().should('eq', 'https://www.demoblaze.com/cart.html');
 
    productPage.completarPlaceOrder(datosQA["name"],datosQA["country"],datosQA["city"],datosQA["creditcard"],datosQA["month"],datosQA["year"],totalOrden);

});

And('Ejecutar la orden de compra', () => {

  cartPage.clickPurchase();

});

And('Validar que compre correctamente', () => {

  cartPage.verificarOrden(datosQA["name"],datosQA["creditcard"],totalOrden);

});
 