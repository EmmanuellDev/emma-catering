import E1 from "../requirements/img-eve-1.png";
import E2 from "../requirements/img-eve-2.png";
import E3 from "../requirements/img-eve-3.png";
import E4 from "../requirements/img-eve-4.png";
import E5 from "../requirements/img-eve-5.png";
import E6 from "../requirements/img-eve-6.png";
import E7 from "../requirements/img-eve-7.png";
import E8 from "../requirements/img-eve-8.png";
import E9 from "../requirements/img-eve-9.png";
import AB from "../requirements/about-bg.png";
import { motion } from "framer-motion";

const services = [
  {
    image: E1,
    title: "Wedding Event",
    description:
      "Wedding. Why we have the concept of inviting all our relatives, friends and known ones? Its because, when a family celebrates an event means, its an occasion, when lot of people celebrates an event means, it turns as a feast. If there any feast occurs without food?? We are here to make a memorable experience for your guests by pampering their taste buds.",
  },
  {
    image: E2,
    title: "60th Wedding Event",
    description:
      "What more happiness we can get more than getting blessings from a couple who are stepping into their 60th year of the wedding life. In our nuclear family system, seeing our elders and spending time with them became rarity. We at Venus Catering Service, want to provide a sumptuous food for all your guests who are attending for your family 60th wedding anniversary.",
  },
  {
    image: E3,
    title: "Engagement",
    description:
      "Wedding is a special bond which makes the life of any person as a beautiful one. Engagement is the first step of the wedding process and it assures the bond and relationship between two individuals. Engagements are celebrated in very grand manner. According to us, we give more importance to the satisfaction of the guests in terms of food.",
  },
  {
    image: E4,
    title: "Seemantham",
    description:
      "What can be more special than a woman giving life to another soul in this world? It’s an amazing experience to witness a woman getting transformed into motherhood. All the friends, relatives and people on our locality will be coming to greet and bless the to be mother and the baby to arrive safely. We make sure that the food taste gives you extra happiness and smile.",
  },
  {
    image: E5,
    title: "Birthday Party",
    description:
      "Make every birthday a memorable one with our birthday photography. Whether it’s a child's first birthday or a milestone celebration, we capture the joy, excitement, and love of the day and preserve it forever. At Venus Catering Service, we take care of the happiness of your guests by offering them amazing food on behalf of you.",
  },
  {
    image: E6,
    title: "House Warming",
    description:
      "Houses makes our life complete. Most of our life we are going to spend on the houses. So houses are always special. It carries out all the emotions of family and pass it to generations and on. In our society, building a house is considered as an achievement and it gives immense happiness and secured feel. We take of your guests and they will praise about your house and our food as well.",
  },
  {
    image: E7,
    title: "Mehndi Function",
    description:
      "The core significance of applying Mehndi is to utilize its natural medicinal herbal remedies, cooling the body and relieving the bride of any stress before her big day. Apart from the medicinal benefit, bride g looks beautiful with her mehndi filled hands. In modern day marriages, it’s a trend to have mehndi function exclusively and we obviously take care of food.",
  },
  {
    image: E8,
    title: "Corporate Events",
    description:
      "From corporate events to business occasions or milestone celebrations, our event catering team captures the heart of their audiences on their special occasions. We focus on delivering the customized delicacies of different types. We make sure all the audience feel good about the food too and that make your event unique.",
  },
  {
    image: E9,
    title: "Retirement Function",
    description:
      "A retirement party is definitely a time to get emotional and relish the moments of hard work and perseverance. We do this by organizing an event to present highlights of the retiree's personal life and work life. Both are important to display at this occasion. We call all our colleagues and near ones and its unfair to send them without good food.",
  },
];

const ServicePage = () => {
  const title = "Services";
  const title1 = "Premium Catering Services";
  return (
    <div>
          <div
      className="flex flex-col items-center mt-22 justify-center text-center h-[200px] relative"
      style={{
        backgroundImage: `url(${AB})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontFamily: "Libre Baskerville, serif",
      }}
    >
      {/* Overlay to dull the background */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative text-white p-4">
        <h1 className="text-5xl mb-6 flex">
          {title.split("").map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, x: -20 }} // Start from left (-20px)
              animate={{ opacity: 1, x: 0 }} // Move to its normal position
              transition={{ delay: index * 0.2, duration: 0.4 }}
              className="mr-1" // Adds spacing between letters
            >
              {letter}
            </motion.span>
          ))}
        </h1>
        <p className="text-1xl">Website / Services</p>
      </div>
    </div>
    <div className="container mx-auto px-6 py-12 text-center libre-baskerville-text">
      <h2 className="text-3xl libre-baskerville-text1">What We Do<span className="text-[#951F44] animate-pulse"> ~</span></h2>
      <h3 className="text-4xl font-semibold text-black mt-2 flex justify-center">
      {title1.split("").map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, x: -20 }} // Start from left (-20px)
          animate={{ opacity: 1, x: 0 }}  // Move to original position
          transition={{ delay: index * 0.05, duration: 0.3 }} // Delay effect
        >
          {letter === " " ? "\u00A0" : letter} {/* Preserve spaces */}
        </motion.span>
      ))}
    </h3>

      <div className="mt-12 grid grid-cols-1 rounded-full md:grid-cols-2 lg:grid-cols-3 gap-16">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#E9b472] shadow-lg shadow-[#951F44] rounded-lg p-6 hover:shadow-xl transition duration-300"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-96 object-cover rounded-md"
            />
            <h4 className="text-3xl pl-3 text-left font-semibold text-gray-800 mt-4">
              {service.title}
            </h4>
            <p className="text-black text-left pt-4 pl-3 mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default ServicePage;
