import { SiteLayout } from "@/components/layout/site-layout";
import React from "react";

function page() {
  return (
    <SiteLayout
      settings={{ navbar: true, footer: true, pageContainer: true }}
    >
        F
    </SiteLayout>
  );
}

export default page;
