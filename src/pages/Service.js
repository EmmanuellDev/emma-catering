import E1 from "../requirements/img-eve-1.png";
import E2 from "../requirements/img-eve-2.png";
import E3 from "../requirements/img-eve-3.png";
import E4 from "../requirements/img-eve-4.png";
import E5 from "../requirements/img-eve-5.png";
import E6 from "../requirements/img-eve-6.png";
import E7 from "../requirements/img-eve-7.png";
import E8 from "../requirements/img-eve-8.png";
import E9 from "../requirements/img-eve-9.png";

const services = [
  {
    image: E1,
    title: "Wedding Event",
    description:
      "We create a memorable experience for your guests by pampering their taste buds with a feast that turns your wedding into a grand celebration.",
  },
  {
    image: E2,
    title: "60th Wedding Event",
    description:
      "We provide sumptuous food for your guests to celebrate the rare and joyous occasion of a couple stepping into their 60th year of marriage.",
  },
  {
    image: E3,
    title: "Engagement",
    description:
      "Engagement is the first step of the wedding process, and we ensure your guests' satisfaction with delicious food for the grand occasion.",
  },
  {
    image: E4,
    title: "Seemantham",
    description:
      "Celebrating motherhood is special, and we ensure that your guests experience extra happiness with our flavorful and delightful dishes.",
  },
  {
    image: E5,
    title: "Birthday Party",
    description:
      "Make birthdays memorable with our catering service. We take care of your guests' happiness with mouth-watering food offerings.",
  },
  {
    image: E6,
    title: "House Warming",
    description:
      "A housewarming is a major milestone. We make sure your guests enjoy your new home while praising both your hospitality and our delicious food.",
  },
  {
    image: E7,
    title: "Mehndi Function",
    description:
      "Mehndi ceremonies are incomplete without great food. We take care of the culinary experience while you enjoy the traditions and celebrations.",
  },
  {
    image: E8,
    title: "Corporate Events",
    description:
      "From business occasions to milestone celebrations, we ensure a premium catering experience that makes your corporate event stand out.",
  },
  {
    image: E9,
    title: "Retirement Function",
    description:
      "A retirement party is a time to cherish memories. We help make the occasion special with a delightful spread for your guests.",
  },
];

const ServicePage = () => {
  return (
    <div className="container mx-auto px-6 py-12 text-center font-['Libre_Baskerville']">
      <h2 className="text-4xl font-bold text-gray-800">What We Do</h2>
      <h3 className="text-2xl font-semibold text-teal-500 mt-2">
        Premium Catering Services
      </h3>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover rounded-md"
            />
            <h4 className="text-xl font-semibold text-gray-800 mt-4">
              {service.title}
            </h4>
            <p className="text-gray-600 mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicePage;
