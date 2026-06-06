

const Country = ({country}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img
        src={country.flag}
        alt={country.name}
        className="w-full h-48 object-cover"
      />

      <div className="">
        <h2 className="p-4 text-xl-mb-3 font-semibold text-gray-800 mb-3">
          {country.name}
        </h2>
        <p className="text-sm text-gray-600 mb-4 px-2">{country.description}</p>
        <div className="flex flex-wrap gap-2 text-sm">
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">🌍{country.continent}</span>
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">💲{country.currency}</span>
        </div>
      </div>
    </div>
  );
}

export default Country