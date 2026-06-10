import React, { use } from "react";
import { SingleService } from "../../../page-components/SingleService";

export default function ServicePage({ params }: { params: Promise<{ serviceId: string }> }) {
  const resolvedParams = use(params);
  return <SingleService serviceId={resolvedParams.serviceId} />;
}