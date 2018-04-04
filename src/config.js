const dev = {
  identitiesServices: {
    URL: "http://localhost:9090",
    CALLBACK_URL: "http://localhost:3000/callback"
  }
};

const prod = {
  identitiesServices: {
    URL: "http://identities:9090",
    CALLBACK_URL: "http://open.d10l.de/callback"
  }
};

const config = process.env.REACT_APP_STAGE === 'production'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};