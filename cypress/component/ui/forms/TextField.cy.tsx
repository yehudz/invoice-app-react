import { mount } from 'cypress/react';
import * as React from 'react';
import TextField from '../../../../src/components/ui/forms/TextField';

export default function FormsContainer() {
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
      <TextField 
        labelText='Test input'
        type="text"
      />
    </div>
  )
}
describe('Text Field', ()=> {
  beforeEach(()=> {
    cy.viewport(350, 450)
    mount(<FormsContainer />)
  })

  // Testing that a input exists
  it('should have a text field', ()=> {
    const input = cy.get('[data-cy="text-field-component"]')
    input.should('exist')
  })
  // Testing that the input has a label  
  it('should have a label', ()=> {
    const label = cy.get('[data-cy="text-field-label"]')
    label.should('exist')
  })  
  // Testing for label containing text
  it('should have a label', ()=> {
    const label = cy.get('[data-cy="text-field-label"]')
    label.should('not.be.empty')
  }) 
  // Testing for input to be type-able
  it('should be type-able for an input', ()=> {
    const input = cy.get('[data-cy="text-field-component"]')
    input.focus().clear() 
    input.type('Testing input')
    input.should('have.value', 'Testing input')
  })
  // Testing for validation when blur
  it('should have validation', ()=> {
    const input = cy.get('[data-cy="text-field-component"]')
    input.type('Testing input').blur()
    
    cy.get('[data-cy="error-message"]').should('not.be.visible')
    input.focus().clear().blur()
    cy.get('[data-cy="error-message"]').should('be.visible')
    
  })
  
  // Testing for dark mode
  
  it('should be the add new item button in dark mode', ()=> {
    var root = document.getElementsByTagName( 'html' )[0]; // '0' to assign the first (and only `HTML` tag)
    root.setAttribute( 'class', 'dark' );
  })
})
