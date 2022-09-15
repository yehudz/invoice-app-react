import { mount } from 'cypress/react';
import * as React from 'react';
import DraftButton from '../../../../src/components/ui/buttons/DraftButton';

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
      <DraftButton />
    </div>
  )
}

  it('should be the draft button', ()=> {
    cy.viewport(768, 450)
    mount(<ButtonContainer />)
    cy.get('[data-cy="draft-button"]')
    .should('have.text', 'Save as Draft')
  })

  it('should be the draft button in dark mode', ()=> {
    var root = document.getElementsByTagName( 'html' )[0]; // '0' to assign the first (and only `HTML` tag)
    root.setAttribute( 'class', 'dark' );
    cy.viewport(768, 450)
    mount(<ButtonContainer />)
    cy.get('[data-cy="draft-button"]')
    .should('have.text', 'Save as Draft')
  })