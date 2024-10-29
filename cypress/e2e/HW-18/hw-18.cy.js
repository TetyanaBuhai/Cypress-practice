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
            
            it('Find buttons from header and footer', () => {
                cy.get('[class="hero-descriptor_btn btn btn-primary"]'); 
                cy.get('[class="socials_icon icon icon-facebook"]'); 
                cy.get('[class="socials_icon icon icon-telegram"]'); 
                cy.get('[class="socials_icon icon icon-youtube"]'); 
                cy.get('[class="socials_icon icon icon-instagram"]'); 
                cy.get('[class="socials_icon icon icon-linkedin"]'); 
                cy.get('[class="contacts_link display-4"]'); 
                cy.get('[class="contacts_link h4"]'); 
            
        });

  
    });
    

