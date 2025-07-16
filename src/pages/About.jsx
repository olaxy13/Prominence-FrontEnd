// import aboutImage from '../assets/about-techfix.jpg';

const About = () => {
  return (
    <section className="px-6 py-8 mx-auto text-gray-800">
      <h2 className="text-3xl font-bold mb-8">About Us</h2>

      <div className="mb-8">
        {/* <h3 className="text-xl font-semibold mb-2">Our Story</h3> */}
        <p className="mb-3">
          Prominence Telecoms is dedicated to delivering high-quality laptops
          and related accessories to meet the diverse needs of our customers. We
          carefully source our products from trusted manufacturers to ensure
          reliability, performance, and value. Our extensive range of laptops
          caters to everyday users, professionals, and gamers alike, offering
          cutting-edge technology and exceptional durability
        </p>
        <p className="">
          In addition to sales, we provide professional repair services for
          laptops and mobile devices, carried out by experienced technicians
          committed to restoring your devices efficiently and effectively. Our
          focus remains on ensuring that every customer has access to top-tier
          technology and dependable support.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
        <p>
          To provide superior laptops and accessories that empower our customers
          to achieve their goals with confidence, supported by expert repair
          services when needed.
        </p>
      </div>

      <div className="mb-8">
        <img
          //   src={aboutImage}
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
          alt="Prominence"
          className="rounded-lg shadow-lg w-full object-cover min-h-[500px]"
        />
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
        <p>
          To become the leading and most trusted provider of laptops and mobile
          technology solutions in the region, known for quality, innovation, and
          outstanding customer care.
        </p>
      </div>

      {/* <button className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition">
        Contact Us
      </button> */}
    </section>
  );
};

export default About;
