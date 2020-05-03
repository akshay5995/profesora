const auth0config = {
  domain: process.env.DOMAIN,
  client_id: process.env.CLIENT_ID,
  audience: process.env.AUDIENCE,
};

const hasuraConfig = {
  gqlEndpoint: process.env.GQLENDPOINT,
  wssEndpoint: process.env.WSSENDPOINT,
};

export { auth0config, hasuraConfig };
