import tenants from "@/tenants";
import subdomainMiddleware from "./middleware/subdomain";

const contentHandler = (req, res) => {
  const { subdomain } = req;

  if (Object.keys(tenants).find((i) => i === subdomain)) {
    if (Object.keys(tenants[subdomain]).length == 0) {
      res.json({ message: `Welcome Onboard! ${subdomain}`, content: null });
    } else {
      const content = tenants[subdomain];
      res.json({ message: null, content });
    }
  } else {
    res.status(404).json({
      message: "Not a registered user. Contact Customer Care!",
      content: null,
    });
  }
};

export default subdomainMiddleware(contentHandler);
