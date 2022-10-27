
import { fetchAPI } from "../lib/api";

export default function About({stuff}) {
  return (
    <div>
      <div className="relative bg-gray-500">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            src={stuff.data.attributes.imghero.data.attributes.formats.medium.url}
            alt=""
          />
          <div
            className="absolute inset-0 bg-gray-500 mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <div className="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {stuff.data.attributes.title}
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-indigo-100">
            {stuff.data.attributes.description}
          </p>
        </div>
      </div>

    </div>
  )
}


export async function getStaticProps() {
  const stuff = await fetchAPI(
    "/about?populate=*"
  );
  
  return {
    props: { stuff },
  };
}