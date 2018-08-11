class Quote {}
Quote.schema = {
  name: 'Quote',
  primaryKey: 'id',
  properties: {
    quote: 'string',
    author: 'string',
    displayedTimes: { type: 'int', default: 0 },
    bookmarked: { type: 'bool', default: false },
    id: 'int',
  },
};

export default Quote;
