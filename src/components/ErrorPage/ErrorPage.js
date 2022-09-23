import { Link } from "react-router-dom";
import errorImage from "./404.jpg";

export const ErrorPage = () => {
  return (
    <section className="flex flex-col items-center h-min-screen gap-6">
      <img className="w-96 mt-20" src={errorImage} alt="error 404 logo" />
      <p className="italic">Looks like this page went on vacation !</p>
      <p className="font-bold text-green-500">
        <Link to="/">Home</Link>
      </p>
    </section>
  );
};
