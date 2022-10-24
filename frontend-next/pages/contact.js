import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { useState } from "react";


export default function Contact({stuff}) {
  const [photos, setPhotos] = useState(stuff);
  console.log(photos)
  return (
    
  <div className="mt-12">
  <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
  {photos &&
                      photos.data.map((detail) => (
      <div key={detail.id} className="pt-6">
        <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
          <div className="-mt-6">
            <div>
              <span className="inline-flex items-center justify-center rounded-md bg-[#E60D51] p-3 shadow-lg">
                {/* <detail.attributes.icon className="h-6 w-6 text-white" aria-hidden="true" /> */}
              </span>
            </div>
            <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">{detail.attributes.name}</h3>
            <p className="mt-5 text-base text-gray-500">{detail.attributes.description}</p>
          </div>
        </div>
      </div>
      
    ))}
  </div>
</div>

    
  )
}


export async function getStaticProps() {
  const results = await fetch("http://localhost:1337/api/featureslists");
  const stuff = await results.json();
  return {
    props: { stuff },
  };
}