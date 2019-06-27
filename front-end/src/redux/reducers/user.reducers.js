import userActions from "../actions/user.actions";
// import ProfileConfig from "../../EmailConfig";

const initialState = {
  authenticated: false
  // name: ProfileConfig.NAME,
  // email: ProfileConfig.EMAIL,
  // password: ProfileConfig.PASSWORD,
  // imap_server: ProfileConfig.IMAP_SERVER,
  // imap_port: ProfileConfig.IMAP_PORT,
  // smtp_server: ProfileConfig.SMTP_SERVER,
  // smtp_port: ProfileConfig.SMTP_PORT
  // authenticated: true
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case userActions.UPDATE_NAME:
      return { ...state, name: payload.name };
    case userActions.UPDATE_EMAIL:
      return { ...state, email: payload.email };
    case userActions.UPDATE_PASSWORD:
      return { ...state, password: payload.password };
    case userActions.UPDATE_IMAP_SERVER:
      return { ...state, imap_server: payload.imap_server };
    case userActions.UPDATE_IMAP_PORT:
      return { ...state, imap_port: payload.imap_port };
    case userActions.UPDATE_SMTP_SERVER:
      return { ...state, smtp_server: payload.smtp_server };
    case userActions.UPDATE_SMTP_PORT:
      return { ...state, smtp_port: payload.smtp_port };
    case userActions.AUTHENTICATE:
      console.log("authenticated");
      return { ...state, authenticated: payload.authenticate };
    case userActions.UNAUTHENTICATE:
      console.log("NOT authenticated");
      return { ...state, authenticated: payload.authenticate };
    default:
      return state;
  }
};
