import { mount } from 'cypress/react';
import * as React from 'react';
import PrimaryButton from '../../../../src/components/ui/buttons/PrimaryButton';

export default function ButtonContainer() {
  return(
    <div
      className='
        flex
        justify-center
        items-center
        w-screen
        h-screen
      '
    >
      <PrimaryButton />
    </div>
  )
}

  it('Mobile button', ()=> {
    cy.viewport(350, 450)
    mount(<ButtonContainer />)
    cy.get('#button-text').should('include.text', 'New')
  })
  it('Tablet button', ()=> {
    cy.viewport(768, 450)
    mount(<ButtonContainer />)
    cy.get('#button-text').should('include.text', 'Invoice')
  })