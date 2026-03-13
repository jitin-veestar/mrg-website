import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

const SupportPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <Header />

      <main className="pt-16 pb-24">
        <section className="py-12 sm:py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-brand-red font-bold uppercase tracking-[0.2em] text-xs mb-4">
              Contact &amp; Support
            </p>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-950 mb-4">
              Get in Touch
            </h1>
            <p className="text-slate-500 max-w-2xl">
              Our team is happy to answer your technical and sales questions.
              Fill out the contact form and we will get back to you as soon as
              possible.
            </p>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="space-y-10 lg:col-span-2">
              <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8 sm:p-10">
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-2">
                  Send us a message
                </h2>
                <p className="text-slate-500 mb-8">
                  Share your requirements, technical questions, or distribution
                  inquiries and our team will respond promptly.
                </p>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-slate-700 mb-2"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        className="block w-full rounded-xl border border-slate-200 px-4 py-3 text-sm shadow-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-slate-700 mb-2"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="block w-full rounded-xl border border-slate-200 px-4 py-3 text-sm shadow-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-slate-700 mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        className="block w-full rounded-xl border border-slate-200 px-4 py-3 text-sm shadow-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                        placeholder="+91 0000000000"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-slate-700 mb-2"
                      >
                        Subject / Inquiry Type
                      </label>
                      <select
                        id="subject"
                        className="block w-full rounded-xl border border-slate-200 px-4 py-3 text-sm shadow-sm bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                      >
                        <option value="">Select an option</option>
                        <option value="sales">Sales &amp; Pricing</option>
                        <option value="technical">Technical Support</option>
                        <option value="distribution">Distribution Inquiry</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="block w-full rounded-xl border border-slate-200 px-4 py-3 text-sm shadow-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none resize-none"
                      placeholder="Share details about your requirements or question..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-3 text-sm font-bold text-white shadow-md shadow-green-900/30 hover:bg-green-700 transition-colors"
                  >
                    <span className="material-symbols-outlined text-base">
                      send
                    </span>
                    Send Message
                  </button>
                </form>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-2">
                    Business Hours
                  </h3>
                  <p className="text-sm text-slate-600">
                    Monday – Saturday:
                    <br />
                    <span className="font-semibold">10:00 AM – 6:00 PM</span>
                    <br />
                    Sunday: Closed
                  </p>
                </div>
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-2">
                    Sales Office
                  </h3>
                  <p className="text-sm text-slate-600">
                    MRG INDIA
                    <br />
                    We will be glad to hear from you. All the contact details
                    are given below.
                  </p>
                </div>
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-2">
                    Industries Served
                  </h3>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>Agriculture &amp; Farming</li>
                    <li>Industrial Sectors</li>
                    <li>Residential &amp; Commercial Infrastructure</li>
                  </ul>
                </div>
              </div>
            </div>

            <aside className="space-y-8">
              <div className="bg-slate-900 text-white rounded-3xl p-8">
                <h2 className="text-lg font-display font-bold mb-4">
                  Direct Contact
                </h2>
                <div className="space-y-5 text-sm text-slate-100">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary">
                      call
                    </span>
                    <div>
                      <p className="text-slate-400 text-xs uppercase tracking-[0.2em] mb-1">
                        Phone
                      </p>
                      <p className="font-semibold">+91 9811230094</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary">
                      mail
                    </span>
                    <div>
                      <p className="text-slate-400 text-xs uppercase tracking-[0.2em] mb-1">
                        Email
                      </p>
                      <p className="font-semibold">
                        mrgproducts.india@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary">
                      location_on
                    </span>
                    <div>
                      <p className="text-slate-400 text-xs uppercase tracking-[0.2em] mb-1">
                        Address
                      </p>
                      <p className="text-sm text-slate-100">
                        S. No. 133/2, Near Sonai Garden
                        <br />
                        Pune–Saswad Road, Uruli Devachi
                        <br />
                        Pune – 412308, Maharashtra, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SupportPage;

