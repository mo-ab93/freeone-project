import { fetchAPI } from "../lib/api";

export default function Services({services}) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
      <ul role="list" className="space-y-3">
      
        <li className="overflow-hidden rounded-md bg-white px-6 py-4 shadow">
          <div>
            <h2>{services.data.attributes.service1}</h2>
            <p>{services.data.attributes.description1}</p>
          </div>
          <div>
          <img
            className="object-cover"
            src={
              services.data.attributes.image1.data.attributes.formats.small.url
            }
            alt=""
          />
          </div>
        </li>
        <li className="overflow-hidden rounded-md bg-white px-6 py-4 shadow">
          <div>
            <h2>{services.data.attributes.service2}</h2>
            <p>{services.data.attributes.description2}</p>
          </div>
          <div>
          <img
            className="object-cover"
            src={
              services.data.attributes.image2.data.attributes.formats.small.url
            }
            alt=""
          />
          </div>
        </li>
        <li className="overflow-hidden rounded-md bg-white px-6 py-4 shadow">
          <div>
            <h2>{services.data.attributes.service3}</h2>
            <p>{services.data.attributes.description3}</p>
          </div>
          <div>
          <img
            className="object-cover"
            src={
              services.data.attributes.image3.data.attributes.formats.small.url
            }
            alt=""
          />
          </div>
        </li>
        <li className="overflow-hidden rounded-md bg-white px-6 py-4 shadow">
          <div>
            <h2>{services.data.attributes.service4}</h2>
            <p>{services.data.attributes.description4}</p>
          </div>
          <div>
          <img
            className="object-cover"
            src={
              services.data.attributes.image4.data.attributes.formats.small.url
            }
            alt=""
          />
          </div>
        </li>
        <li className="overflow-hidden rounded-md bg-white px-6 py-4 shadow">
          <div>
            <h2>{services.data.attributes.service5}</h2>
            <p>{services.data.attributes.description5}</p>
          </div>
          <div>
          <img
            className="object-cover"
            src={
              services.data.attributes.image5.data.attributes.formats.small.url
            }
            alt=""
          />
          </div>
        </li>
        <li className="overflow-hidden rounded-md bg-white px-6 py-4 shadow">
          <div>
            <h2>{services.data.attributes.service6}</h2>
            <p>{services.data.attributes.description6}</p>
          </div>
          <div>
          <img
            className="object-cover"
            src={
              services.data.attributes.image6.data.attributes.formats.small.url
            }
            alt=""
          />
          </div>
        </li>
        <li className="overflow-hidden rounded-md bg-white px-6 py-4 shadow">
          <div>
            <h2>{services.data.attributes.service7}</h2>
            <p>{services.data.attributes.description7}</p>
          </div>
          <div>
          <img
            className="object-cover"
            src={
              services.data.attributes.image7.data.attributes.formats.small.url
            }
            alt=""
          />
          </div>
        </li>
        
        
     
    </ul>
      
      
      
    </div>
  )
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