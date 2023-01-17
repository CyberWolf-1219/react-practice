import React from "react";
import { useRouter } from "next/router";

function PropertyDetailsPage() {
  const router = useRouter();
  const { propertyID } = router.query;
  console.log(propertyID);

  return <div>PropertyDetailsPage</div>;
}

export default PropertyDetailsPage;
