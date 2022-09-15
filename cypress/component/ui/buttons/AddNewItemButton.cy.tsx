import { mount } from 'cypress/react';
import * as React from 'react';
import AddNewItemButton from '../../../../src/components/ui/buttons/AddNewItemButton';

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
      <AddNewItemButton />
    </div>
  )
}

  it('should be the add new item button', ()=> {
    cy.viewport(350, 450)
    mount(<ButtonContainer />)
    cy.get('[data-cy="add-new-item-button"]')
    .should('have.text', '+ Add New Item')
  })

  it('should be the add new item button in dark mode', ()=> {
    var root = document.getElementsByTagName( 'html' )[0]; // '0' to assign the first (and only `HTML` tag)
    root.setAttribute( 'class', 'dark' );
    cy.viewport(350, 450)
    mount(<ButtonContainer />)
    cy.get('[data-cy="add-new-item-button"]')
    .should('have.text', '+ Add New Item')
  })