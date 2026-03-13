import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <Header />

      <main className="pt-16 pb-24">
        <section className="py-12 sm:py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-brand-red font-bold uppercase tracking-[0.2em] text-xs mb-4">
              About Us
            </p>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-950 mb-4">
              Our Story &amp; Legacy
            </h1>
            <p className="text-slate-500 max-w-2xl">
              Mundra Electrical Industries (MEI) powers homes, farms, and
              industries with reliable electrical solutions engineered for
              Indian conditions.
            </p>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
                  About Company
                </h2>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    Mundra Electrical Industries (MEI), established in 1990, is
                    an IS 694 standard and ISO 9001:2015 certified company
                    dedicated to providing efficient and affordable electrical
                    products and solutions. The company manufactures a wide
                    range of electrical wires, cables, and switchgear products
                    for domestic, agricultural, and industrial sectors.
                  </p>
                  <p>
                    With more than 25 years of experience, the company has
                    become a trusted manufacturer and supplier of high-quality
                    electrical products. Each product is recognized for its
                    reliability, durability, and strong performance. Supported
                    by a skilled workforce, the company has built a strong
                    reputation in the industry.
                  </p>
                  <p>
                    Every product is developed with careful attention to quality
                    and precision. The company operates with modern
                    infrastructure and a well-established distribution network
                    that allows large-scale production according to customer
                    requirements. Their research and development team
                    continuously works on introducing improved models and
                    innovative electrical products.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
                  Our Story
                </h2>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    Over the past decades, the company has consistently focused
                    on delivering high-performance electrical products designed
                    to meet the needs of multiple industries. Through a
                    combination of skilled professionals, modern manufacturing
                    processes, and customer-focused service, the company has
                    strengthened its presence in the electrical products market.
                  </p>
                  <p>
                    Continuous innovation and product improvement remain central
                    to the company’s growth strategy, ensuring that customers
                    receive reliable and technologically advanced solutions.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
                  Our Mission
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  Our mission is to inspire and nurture customer needs by
                  simplifying electrical solutions and delivering the highest
                  quality products that make everyday operations easier and more
                  efficient.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <h2 className="text-2xl font-display font-bold mb-3">
                    Quality Assurance
                  </h2>
                  <p className="text-slate-600 leading-relaxed">
                    Quality is our primary priority. Every step of the
                    manufacturing process—from selecting high-quality components
                    to assembly and testing—is carefully monitored to ensure
                    durability, reliability, and trouble-free performance under
                    varied conditions.
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl font-display font-bold mb-3">
                    Distribution Network
                  </h2>
                  <p className="text-slate-600 leading-relaxed">
                    The company operates with modern manufacturing
                    infrastructure and a strong distribution network that
                    enables efficient bulk production and timely delivery.
                    Supported by a dedicated research and development team, the
                    company continues to introduce improved designs and
                    innovative electrical solutions to meet the evolving needs
                    of customers.
                  </p>
                </div>
              </div>
            </div>

            <aside className="space-y-8">
              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
                <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500 mb-4">
                  At a Glance
                </h3>
                <ul className="space-y-4 text-sm text-slate-600">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary mt-0.5">
                      calendar_month
                    </span>
                    <span>Established in 1990 with a focus on quality.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary mt-0.5">
                      verified
                    </span>
                    <span>
                      IS 694 standard and ISO 9001:2015 certified
                      manufacturing.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary mt-0.5">
                      bolt
                    </span>
                    <span>
                      Wide portfolio of wires, cables, and switchgear products.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary mt-0.5">
                      travel_explore
                    </span>
                    <span>
                      Strong distribution network serving domestic, agricultural,
                      and industrial customers.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-900 text-white rounded-3xl p-8">
                <h3 className="text-lg font-display font-bold mb-3">
                  Partner With Us
                </h3>
                <p className="text-sm text-slate-200 mb-6">
                  Looking to collaborate or distribute MEI products in your
                  region? Get in touch with our team for partnership
                  opportunities.
                </p>
                <a
                  href="mailto:mrgproducts.india@gmail.com"
                  className="inline-flex items-center gap-2 text-sm font-bold text-primary-foreground bg-white text-slate-900 px-5 py-3 rounded-full hover:bg-primary hover:text-white transition-colors"
                >
                  <span className="material-symbols-outlined text-base">
                    mail
                  </span>
                  Contact Us
                </a>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;

