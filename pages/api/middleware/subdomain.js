const subdomainMiddleware = (handler) => (req, res) => {
  const subdomain = req.headers.host.split(".")[0];

  req.subdomain = subdomain;

  return handler(req, res);
};

export default subdomainMiddleware;
