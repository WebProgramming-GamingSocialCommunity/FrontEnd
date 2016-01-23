import { expect } from 'chai';
import postsReducer from '../../src/reducers/posts';
import { ADD_POST } from '../../src/actionTypes';

describe('post reducer', () => {
  it('should handle initial state', () => {
    expect(
      postsReducer(undefined, {})
    ).to.deep.equal([
      {
        usr: 'First',
        title: 'First title',
        postContent: 'First post',
      }
    ]);
  });

  it('should handle ADD_POST', () => {
    expect(
      postsReducer([], {
        type: ADD_POST,
        postContent: 'Testing posts reducer'
      })
    ).to.deep.equal([
      {
        postContent: 'Testing posts reducer',
      }
    ]);

    expect(
      postsReducer([
        {
          postContent: 'Testing posts reducer 1',
        }
      ], {
        type: ADD_POST,
        postContent: 'Testing posts reducer 2'
      })
    ).to.deep.equal([
      {
        postContent: 'Testing posts reducer 2',
      }, {
        postContent: 'Testing posts reducer 1',
      }
    ]);

    expect(
      postsReducer([
        {
          postContent: 'Testing posts reducer 1',
        }, {
          postContent: 'Testing posts reducer 2',
        }
      ], {
        type: ADD_POST,
        postContent: 'Testing posts reducer 3'
      })
    ).to.deep.equal([
      {
        postContent: 'Testing posts reducer 3',
      }, {
        postContent: 'Testing posts reducer 1',
      }, {
        postContent: 'Testing posts reducer 2',
      }
    ]);
  });
});
