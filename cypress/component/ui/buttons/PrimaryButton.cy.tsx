import { mount } from 'cypress/react';
import * as React from 'react';
import '../../../../build.css';
import '../../../../dist/assets/index.b9c842a4.css';
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
describe('Mobile button', ()=> {
  beforeEach(()=> {
    cy.viewport(350, 450)
  })
  it('Mobile button', ()=> {
    mount(<ButtonContainer />)
  })
})