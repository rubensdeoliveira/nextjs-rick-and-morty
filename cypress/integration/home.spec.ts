/// <reference types="cypress" />

describe('<Home />', () => {
  it('should be able to search a character', () => {
    const search = 'Rick'

    cy.request(
      'GET',
      `https://rickandmortyapi.com/api/character?name=${search}`,
    ).then(({ body }) => {
      const { results } = body
      const firstResult = results[0]

      cy.visit('/')

      cy.get('input[name=search]').type(search)
      cy.contains(/search/i).click()

      cy.get('ul')
      cy.get('li')
      cy.get('h2').contains(firstResult.name)
      cy.get('p').contains(firstResult.species)
    })
  })

  it('should search correctly', () => {
    const search = 'Rick'

    cy.visit('/')

    cy.get('input[name=search]').type(search)
    cy.get('input[name=search]').should('have.value', search)
  })

  it('should show loading on search', () => {
    cy.visit('/')

    cy.get('input[name=search]').type('Rick')
    cy.contains(/search/i).click()

    cy.get('[data-cy=loading]')
  })

  it('should display a modal when select character', () => {
    const search = 'Rick'

    cy.visit('/')

    cy.get('input[name=search]').type(search)
    cy.contains(/search/i).click()
    cy.get('li').first().contains(search).click()

    cy.get('[data-cy=modal-view-character]')
  })

  it('should display a loading before load modal data', () => {
    const search = 'Rick'

    cy.visit('/')

    cy.get('input[name=search]').type(search)
    cy.contains(/search/i).click()
    cy.get('li').first().contains(search).click()

    cy.get('[data-cy=modal-view-character]')
    cy.get('[data-cy=modal-loading]')
  })

  it('should display a modal data with character info', () => {
    const search = 'Rick'
    const dataCy = '[data-cy=modal-view-character]'

    cy.request(
      'GET',
      `https://rickandmortyapi.com/api/character?name=${search}`,
    ).then(({ body }) => {
      const { results } = body
      const firstResult = results[0]

      cy.visit('/')

      cy.get('input[name=search]').type(search)
      cy.contains(/search/i).click()
      cy.get('li').first().contains(firstResult.name).click()

      cy.get(dataCy).get('h3').contains(/about/i)
      cy.get(dataCy)
        .get('h3')
        .contains(/origin/i)
      cy.get(dataCy)
        .get('h3')
        .contains(/location/i)

      cy.get(dataCy).contains(firstResult.name)
      cy.get(dataCy).contains(firstResult.origin.name)
      cy.get(dataCy).contains(firstResult.location.name)

      cy.request('GET', `${firstResult.origin.url}`).then(({ body }) => {
        const origin = body
        cy.get(dataCy).contains(origin.type)
        cy.get(dataCy).contains(origin.dimension)
        cy.get(dataCy).contains(`${origin.residents.length} resident`)
      })

      cy.request('GET', `${firstResult.location.url}`).then(({ body }) => {
        const location = body
        cy.get(dataCy).contains(location.type)
        cy.get(dataCy).contains(location.dimension)
        cy.get(dataCy).contains(`${location.residents.length} resident`)
      })
    })
  })

  it('should search all characters if user does not pass character name', () => {
    cy.visit('/')

    cy.contains(/search/i).click()

    cy.request('GET', `https://rickandmortyapi.com/api/character`).then(
      ({ body }) => {
        const { results } = body
        const firstResult = results[0]

        cy.get('li').first().contains(firstResult.name)
      },
    )
  })

  it('should change to next page clicking in next page button', () => {
    const search = 'Rick'

    cy.visit('/')

    cy.get('input[name=search]').type(search)
    cy.contains(/search/i).click()

    cy.request(
      'GET',
      `https://rickandmortyapi.com/api/character?name=${search}`,
    ).then(({ body }) => {
      const { results } = body
      const firstResult = results[0]

      cy.get('li').first().contains(firstResult.name)

      cy.get('[data-cy=pagination-next-button]').click()

      cy.request(
        'GET',
        `https://rickandmortyapi.com/api/character?name=${search}&page=2`,
      ).then(({ body }) => {
        const { results } = body
        const firstResult = results[0]

        cy.get('li').first().contains(firstResult.name)

        cy.get('[data-cy=pagination-next-button]').click()
      })
    })
  })

  it('should change to previous page clicking in previous page button', () => {
    const search = 'Rick'

    cy.visit('/')

    cy.get('input[name=search]').type(search)
    cy.contains(/search/i).click()

    cy.get('[data-cy=pagination-next-button]').click()
    cy.get('[data-cy=pagination-previous-button]').click()

    cy.request(
      'GET',
      `https://rickandmortyapi.com/api/character?name=${search}`,
    ).then(({ body }) => {
      const { results } = body
      const firstResult = results[0]

      cy.get('li').first().contains(firstResult.name)
    })
  })

  it('should change to especific page clicking in specific numeric page button', () => {
    const page = '2'

    cy.visit('/')

    cy.contains(/search/i).click()

    cy.get('[data-cy=pagination-item]').contains(page).click()

    cy.request(
      'GET',
      `https://rickandmortyapi.com/api/character?page=${page}`,
    ).then(({ body }) => {
      const { results } = body
      const firstResult = results[0]

      cy.get('li').first().contains(firstResult.name)
    })
  })

  it('should reset page clicking in page logo', () => {
    cy.visit('/')

    cy.contains(/search/i).click()

    cy.get('ul').should('exist')

    cy.get('[data-cy=logo-container]').click()

    cy.get('ul').should('not.exist')
  })

  it('should show modal with message if search return 0 characters', () => {
    cy.visit('/')

    cy.get('[data-cy=modal-info]').should('not.exist')

    cy.get('input[name=search]').type('search-returns-0-characters')
    cy.contains(/search/i).click()

    cy.get('[data-cy=modal-info]').should('exist')
  })
})

export {}
