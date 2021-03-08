describe('Create and mark-unmark as favorite', function () {
    it('Sign in', function () {
        cy.visit('https://react-redux.realworld.io/#/login')
        cy.title().should('eq', 'Conduit')
        cy.location('protocol').should('eq', 'https:')
        // cy.get('input[type="email"]').type('tyne2021git@gmail.com')
        // cy.get('input[type="password"]').type('tyne1232021')
        // cy.get('.btn').contains('Sign in').should('be.visible').click()
        cy.get('form').within(($form) => {
            cy.get('input[type="email"]').type('abdou30.cia@gmail.com')
            cy.get('input[type="password"]').type('0123456789/*-')
            //type=submit
            cy.root().submit()
        })
        cy.contains('Your Feed', { timeout: 10000 }).should('be.visible')

    })
    it('Create a post', function () {
        //  cy.contains('New Post').click() 
        cy.get('ul.navbar-nav').children().contains('New Post').click()
        cy.hash().should('include', '#/editor')
        //cy.location('hash').should('include','#/editor')
        cy.get('form').within(($form) => {
            cy.get('input').first().type('Test')
            cy.get('input').eq(1).type('Test1')
            cy.get('textarea').last().type('Test2')
            cy.contains('Publish Article').click()
        })
        cy.url().should('include', 'article')
    })
    it('Mark-unmark as favorite', function () {
      //  cy.get('.nav-link').contains('abdou-ch').click()
      cy.get('ul.navbar-nav').children().contains('abdou-ch').click()
        cy.contains('My Articles').should('be.visible')
        cy.get('.ion-heart').first().click()
        cy.contains('Favorited Articles').click()
        cy.url().should('include', 'favorites')
        cy.get('.ion-heart').first().click()
        cy.reload()
        cy.contains('No articles are here... yet.').should('be.visible')
        cy.go('back')
        //cy.go(-1)
        //cy.go('forward')
        //cy.go(1)

    })
})