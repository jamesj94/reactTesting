//solely testing the component app.
//test to see if component renders React
//simple starter.
import { renderComponent, expect } from '../test_helper';
//This is the app we are testing
import App from '../../src/components/app';

//Use describe to group together similar tests
//name it the component we are testing.
describe('App', () => {
  let component;

  beforeEach(()=>{
    component = renderComponent(App);
  });

  it('shows a comment box', () => {
    expect(component.find('.comment')).to.exist;
  });

  it('shows a comment list', () => {
    expect(component.find('.comment-list')).to.exist;
  });
});
