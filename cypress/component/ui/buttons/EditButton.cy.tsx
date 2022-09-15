import { mount } from 'cypress/react';
import * as React from 'react';
import EditButton from '../../../../src/components/ui/buttons/EditButton';

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
      <EditButton />
    </div>
  )
}

  it('should be the Secondary button', ()=> {
    cy.viewport(350, 450)
    mount(<ButtonContainer />)
    cy.get('[data-cy="edit-button"]')
    .should('have.text', 'Edit')
  })

  it('should be the Secondary button  in dark mode', ()=> {
    var root = document.getElementsByTagName( 'html' )[0]; // '0' to assign the first (and only `HTML` tag)
    root.setAttribute( 'class', 'dark' );
    cy.viewport(350, 450)
    mount(<ButtonContainer />)
    cy.get('[data-cy="edit-button"]')
    .should('have.text', 'Edit')
  })