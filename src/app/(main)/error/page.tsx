import { GetError } from "@/lib/queries/error";

const ErrorPage = async () => {
  const request = await GetError();
  return (
    <div></div>
  );
}

export default ErrorPage;
