import React from "react";

function Property({ subdomain }) {
  return <div>{subdomain}</div>;
}

export default Property;

export async function getServerSideProps(context) {
  const subdomain = context.req.query.subdomain;

  if (!subdomain) {
    return {
      props: {},
    };
  }

  return {
    props: { subdomain },
  };
}
