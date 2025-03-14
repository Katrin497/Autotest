describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/'); //Зайшли на сайт
         cy.get('#forgotEmailButton').should('have.css', 'color','rgb(0, 85, 152)'); //Проверяю цвет кнопки "забыли пароль?"
         
         cy.get('#mail').type('german@dolnikov.ru'); //Ввели верный логин
         cy.get('#pass').type('iLoveqastudio1'); //Ввели верный пароль
         cy.get('#loginButton').click(); //Нажала войти

         cy.get('#messageHeader').contains('Авторизация прошла успешно'); //Проверяю, что после авторизации вижу текст
         cy.get('#messageHeader').should('be.visible'); //Текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Есть крестик и он виден для пользователя
     })

     it('Неверный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio/'); //Зайшли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color','rgb(0, 85, 152)'); //Проверяю цвет кнопки "забыли пароль?"
        
        cy.get('#mail').type('german@dolnikov.ru'); //Ввели верный логин
        cy.get('#pass').type('iLoveqastudio5'); //Ввели неверный пароль
        cy.get('#loginButton').click(); //Нажала войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //Проверяю, что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); //Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Есть крестик и он виден для пользователя
    })

    it('Проверка, что в логине есть @', function () {
        cy.visit('https://login.qa.studio/'); //Зайшли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color','rgb(0, 85, 152)'); //Проверяю цвет кнопки "забыли пароль?"
        
        cy.get('#mail').type('germandolnikov.ru'); //Ввели логин без @
        cy.get('#pass').type('iLoveqastudio1'); //Ввели верный пароль
        cy.get('#loginButton').click(); //Нажала войти

        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //Проверяю, что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); //Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Есть крестик и он виден для пользователя
    })

    it('Проверка восстановления пароля', function () {
        cy.visit('https://login.qa.studio/'); //Зайшли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color','rgb(0, 85, 152)'); //Проверяю цвет кнопки "забыли пароль?"
        
        cy.get('#forgotEmailButton').click(); //Нажимаю кнопку "забыли пароль?"

        cy.get('#mailForgot').type('german@dolnikov.ru'); //Ввела почту для восстановления
        cy.get('#restoreEmailButton').click(); //Нажала "отправить код"

        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //Проверяю на совпадение текст
        cy.get('#messageHeader').should('be.visible'); //Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Есть крестик и он виден для пользователя
    })

    it('Неверный пароль и неверный логин', function () {
        cy.visit('https://login.qa.studio/'); //Зайшли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color','rgb(0, 85, 152)'); //Проверяю цвет кнопки "забыли пароль?"
        
        cy.get('#mail').type('german@dolniko.ru'); //Ввели неверный логин
        cy.get('#pass').type('iLoveqastudio'); //Ввели неверный пароль
        cy.get('#loginButton').click(); //Нажала войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //Проверяю, что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); //Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Есть крестик и он виден для пользователя
    })

    it('Верный пароль и неверный логин', function () {
        cy.visit('https://login.qa.studio/'); //Зайшли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color','rgb(0, 85, 152)'); //Проверяю цвет кнопки "забыли пароль?"
        
        cy.get('#mail').type('german@dolniko.ru'); //Ввели неверный логин
        cy.get('#pass').type('iLoveqastudio1'); //Ввели верный пароль
        cy.get('#loginButton').click(); //Нажала войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //Проверяю, что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); //Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Есть крестик и он виден для пользователя
    })

    it('Верный пароль и верный логин с заглавными буквами', function () {
        cy.visit('https://login.qa.studio/'); //Зайшли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color','rgb(0, 85, 152)'); //Проверяю цвет кнопки "забыли пароль?"
        
        cy.get('#mail').type('GerMan@Dolnikov.ru'); //Ввели верный логин с заглавными буквали
        cy.get('#pass').type('iLoveqastudio1'); //Ввели верный пароль
        cy.get('#loginButton').click(); //Нажала войти

        cy.get('#messageHeader').contains('Авторизация прошла успешно'); //Проверяю, что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); //Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Есть крестик и он виден для пользователя
    })
 })