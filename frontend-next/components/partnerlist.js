import React from "react";
import Link from "next/link";

export default function Partnerlist({ title, slug, logo }) {
  return (
    <Link href={`partner/${slug}`} >
      <li>
        <div className="space-y-4 shadow rounded">
          <div className="aspect-w-9 aspect-h-5">
            <img className=" object-cover rounded-t	" src={logo} alt="" />
          </div>

          <div className="space-y-2 px-3 py-2">
            <div>
              <h3 className="text-lg font-medium tracking-tight text-gray-900 text-center">
                {title}
              </h3>
            </div>
          </div>
        </div>
      </li>
    </Link>
  );
}
