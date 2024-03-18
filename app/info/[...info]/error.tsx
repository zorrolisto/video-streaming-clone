"use client";

import Error from "@/src/components/error/error";

interface IProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default ({ error, reset }: IProps) => (
  <Error error={error} reset={reset} />
);
