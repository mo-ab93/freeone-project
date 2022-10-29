import React from "react";
import Partnerlist from "../components/partnerlist";
import { fetchAPI } from "../lib/api";

export default function Partners({ partners }) {
  return (

    <div className="bg-white">
            <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-3">
            <div className="space-y-12">
            <ul
            role="list"
            className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
          >
          {partners.data &&
        partners.data.map((partner, i) => (
          <Partnerlist
            key={partner.id}
            logo={
              partner.attributes.logo.data.attributes.formats.medium.url
            }
            title={partner.attributes.title}
            slug={partner.attributes.slug}
          />
        ))}
              </ul>
              </div>
              </div>
            </div>


  );
}

export async function getStaticProps() {
  try {
    const partners = await fetchAPI("/partners?populate=*");
    return {
      props: {
        partners,
      },
    };
  } catch (error) {
    return { error };
  }
}
