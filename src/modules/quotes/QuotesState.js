const initialState = {
  quotes: [
    'This is some basic quote',
  ],
};

export default function QuotesReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
