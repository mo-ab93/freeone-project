import Featureslist from "../components/featureslist";
import Form from "../components/form";
import { fetchAPI } from "../lib/api";

export default function Home({ featureStuff, contectStuff }) {
  return (
    <div>
      <main>
        <div>
          {/* Hero card */}
          <div className="relative">
            <div className="mx-auto max-w-full">
              <div className="relative shadow-xl sm:overflow-hidden ">
                <div className="absolute inset-0">
                  <img
                    className="h-full w-full object-cover"
                    src={contectStuff.attributes.heroimg.data.attributes.url}
                    alt="People working on laptops"
                  />
                  <div className="absolute inset-0 bg-white-700 mix-blend-multiply" />
                </div>
                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                  <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                    <span className="block text-white">
                      {contectStuff.attributes.h1span1}
                    </span>
                    <span className="block text-[#22A2A3]">
                      {contectStuff.attributes.h1span2}
                    </span>
                  </h1>
                  <p className="mx-auto mt-6 max-w-lg text-center text-xl text-white sm:max-w-3xl">
                    {contectStuff.attributes.description}
                  </p>
                  <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                    <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                      <a
                        href={contectStuff.attributes.button1link}
                        className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-[#22A2A3] shadow-sm hover:bg-indigo-50 sm:px-8"
                      >
                        {contectStuff.attributes.button1}
                      </a>
                      <a
                        href={contectStuff.attributes.button2link}
                        className="flex items-center justify-center rounded-md border border-transparent bg-[#22A2A3] bg-opacity-60 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-opacity-70 sm:px-8"
                      >
                        {contectStuff.attributes.button2}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* More main page content here... */}
      </main>
      <h1 className="text-xl font-semibold text-[#22A2A3] text-center py-14">
        {contectStuff.attributes.featuretitle}
      </h1>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-3">
          <div className="space-y-12">
            <ul
              role="list"
              className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
            >
              {featureStuff &&
                featureStuff.data.map((detail) => (
                  <Featureslist
                    key={detail.id}
                    imageUrl={
                      detail.attributes.image.data.attributes.formats.medium.url
                    }
                    name={detail.attributes.name}
                    description={detail.attributes.description}
                  />
                ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <p className="text-center text-lg font-semibold text-gray-600">
          {contectStuff.attributes.smallbusinesses}
          </p>
          <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
            <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
              <img
                className="max-h-12"
                src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
                alt="Workcation"
              />
            </div>
            <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
              <img
                className="max-h-12"
                src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg"
                alt="Mirage"
              />
            </div>
            <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
              <img
                className="max-h-12"
                src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
                alt="Tuple"
              />
            </div>
            <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
              <img
                className="max-h-12"
                src="https://tailwindui.com/img/logos/laravel-logo-gray-400.svg"
                alt="Laravel"
              />
            </div>
            <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
              <img
                className="max-h-12"
                src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                alt="StaticKit"
              />
            </div>
            <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
              <img
                className="max-h-12"
                src="https://tailwindui.com/img/logos/statamic-logo-gray-400.svg"
                alt="Statamic"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-hidden bg-white py-16 px-4 sm:px-6 lg:px-8 lg:py-16">
        <div className="relative mx-auto max-w-2xl">
          <svg
            className="absolute left-full translate-x-1/2 transform"
            width={404}
            height={404}
            fill="none"
            viewBox="0 0 404 404"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="85737c0e-0916-41d7-917f-596dc7edfa27"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={404}
              fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
            />
          </svg>
          <svg
            className="absolute right-full bottom-0 -translate-x-1/2 transform"
            width={404}
            height={404}
            fill="none"
            viewBox="0 0 404 404"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="85737c0e-0916-41d7-917f-596dc7edfa27"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={404}
              fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
            />
          </svg>
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-[#22A2A3] text-center py-2">
            {contectStuff.attributes.h1contact}
            </h1>
            <p className="text-center text-lg font-semibold text-gray-600">
            {contectStuff.attributes.descriptioncontact}
            </p>
          </div>
          <div>
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  try {
    const featureStuff = await fetchAPI("/featureslists?populate=*");
    const contectStuff = await fetchAPI("/homepage?populate=*");
    const responses = await Promise.all([featureStuff, contectStuff]);
    return {
      props: {
        featureStuff: responses[0],
        contectStuff: responses[1].data,
      },
    };
  } catch (error) {
    return { error };
  }
}