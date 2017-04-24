import request from 'superagent';
const NewsApi = {
  news: [],
  sources: [],

  displayNews (newsSource, sortBy) {
    const url = 'https://newsapi.org/v1/articles?apiKey=213327409d384371851777e7c7f78dfe';
    Request.get(url)
      .query({ source: newsSource })
      .query({ sortBy: sortBy })
      .end((err, response) => {
        if (err) {
          console.log(err);
        } else {
          console.log(response.body.articles);
          this.news = response.body.articles;
        }
      });
      return this.news;
  },

  getAllNews() {
    this.news = [
      { url: 'some_url.com', title: 'First Title', author: 'Haruna Popoola', publishedAt: '2017-01-09', description: 'this is a sample description'},
      { url: 'some_url.com', title: 'Second Title', author: 'Haruna Popoola', publishedAt: '2017-01-09', description: 'this is a sample description'},
      { url: 'some_url.com', title: 'Third Title', author: 'Haruna Popoola', publishedAt: '2017-01-09', description: 'this is a sample description'},
      { url: 'some_url.com', title: 'Fourth Title', author: 'Haruna Popoola', publishedAt: '2017-01-09', description: 'this is a sample description'},
      { url: 'some_url.com', title: 'Fifth Title', author: 'Haruna Popoola', publishedAt: '2017-01-09', description: 'this is a sample description'}
    ];
    return this.news;
  },

  // getAllSources() {
  //   return [
  //     { id: 1, name: 'First Source' },
  //     { id: 2, name: 'Second Source' },
  //     { id: 3, name: 'Third Source' },
  //     { id: 4, name: 'Fourth Source' },
  //     { id: 5, name: 'Fifth Source' }
  //   ];
  // }
};

export default NewsApi;
