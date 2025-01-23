export default function VideoTour() {
    return (
      <section className="relative h-[70vh] md:h-[80vh] lg:h-[90vh]">
        {/* Video Background */}
        <div className="absolute inset-0">
          <img
            src="/Explore/bg_explore.svg"
            alt="Hotel View"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
      </section>
    );
  }