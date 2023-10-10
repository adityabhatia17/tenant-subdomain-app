import Onboarding from "@/components/Onboarding/Onboarding";
import Tenant from "@/components/Tenants/Tenant";

const HomePage = ({ content, message }) => {
  if (message) return <Onboarding message={message} />;
  else return <Tenant content={content} />;
};

export async function getServerSideProps(context) {
  const res = await fetch(`http://${context.req.headers.host}/api/content`);
  const data = await res.json();

  return {
    props: { content: data.content, message: data.message },
  };
}

export default HomePage;
