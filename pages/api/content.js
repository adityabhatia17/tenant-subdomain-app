import tenants from "@/tenants";
import subdomainMiddleware from "./middleware/subdomain";

const contentHandler = (req, res) => {
  const { subdomain } = req;

  const content = tenants[subdomain] || "Content for Main Site";

  res.json({ content });
};

export default subdomainMiddleware(contentHandler);
