import HomePage from "@/components/HomePage/HomePage";
import Tenent from "@/components/Tenants/Tenent";

const App = ({ subdomain }) => {
  console.log("Received subdomain:", subdomain);
  // let content;

  // if (subdomain === "tenant1") {
  //   content = (
  //     <h1>Welcome to Tenant 1 Font Family - {tenants[subdomain].font}</h1>
  //   );
  // } else if (subdomain === "tenant2") {
  //   content = <h1>Welcome to Tenant 2</h1>;
  // } else {
  //   content = <h1>Welcome to the Main Site</h1>;
  // }
  if (subdomain === "tenant1" || subdomain === "tenant2")
    return <Tenent subdomain={subdomain} />;
  else return <HomePage />;
};

export async function getServerSideProps(context) {
  const subdomain = context.req.query.subdomain;
  console.log("Subdomain in getServerSideProps:", subdomain);

  if (!subdomain) {
    return {
      props: {},
    };
  }

  return {
    props: { subdomain },
  };
}
export default App;
