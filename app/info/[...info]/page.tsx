"use client";

import InfoPage from "@/src/pages/info/page";

export default ({ params }: { params: { info: string[] } }) => (
  <InfoPage params={params} />
);
