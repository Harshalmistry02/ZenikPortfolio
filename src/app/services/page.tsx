"use client";

import React, { Suspense } from "react";
import { Services } from "../../page-components/Services";

function ServicesLoader() {
  return (
    <div className="pt-32 pb-20 text-center text-sm text-gray-500">
      Loading services pipeline...
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<ServicesLoader />}>
      <Services />
    </Suspense>
  );
}
