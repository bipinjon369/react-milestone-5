export const Footer = () => {
  const footerSections = [
    {
      title: "COMPANY",
      links: ["About", "Features", "Works", "Career"],
    },
    {
      title: "HELP",
      links: [
        "Customer Support",
        "Delivery Details",
        "Terms & Conditions",
        "Privacy Policy",
      ],
    },
    {
      title: "FAQ",
      links: ["Account", "Manage Deliveries", "Orders", "Payments"],
    },
    {
      title: "RESOURCES",
      links: [
        "Free eBooks",
        "Development Tutorial",
        "How to - Blog",
        "Youtube Playlist",
      ],
    },
  ];
  const paymentMethods = ["visa", "mastercard", "paypal", "apple", "google"];

  return (
    <footer className="bg-[#F0F0F0] py-16">
      <div className="mx-auto px-4 sm:px-6 lg:px-[101px]">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-[106px]">
          <div className="md:col-span-1">
            <h3 className="text-navbar-h1 font-alfa mb-4">FAKESTORE</h3>
            <p className="text-[#00000099] text-footer-description-text mb-4">
              We have clothes that suits your style and which you're proud to
              wear. From women to men.
            </p>
            <div className="flex gap-3">
              {Array(4)
                .fill(0)
                .map((_, i) => (
                  <img key={i} src={`/${i+1}.png`}></img>
                ))}
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-footer-menu-title text-[#111111] mb-6">
                {section.title}
              </h4>
              <ul className="space-y-2 text-[#00000099]">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-black">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-300 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#00000099]">
            Shop.co © 2000-2023, All Rights Reserved
          </p>
          <div className="flex">
            {paymentMethods.map((method, i) => (
              <div key={i}>
                <img
                  className="object-cover block"
                  src={`/${method}.png`}
                  alt={method}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
