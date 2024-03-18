"use client";

import InfoPage from "@/src/paginas/info/page";

export default ({ params }: { params: { info: string[] } }) => (
  <InfoPage params={params} />
);
