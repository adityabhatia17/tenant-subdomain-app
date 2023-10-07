import tenants from "@/tenants";
import React from "react";

function Tenent({ subdomain }) {
  console.log(subdomain);
  return (
    <div>
      Tenent
      <ol>
        <li>{tenants[subdomain].color}</li>
        <li>{tenants[subdomain].title}</li>
        <li>{tenants[subdomain].content}</li>
        <li>{tenants[subdomain].font}</li>
      </ol>
    </div>
  );
}

export default Tenent;
