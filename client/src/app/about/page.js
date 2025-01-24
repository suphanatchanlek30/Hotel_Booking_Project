import Footer from "@/components/layout/Footer";

export default function About() {
  const clientLogos = [
    { src: "/About/NNPC.svg", alt: "NNPC" },
    { src: "/About/image 5.svg", alt: "Client 2" },
    { src: "/About/image 7.svg", alt: "Client 3" },
    { src: "/About/image 4.svg", alt: "Client 4" },
    { src: "/About/image 8.svg", alt: "Client 5" },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[90vh] mb-20">
        <div className="absolute inset-0">
          <img
            src="/About/video.svg"
            alt="About Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-8 font-raleway">
            About us
          </h1>
          <p className="max-w-2xl text-sm sm:text-base lg:text-lg font-raleway">
            The elegant luxury bedrooms in this gallery showcase custom interior <br/>
            designs & decorating ideas. View pictures and find your <br/> perfect
            luxury bedroom design.
          </p>
        </div>
      </section>

      {/* Manager Section */}
      <section className="container mx-auto px-4 lg:px-8 mb-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden">
            <img
              src="/About/Rectangle 34.svg"
              alt="Chidinma James"
              className="absolute inset-0 w-full h-full"
            />
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 font-raleway">
              Chidinma James (Manager)
            </h2>
            <div className="space-y-4 text-gray-600">
              <p className="text-sm sm:text-base">
                The United Nations is an international organization founded in
                1945. Currently made up of 193 Member States, the UN and its
                work are guided by the purposes and principles contained in its
                founding Charter. The UN has evolved over the years to keep pace
                with a rapidly changing world. But one thing has stayed the
                same: it remains the one place on Earth where all the world’s
                nations can gather together, discuss common problems, and find
                shared solutions that benefit all of humanity. The
                Secretary-General is Chief Administrative Officer of the UN –
                and is also a symbol of the Organization's ideals and an
                advocate for all the world's peoples, especially the poor and
                vulnerable.
              </p>
              <p className="text-sm sm:text-base">
                The Secretary-General is appointed by the General Assembly on
                the recommendation of the Security Council for a 5-year,
                renewable term. The current Secretary-General, and the 9th
                occupant of the post, is António Guterres of Portugal, who took
                office on 1 January 2017. On the 18th of June, 2021, Guterres
                was re-appointed to a second term, pledging as his priority to
                continue helping the world chart a course out of the COVID-19
                pandemic.
              </p>
              <p className="text-sm sm:text-base">
                The United Nations is an international organization founded in
                1945. Currently made up of 193 Member States, the UN and its
                work are guided by the purposes and principles contained in its
                founding Charter. The UN has evolved over the years to keep pace
                with a rapidly changing world. But one thing has stayed the
                same: it remains the one place on Earth where all the world’s
                nations can gather together, discuss common problems, and find
                shared solutions that benefit all of humanity. The
                Secretary-General is Chief Administrative Officer of the UN –
                and is also a symbol of the Organization's ideals and an
                advocate for all the world's peoples, especially the poor and
                vulnerable.
              </p>
              <p className="text-sm sm:text-base">
                The Secretary-General is appointed by the General Assembly on
                the recommendation of the Security Council for a 5-year,
                renewable term. The current Secretary-General, and the 9th
                occupant of the post, is António Guterres of Portugal, who took
                office on 1 January 2017. On the 18th of June, 2021, Guterres
                was re-appointed to a second term, pledging as his priority to
                continue helping the world chart a course out of the COVID-19
                pandemic.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-[30px] font-semibold text-center mb-12 font-raleway">
            Clients
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
            {clientLogos.map((logo, index) => (
              <div key={index} className="w-32 sm:w-20">
                <img src={logo.src} alt={logo.alt} className="w-full h-auto" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
