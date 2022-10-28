
import { fetchAPI } from "../lib/api";

export default function About({stuff}) {
  return (
    <div>
      <div className="relative bg-gray-500">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            src={stuff.data.attributes.imghero.data.attributes.formats.large.url}
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


      <div className="overflow-hidden bg-white">
      <div className="relative mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute top-0 bottom-0 left-3/4 hidden w-screen bg-gray-50 lg:block" />
        <div className="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
          <div>
            
            <h3 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">{stuff.data.attributes.title}</h3>
          </div>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:col-start-2 lg:row-start-1">
            
            <div className="relative mx-auto max-w-prose text-base lg:max-w-none">
              <figure>
                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <img
                    className="rounded-lg object-cover object-center shadow-lg"
                    src={stuff.data.attributes.imgpost.data.attributes.formats.medium.url}
                    alt="Whitney leaning against a railing on a downtown street"
                    width={1184}
                    height={1376}
                  />
                </div>
                
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="mx-auto max-w-prose text-base lg:max-w-none">
              <p className="text-lg text-gray-500">
              {stuff.data.attributes.content1}
              </p>
            </div>
            <div className="prose prose-indigo mx-auto mt-5 text-gray-500 lg:col-start-1 lg:row-start-1 lg:max-w-none">
              <p>
              {stuff.data.attributes.content2}
              </p>
              
              
            </div>
          </div>
        </div>
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