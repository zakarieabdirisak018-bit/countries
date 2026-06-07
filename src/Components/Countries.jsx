import Country from "./Country";

const Countries = () => {
  const countries = [
    {
      name: "Japan",
      flag: "https://flagcdn.com/w320/jp.png",
      currency: "Japanese Yen",
      continent: "Asia",
      description:
        "A Pacific island nation known for its blend of modern cities and traditional culture.",
    },
    {
      name: "Brazil",
      flag: "https://flagcdn.com/w320/br.png",
      currency: "Brazilian Real",
      continent: "South America",
      description:
        "A large South American country famous for the Amazon rainforest and vibrant festivals.",
    },
    {
      name: "Canada",
      flag: "https://flagcdn.com/w320/ca.png",
      currency: "Canadian Dollar",
      continent: "North America",
      description:
        "A vast country with lakes, forests, and friendly multicultural cities.",
    },
    {
      name: "Kenya",
      flag: "https://flagcdn.com/w320/ke.png",
      currency: "Kenyan Shilling",
      continent: "Africa",
      description:
        "Known for wildlife safaris, savannas and the Great Rift Valley.",
    },
    {
      name: "Australia",
      flag: "https://flagcdn.com/w320/au.png",
      currency: "Australian Dollar",
      continent: "Oceania",
      description:
        "A large island nation with unique wildlife and scenic coastlines.",
    },
    {
      name: "Germany",
      flag: "https://flagcdn.com/w320/de.png",
      currency: "Euro",
      continent: "Europe",
      description:
        "A European country known for engineering, beer festivals, and historic cities.",
    },
    {
      name: "India",
      flag: "https://flagcdn.com/w320/in.png",
      currency: "Indian Rupee",
      continent: "Asia",
      description:
        "A diverse nation with rich history, cuisine, and cultural traditions.",
    },
    {
      name: "New Zealand",
      flag: "https://flagcdn.com/w320/nz.png",
      currency: "New Zealand Dollar",
      continent: "Oceania",
      description:
        "An island country with dramatic landscapes and a strong outdoors culture.",
    },
    {
      name: "somalia",
      flag: "https://flagcdn.com/w320/so.png",
      currency: "Somali Shilling",
      continent: "Africa",
      description:
        "A country in the Horn of Africa with a long coastline along the Indian Ocean.",
    },
    {
      name: "djibouti",
      flag: "https://flagcdn.com/w320/dj.png",
      currency: "Djiboutian Franc",
      continent: "Africa",
      description: "A country located in the horn of africa"
    },
    {
      name: "egypt",
      flag: "https://flagcdn.com/w320/eg.png",
      currency: "Egyptian Pound",
      continent: "Africa",
      description: "A country located in North Africa known for its ancient civilization and the Nile River"
    }
    
  ];

  const filter = "somalia"

  return (
    <div className=" container mx-auto px-4 py-8 ">
      <h1 className="text-center font-bold text-3xl md:text-4xl text-gray-800 mb-8">
        World countries
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {countries.map((country, index) => (
          (country.name.includes(filter) || country.continent.includes(filter)) && (<Country country={country} key={index} />)
        ))}
      </div>
    </div>
  );
};

export default Countries;
