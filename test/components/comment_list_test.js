import { renderComponent, expect } from '../test_helper';
import CommentList from '../../src/components/comment_list';

describe('CommentList', () => {
  let component;

  beforeEach(() => {
    const props = {comments: ['First Comment', 'Other New Comment'] };
    component = renderComponent(CommentList, null, props);
  });

  it('shows an LI', () =>{
    expect(component.find('li').length).to.equal(2);
  });

  it('shows each comment that is provided', () =>{
    expect(component).to.contain('First Comment');
    expect(component).to.contain('Other New Comment');
  });
});
