

export default function Featureslist({ imageUrl, name, description }) {
  return (
    <li>
      <div className="space-y-4 shadow rounded">
        <div className="aspect-w-4 aspect-h-2">
          <img className=" object-cover rounded-t	" src={imageUrl} alt="" />
        </div>

        <div className="space-y-2 px-3 py-2">
          <div>
            <h3 className="text-lg font-medium tracking-tight text-gray-900">{name}</h3>
            <p className="mt-3 text-base text-gray-500">{description}</p>
          </div>
        </div>
      </div>
    </li>
  );
}
