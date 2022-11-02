import { fetchAPI } from "../lib/api";

export default function Services({ services }) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
      <ul role="list" className="space-y-6">
        <li className="overflow-hidden rounded-md bg-white px-6 py-4 shadow">
          <div className="mx-auto max-w-[90%] py-8 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-12 lg:px-8">
            <div className="flex flex-col lg:max-w-[50%]">
              <h2 className="font-bold text-2xl pb-4">
                {services.data.attributes.service1}
              </h2>
              <p>{services.data.attributes.description1}</p>
            </div>
            <div className="mt-4 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md ">
                <img
                  className="object-cover h-80"
                  src={
                    services.data.attributes.image1.data.attributes.formats
                      .small.url
                  }
                  alt=""
                />
              </div>
            </div>
          </div>
        </li>
        <li className="overflow-hidden rounded-md bg-white px-6 py-4 shadow">
          <div className="mx-auto max-w-[90%] py-8 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-12 lg:px-8">
            <div className="mt-4 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md ">
                <img
                  className="object-cover h-80"
                  src={
                    services.data.attributes.image2.data.attributes.formats
                      .small.url
                  }
                  alt=""
                />
              </div>
            </div>
            <div className="flex flex-col lg:max-w-[50%]">
              <h2 className="font-bold text-2xl pb-4">
                {services.data.attributes.service2}
              </h2>
              <p>{services.data.attributes.description2}</p>
            </div>
          </div>
        </li>
        <li className="overflow-hidden rounded-md bg-white px-6 py-4 shadow">
          <div className="mx-auto max-w-[90%] py-8 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-12 lg:px-8">
            <div className="flex flex-col lg:max-w-[50%]">
              <h2 className="font-bold text-2xl pb-4">
                {services.data.attributes.service3}
              </h2>
              <p>{services.data.attributes.description3}</p>
            </div>
            <div className="mt-4 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md ">
                <img
                  className="object-cover h-80"
                  src={
                    services.data.attributes.image3.data.attributes.formats
                      .small.url
                  }
                  alt=""
                />
              </div>
            </div>
          </div>
        </li>
        <li className="overflow-hidden rounded-md bg-white px-6 py-4 shadow">
          <div className="mx-auto max-w-[90%] py-8 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-12 lg:px-8">
            <div className="mt-4 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md ">
                <img
                  className="object-cover h-80"
                  src={
                    services.data.attributes.image4.data.attributes.formats
                      .small.url
                  }
                  alt=""
                />
              </div>
            </div>
            <div className="flex flex-col lg:max-w-[50%]">
              <h2 className="font-bold text-2xl pb-4">
                {services.data.attributes.service4}
              </h2>
              <p>{services.data.attributes.description4}</p>
            </div>
          </div>
        </li>
        <li className="overflow-hidden rounded-md bg-white px-6 py-4 shadow">
          <div className="mx-auto max-w-[90%] py-8 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-12 lg:px-8">
            <div className="flex flex-col lg:max-w-[50%]">
              <h2 className="font-bold text-2xl pb-4">
                {services.data.attributes.service5}
              </h2>
              <p>{services.data.attributes.description5}</p>
            </div>
            <div className="mt-4 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md ">
                <img
                  className="object-cover h-80"
                  src={
                    services.data.attributes.image5.data.attributes.formats
                      .small.url
                  }
                  alt=""
                />
              </div>
            </div>
          </div>
        </li>
        <li className="overflow-hidden rounded-md bg-white px-6 py-4 shadow">
          <div className="mx-auto max-w-[90%] py-8 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-12 lg:px-8">
            <div className="mt-4 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md ">
                <img
                  className="object-cover h-80"
                  src={
                    services.data.attributes.image6.data.attributes.formats
                      .small.url
                  }
                  alt=""
                />
              </div>
            </div>
            <div className="flex flex-col lg:max-w-[50%]">
              <h2 className="font-bold text-2xl pb-4">
                {services.data.attributes.service6}
              </h2>
              <p>{services.data.attributes.description6}</p>
            </div>
          </div>
        </li>
        <li className="overflow-hidden rounded-md bg-white px-6 py-4 shadow">
          <div className="mx-auto max-w-[90%] py-8 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-12 lg:px-8">
            <div className="flex flex-col max-w-[50%]">
              <h2 className="font-bold text-2xl pb-4">
                {services.data.attributes.service7}
              </h2>
              <p>{services.data.attributes.description7}</p>
            </div>
            <div className="mt-4 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md ">
                <img
                  className="object-cover h-80"
                  src={
                    services.data.attributes.image7.data.attributes.formats
                      .small.url
                  }
                  alt=""
                />
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
export async function getStaticProps() {
  try {
    const services = await fetchAPI("/service?populate=*");
    return {
      props: {
        services,
      },
    };
  } catch (error) {
    return { error };
  }
}
