Feature: Prueba Técnica QA - Demoblaze


Scenario Outline: "Caso 1: Ejecutar una orden de compra y validar que compre correctamente"
     Given Ingresar a demoblaze
     When Agregar 2 productos al carro
     Then Completar los datos correspondientes
     And Ejecutar la orden de compra
     And Validar que compre correctamente


Scenario Outline: "Caso 2: Login y Ejecutar una orden de compra y validar que compre correctamente"
    Given Ingresar a demoblaze y loguearse con "<usuario>" y "<password>"
    When Agregar 2 productos al carro
    Then Completar los datos correspondientes
    And Ejecutar la orden de compra
    And Validar que compre correctamente

    Examples:
            Examples:
            | usuario   | password  |
            | standard_user  | secret_sauce |