import expect from 'expect';
import expectJSX from 'expect-jsx';
import sinon from 'sinon';
import NewsActions from './../../actions/newsActions';
import Dispatcher from './../../dispatcher/appDispatcher';


expect.extend(expectJSX);

describe('News Action', () => {
  it('should exists', () => {
    expect(NewsActions).toExist();
  });

  it('should get all Sources', () => {
    NewsActions.getAllSources();
    expect(NewsActions.getAllSources).toExist();
  });

  it('should get all News', () => {
    NewsActions.getNews();
    expect(NewsActions.getNews).toExist();
  });

  it('should search for all Sources', () => {
    NewsActions.searchSources('bbc');
    expect(NewsActions.searchSources).toExist();
  });
});

