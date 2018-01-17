import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';


describe('CommentBox', () => {
  //does setup ahead of time
  //let allows the variable to be manipulated.
  let component; //undefined
  //fresh instance of comment box
  beforeEach(() => {
    component = renderComponent(CommentBox);
  });

  //run instance with each of these
  it('has the correct class', () => {
    expect(component).to.have.class('comment');
  });

  it('has a text area', () => {
      expect(component.find('textarea')).to.exist;
  });

  it('has a button', () => {
    expect(component.find('button')).to.exist;
  });

  describe('entering some text', () => {
    beforeEach(() => {
      //fetching the textarea in particular.
      component.find('textarea').simulate('change', 'new comment');
    });

    it('shows that text is in the textarea', () => {
      expect(component.find('textarea')).to.have.value('new comment');
    });

    it('when submitted, clears the input', () => {
      //simulating the submit element itself
      component.simulate('submit');
      expect(component.find('textarea')).to.have.value('');
    });
  });

});
