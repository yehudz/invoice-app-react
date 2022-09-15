import { mount } from 'cypress/react';
import * as React from 'react';
import SecondaryButton from '../../../../src/components/ui/buttons/SecondaryButton';

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
      <SecondaryButton />
    </div>
  )
}

  it('should be the Secondary button', ()=> {
    cy.viewport(768, 450)
    mount(<ButtonContainer />)
    cy.get('[data-cy="secondary-button"]')
    .should('include.text', 'Mark as Paid')
  })