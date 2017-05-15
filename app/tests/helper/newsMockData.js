const News = [
  {
    author: 'http://www.abc.net.au/news/jessica-haynes/8462720',
    title: 'Everything you need to know about Trump\'s 100 days',
    description: 'From slamming news outlets and even a poem',
    url: 'http://www.abc.net.au/news/',
    urlToImage: 'http://www.abc.net.au/news/image',
    publishedAt: '2017-04-30T03:27:17Z'
  },
  {
    author: null,
    title: 'Trump the target of correspondents\' dinner jokes',
    description: 'US President Donald Trump may have skipped White House',
    url: 'http://www.abc.net.au/news/',
    urlToImage: 'http://www.abc.net.au/news/image',
    publishedAt: '2017-04-30T06:23:13Z'
  },
  {
    author: 'http://www.abc.net.au/news/dan-conifer/5189074',
    title: 'Labor backtracks on support for Adani coal mine',
    description: 'Federal Labor is stepping back from its support',
    url: 'http://www.abc.net.au/news/',
    urlToImage: 'http://www.abc.net.au/news/image/',
    publishedAt: '2017-04-30T04:52:56Z'
  },
  {
    author: null,
    title: 'Would apartments \'ruin\' this historic Sydney site?',
    description: 'Community group lashes back at the NSW Government',
    url: 'http://www.abc.net.au/news',
    urlToImage: 'http://www.abc.net.au/news/image/8484154-1x1-700x700.jpg',
    publishedAt: '2017-04-30T06:15:37Z'
  }];

const Sources = [
  {
    id: 'abc-news-au',
    name: 'ABC News (AU)',
    category: 'general',
    sortBysAvailable: ['top']
  },
  {
    id: 'al-jazeera-english',
    name: 'Al Jazeera English',
    category: 'general',
    sortBysAvailable: ['top']
  },
  {
    id: 'ars-technica',
    name: 'Ars Technica',
    category: 'technology',
    sortBysAvailable: ['top']
  },
  {
    id: 'associated-press',
    name: 'Associated Press',
    category: 'general',
    sortBysAvailable: ['top']
  },
  {
    id: 'bbc-news',
    name: 'BBC News',
    category: 'general',
    sortBysAvailable: ['top']
  },
  {
    id: 'bbc-sport',
    name: 'BBC Sport',
    category: 'sport',
    sortBysAvailable: ['top']
  },
];

export { News, Sources };
