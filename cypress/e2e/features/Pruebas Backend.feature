Feature: Prueba Técnica QA Backend - Demoblaze


Scenario Outline: "Caso 1: Crear un nuevo usuario al path singup"
     Given Crear un nuevo usuario al path signup
     Then Validar status code 200
     And Validar mensaje que se creó exitosamente


Scenario Outline: "Caso 2: Login de un usuario existente al path login"
    Given Login de un usuario existente al path login
    Then Validar status code 200 de login usuario existente
    And Validar que el login fue exitoso


Scenario Outline: "Caso 3: Crear un usuario existente al path signup"
    Given Crear un usuario existente al path signup
    Then Validar status code 200 de signup usuario existente
    And Validar mensaje que se no fue creado

Scenario Outline: "Caso 4: Login de un usuario inexistente al path login"
    Given Login de un usuario inexistente al path login
    Then Validar status code 200 de un usuario inexistente
    And Validar que el login fue erróneo


