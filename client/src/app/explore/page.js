import Footer from "@/components/layout/Footer";
import TourFeatures from "@/components/sections/TourFeatures";
import VideoTour from "@/components/sections/VideoTour";

export default function TourPage() {
  return (
    <main className="pt-20">
      <VideoTour />
      <TourFeatures/>
      <Footer/>
    </main>
  );
}