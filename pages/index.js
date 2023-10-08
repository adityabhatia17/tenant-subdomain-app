import Tenant from "@/components/Tenants/Tenant";

const HomePage = ({ content }) => {
  return <Tenant content={content} />;
};

export async function getServerSideProps(context) {
  const res = await fetch(`http://${context.req.headers.host}/api/content`);
  const data = await res.json();

  return {
    props: { content: data.content },
  };
}

export default HomePage;
