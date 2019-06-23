import retrieveEmailActions from "../actions/retrieveEmail.actions";

const initialState = {
  emails: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case retrieveEmailActions.GET_EMAILS:
      return { ...state, emails: payload };
    case retrieveEmailActions.SEND_EMAIL:
      return { ...state, sent: payload };
    default:
      return state;
  }
};
