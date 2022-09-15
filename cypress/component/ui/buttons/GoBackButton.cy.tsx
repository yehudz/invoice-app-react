import { mount } from 'cypress/react';
import * as React from 'react';
import GoBackButton from '../../../../src/components/ui/buttons/GoBackButton';

export default function ButtonContainer() {
  return(
    <div
      className='
        flex
        justify-center
        items-center
        w-screen
        h-screen
        dark:bg-dark
      '
    >
      <GoBackButton />
    </div>
  )
}

  it('should be the go back button', ()=> {
    cy.viewport(350, 450)
    mount(<ButtonContainer />)
    cy.get('[data-cy="go-back-button"]')
    .should('have.text', 'Go Back')
  })

  it('should be the go back button in dark mode', ()=> {
    var root = document.getElementsByTagName( 'html' )[0]; // '0' to assign the first (and only `HTML` tag)
    root.setAttribute( 'class', 'dark' );
    cy.viewport(350, 450)
    mount(<ButtonContainer />)
    cy.get('[data-cy="go-back-button"]')
    .should('have.text', 'Go Back')
  })