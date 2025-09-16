const Services = () => {
  const services = [
    {
      id: "01",
      title: "Web Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris urna nisi, molestie eget malesuada nec, pretium eu enim.",
    },
    {
      id: "02",
      title: "Web Development",
      description:
        "Integer in metus lacus. Sed purus sapien, vestibulum aliquam lorem et, molestie malesuada ligula.",
    },
    {
      id: "03",
      title: "SEO Optimization",
      description:
        "Nunc vehicula cursus est. Sed a est at ligula venenatis dignissim.",
    },
    {
      id: "04",
      title: "UI/UX Design",
      description:
        "Praesent vitae sapien non arcu sagittis consequat et eget nibh.",
    },
    {
      id: "05",
      title: "E-commerce",
      description:
        "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.",
    },
    {
      id: "06",
      title: "Maintenance",
      description:
        "Ut convallis, sem et iaculis lacinia, orci risus facilisis eros, sit amet posuere libero nunc et libero.",
    },
  ];

  return (
    <section className="text-white py-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Αριστερή στήλη */}
        <div className="col-span-1">
          <h2 className="text-3xl  md:text-4xl xl:text-5xl font-extrabold sticky top-20">
            SERVICES
          </h2>
        </div>

        {/* Δεξιά στήλη */}
        <div className="col-span-3 space-y-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex items-start gap-6 border-b border-gray-700 pb-8"
            >
              <div className="text-gray-400 font-bold text-4xl md:text-5xl min-w-[3rem]">
                {service.id}
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

