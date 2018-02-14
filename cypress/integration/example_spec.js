describe('Can create a new Todo', function () {
    before(function () {
        console.log('before...')
    });

    after(function () {
        console.log('after...')
    });

    it('can do nothing', function () {
        cy.visit('');

        cy.contains('Create Todo').should('be.visible');

        cy.get('ngx-input').first()
            .within(function () {
                cy.get('input').type('My first todo');
            })

        cy.contains('Save').click();

        cy.get('ngx-datatable')
            .within(function () {
                cy.contains('My first todo').should('be.visible');
            })
    });
    it('can do nothing', function () {
        cy.visit('');

        cy.contains('Create Todo').should('be.visible');

        cy.get('ngx-input').first()
            .within(function () {
                cy.get('input').type('My first todo');
            })


        cy.contains('Save').click();

        cy.get('ngx-datatable')
            .within(function () {
                cy.contains('My first todo').should('be.visible');
            })
    });
    it('can do nothing', function () {
        cy.visit('');

        cy.contains('Create Todo').should('be.visible');

        cy.get('ngx-input').first()
            .within(function () {
                cy.get('input').type('My first todo');
            })


        cy.contains('Save').click();

        cy.get('ngx-datatable')
            .within(function () {
                cy.contains('My first todo').should('be.visible');
            })
    });
    it('can do nothing', function () {
        cy.visit('');

        cy.contains('Create Todo').should('be.visible');

        cy.get('ngx-input').first()
            .within(function () {
                cy.get('input').type('My first todo');
            })


        cy.contains('Save').click();

        cy.get('ngx-datatable')
            .within(function () {
                cy.contains('My first todo').should('be.visible');
            })
    });
    it('can do nothing', function () {
        cy.visit('');

        cy.contains('Create Todo').should('be.visible');

        cy.get('ngx-input').first()
            .within(function () {
                cy.get('input').type('My first todo');
            })


        cy.contains('Save').click();

        cy.get('ngx-datatable')
            .within(function () {
                cy.contains('My first todo').should('be.visible');
            })
    });
    it('can do nothing', function () {
        cy.visit('');

        cy.contains('Create Todo').should('be.visible');

        cy.get('ngx-input').first()
            .within(function () {
                cy.get('input').type('My first todo');
            })


        cy.contains('Save').click();

        cy.get('ngx-datatable')
            .within(function () {
                cy.contains('My first todo').should('be.visible');
            })
    });
    it('can do nothing', function () {
        cy.visit('');

        cy.contains('Create Todo').should('be.visible');

        cy.get('ngx-input').first()
            .within(function () {
                cy.get('input').type('My first todo');
            })


        cy.contains('Save').click();

        cy.get('ngx-datatable')
            .within(function () {
                cy.contains('My first todo').should('be.visible');
            })
    });
})
