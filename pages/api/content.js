import tenants from "@/tenants";
import subdomainMiddleware from "./middleware/subdomain";

const contentHandler = (req, res) => {
  const { subdomain } = req;

  const content = tenants[subdomain];

  res.json({ content });
};

export default subdomainMiddleware(contentHandler);
