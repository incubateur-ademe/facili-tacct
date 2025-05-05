import { GetError } from "@/lib/queries/error";

const ErrorPage = async () => {
  const request = await GetError();
  console.log('ErrorPage request:', request);
  return (
    <div></div>
  );
}

export default ErrorPage;
