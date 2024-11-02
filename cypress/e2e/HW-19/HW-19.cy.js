/// <reference types= "cypress" /> 

describe('Home page', () => {
    beforeEach(() => {
        cy.visit('https://qauto.forstudy.space/', {
            auth: {
                username: 'guest',
                password: 'welcome2qauto',
            }
        });

    });
            
         it('1.Name field verifying - error when field is empty ', () => {
             cy.get('[class="hero-descriptor_btn btn btn-primary"]').click();
             cy.get('[id="signupName"]').as('Name').focus();
             cy.get('@Name').blur();
             cy.get('@Name').should('have.css', 'border-color', 'rgb(220, 53, 69)');
             cy.get('[class="invalid-feedback"]').should('have.text','Name required')
         });

         it('2.Name field verifying - error when text is invalid', () => {
            cy.get('[class="hero-descriptor_btn btn btn-primary"]').click();
            cy.get('[id="signupName"]').as('Name').focus();
            cy.get('@Name').type('неправильне');
            cy.get('@Name').blur();
            cy.get('@Name').should('have.css', 'border-color', 'rgb(220, 53, 69)');
            cy.get('[class="invalid-feedback"]').should('have.text','Name is invalid');
        });

         it('3.Name field verifying - error when text is invalid, <2 symbols', () => {
            cy.get('[class="hero-descriptor_btn btn btn-primary"]').click();
            cy.get('[id="signupName"]').as('Name').focus();
            cy.get('@Name').type('3');
            cy.get('@Name').blur();
            cy.get('@Name').should('have.css', 'border-color', 'rgb(220, 53, 69)');
            cy.get('[class="invalid-feedback"]').should('have.text','Name is invalidName has to be from 2 to 20 characters long');
        });
        
        it('4.Name field verifying - error when text is invalid, >20 symbols ', () => {
            cy.get('[class="hero-descriptor_btn btn btn-primary"]').click();
            cy.get('[id="signupName"]').as('Name').focus();
            cy.get('@Name').type('111111111111111111111');
            cy.get('@Name').blur();
            cy.get('@Name').should('have.css', 'border-color', 'rgb(220, 53, 69)');
            cy.get('[class="invalid-feedback"]').should('have.text','Name is invalidName has to be from 2 to 20 characters long');
        });

        it('5.Last name field verifying - error when field is empty', () => {
            cy.get('[class="hero-descriptor_btn btn btn-primary"]').click();
            cy.get('[id="signupLastName"]').as('Lastname').focus();
            cy.get('@Lastname').blur();
            cy.get('@Lastname').should('have.css', 'border-color', 'rgb(220, 53, 69)');
            cy.get('[class="invalid-feedback"]').should('have.text','Last name required')
        });

        it('5.Last name field verifying - error when text is invalid', () => {
            cy.get('[class="hero-descriptor_btn btn btn-primary"]').click();
            cy.get('[id="signupLastName"]').as('Lastname').focus();
            cy.get('@Lastname').type('неправильне');
            cy.get('@Lastname').blur();
            cy.get('@Lastname').should('have.css', 'border-color', 'rgb(220, 53, 69)');
            cy.get('[class="invalid-feedback"]').should('have.text','Last name is invalid');
        });

        it('6.Last name field verifying - error when text is invalid, <2 symbols', () => {
           cy.get('[class="hero-descriptor_btn btn btn-primary"]').click();
           cy.get('[id="signupLastName"]').as('Lastname').focus();
           cy.get('@Lastname').type('3');
           cy.get('@Lastname').blur();
           cy.get('@Lastname').should('have.css', 'border-color', 'rgb(220, 53, 69)');
           cy.get('[class="invalid-feedback"]').should('have.text','Last name is invalidLast name has to be from 2 to 20 characters long');
       });
       
       it('7.Last name field verifying - error when text is invalid, >20 symbols ', () => {
           cy.get('[class="hero-descriptor_btn btn btn-primary"]').click();
           cy.get('[id="signupLastName"]').as('Lastname').focus();
           cy.get('@Lastname').type('111111111111111111111');
           cy.get('@Lastname').blur();
           cy.get('@Lastname').should('have.css', 'border-color', 'rgb(220, 53, 69)');
           cy.get('[class="invalid-feedback"]').should('have.text','Last name is invalidLast name has to be from 2 to 20 characters long');
       });

       it('8.Email field verifying - error when field is empty', () => {
        cy.get('[class="hero-descriptor_btn btn btn-primary"]').click();
        cy.get('[id="signupEmail"]').as('Email').focus();
        cy.get('@Email').blur();
        cy.get('@Email').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        cy.get('[class="invalid-feedback"]').should('have.text','Email required');
    });

       it('9.Email field verifying - error when text is invalid', () => {
        cy.get('[class="hero-descriptor_btn btn btn-primary"]').click();
        cy.get('[id="signupEmail"]').as('Email').focus();
        cy.get('@Email').type('a');
        cy.get('@Email').blur();
        cy.get('@Email').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        cy.get('[class="invalid-feedback"]').should('have.text','Email is incorrect');
    });

    it('10.Email field verifying - error when text is invalid, without @', () => {
        cy.get('[class="hero-descriptor_btn btn btn-primary"]').click();
        cy.get('[id="signupEmail"]').as('Email').focus();
        cy.get('@Email').type('incorrect.pl');
        cy.get('@Email').blur();
        cy.get('@Email').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        cy.get('[class="invalid-feedback"]').should('have.text','Email is incorrect');
    });

    it('11.Email field verifying - error when text is invalid, without domain', () => {
        cy.get('[class="hero-descriptor_btn btn btn-primary"]').click();
        cy.get('[id="signupEmail"]').as('Email').focus();
        cy.get('@Email').type('incorrect@');
        cy.get('@Email').blur();
        cy.get('@Email').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        cy.get('[class="invalid-feedback"]').should('have.text','Email is incorrect');
    });

    it('12.Email field verifying - error when text is invalid, wrong domain ', () => {
        cy.get('[class="hero-descriptor_btn btn btn-primary"]').click();
        cy.get('[id="signupEmail"]').as('Email').focus();
        cy.get('@Email').type('incorrect@.pl');
        cy.get('@Email').blur();
        cy.get('@Email').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        cy.get('[class="invalid-feedback"]').should('have.text','Email is incorrect');
    });

    it('13.Email field verifying - error when text is invalid, space in the middle', () => {
        cy.get('[class="hero-descriptor_btn btn btn-primary"]').click();
        cy.get('[id="signupEmail"]').as('Email').focus();
        cy.get('@Email').type('in correct@a.pl');
        cy.get('@Email').blur();
        cy.get('@Email').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        cy.get('[class="invalid-feedback"]').should('have.text','Email is incorrect');
    });

    it('14.Email field verifying - error when text is invalid, space at the beginning ', () => {
        cy.get('[class="hero-descriptor_btn btn btn-primary"]').click();
        cy.get('[id="signupEmail"]').as('Email').focus();
        cy.get('@Email').type(' incorrect@a.pl');
        cy.get('@Email').blur();
        cy.get('@Email').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        cy.get('[class="invalid-feedback"]').should('have.text','Email is incorrect');
    });

    it('15.Email field verifying - error when text is invalid, space at the end', () => {
        cy.get('[class="hero-descriptor_btn btn btn-primary"]').click();
        cy.get('[id="signupEmail"]').as('Email').focus();
        cy.get('@Email').type('incorrect@a.pl ');
        cy.get('@Email').blur();
        cy.get('@Email').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        cy.get('[class="invalid-feedback"]').should('have.text','Email is incorrect');
    });
    
    it('16.Password field verifying - error when field is empty', () => {
        cy.get('[class="hero-descriptor_btn btn btn-primary"]').click();
        cy.get('[id="signupPassword"]').as('Password').focus();
        cy.get('@Password').blur();
        cy.get('@Password').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        cy.get('[class="invalid-feedback"]').should('have.text','Password required');
    });

    it('17.Password field verifying - error when text is invalid, <8', () => {
        cy.get('[class="hero-descriptor_btn btn btn-primary"]').click();
        cy.get('[id="signupPassword"]').as('Password').focus();
        cy.get('@Password').type('1');
        cy.get('@Password').blur();
        cy.get('@Password').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        cy.get('[class="invalid-feedback"]').should('have.text','Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
    });

    it('18.Password field verifying - error when text is invalid, >15', () => {
        cy.get('[class="hero-descriptor_btn btn btn-primary"]').click();
        cy.get('[id="signupPassword"]').as('Password').focus();
        cy.get('@Password').type('12345Qw812345678');
        cy.get('@Password').blur();
        cy.get('@Password').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        cy.get('[class="invalid-feedback"]').should('have.text','Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
    });

    it('19.Password field verifying - error when text is invalid, no letters', () => {
        cy.get('[class="hero-descriptor_btn btn btn-primary"]').click();
        cy.get('[id="signupPassword"]').as('Password').focus();
        cy.get('@Password').type('12345678');
        cy.get('@Password').blur();
        cy.get('@Password').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        cy.get('[class="invalid-feedback"]').should('have.text','Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
    });

    it('20.Password field verifying - error when text is invalid, no small letter', () => {
        cy.get('[class="hero-descriptor_btn btn btn-primary"]').click();
        cy.get('[id="signupPassword"]').as('Password').focus();
        cy.get('@Password').type('12345678Q');
        cy.get('@Password').blur();
        cy.get('@Password').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        cy.get('[class="invalid-feedback"]').should('have.text','Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
    });

    it('21.Password field verifying - error when text is invalid, no capital letter', () => {
        cy.get('[class="hero-descriptor_btn btn btn-primary"]').click();
        cy.get('[id="signupPassword"]').as('Password').focus();
        cy.get('@Password').type('12345678q');
        cy.get('@Password').blur();
        cy.get('@Password').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        cy.get('[class="invalid-feedback"]').should('have.text','Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
    });

    it('22.Password field verifying - error when text is invalid, no integers', () => {
        cy.get('[class="hero-descriptor_btn btn btn-primary"]').click();
        cy.get('[id="signupPassword"]').as('Password').focus();
        cy.get('@Password').type('qqqqqqqq');
        cy.get('@Password').blur();
        cy.get('@Password').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        cy.get('[class="invalid-feedback"]').should('have.text','Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
    });

    it('23.Re-enter password field verifying - error when field is empty', () => {
        cy.get('[class="hero-descriptor_btn btn btn-primary"]').click();
        cy.get('[id="signupRepeatPassword"]').as('Re-password').focus();
        cy.get('@Re-password').blur();
        cy.get('@Re-password').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        cy.get('[class="invalid-feedback"]').should('have.text','Re-enter password required');
    });

    it('23.Re-enter password field verifying - error when field is empty', () => {
        cy.get('[class="hero-descriptor_btn btn btn-primary"]').click();
        cy.get('[id="signupPassword"]').as('Password').focus();
        cy.get('@Password').type('12345678Qw');
        cy.get('[id="signupRepeatPassword"]').as('Re-password').focus();
        cy.get('@Re-password').type('12345678Q');
        cy.get('@Re-password').blur();
        cy.get('@Re-password').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        cy.get('[class="invalid-feedback"]').should('have.text','Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
    });

    it('24.Registration button verifying', () => {
        cy.get('[class="hero-descriptor_btn btn btn-primary"]').click();
        cy.get('[id="signupName"]').type('Karol');
        cy.get('[id="signupLastName"]').type('Key');
        cy.get('[id="signupEmail"]').type('mondi2197+test2197@gmail.com');
        cy.get('[id="signupPassword"]').type('123456Qw');
        cy.get('[id="signupRepeatPassword"]').type('123456Qw');
        cy.get('[class="btn btn-primary"]').click();
    });

});

describe('Login Test', () => {
    it(' log in  with valid credentials', () => {
      
        cy.login('mondi2197+test2197@gmail.com', '123456Qw');
        cy.contains('Garage').should('be.visible')
    });
})