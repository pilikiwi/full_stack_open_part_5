describe('Blog app', function(){
  beforeEach(function(){
      cy.request('POST', 'http://localhost:3001/api/testing/reset')
      const user = {
          name: 'Learning Fullstack',
          username: 'learner',
          password: 'fullStack'
      }
      cy.request('POST', 'http://localhost:3001/api/users', user)
      cy.visit('http://localhost:3000/')
  })
    it('Login form is shown', function(){
        cy.contains('blogs')
        cy.get('#username').focus()
        cy.get('#password').focus()
    })
})

describe('login', function(){
    it('succeeds with correct credentials', function() {
        cy.get('#username').type('learner')
        cy.get('#password').type('fullStack')
        cy.get('#login-btn').click()
        cy.contains('Log Out').click()
    })

    it('fails with wrong credentials', function(){
        cy.get('#username').type('notthe')
        cy.get('#password').type('rightinfo')
        cy.get('#login-btn').click()
        cy.get('.addNotification')
            .should('contain', 'Invalid username or password ')
            .and('have.css', 'color', 'rgb(0, 128, 0)')
        cy.get('html').should('not.contain', 'Learning Fullstack logged in') 
    })
})