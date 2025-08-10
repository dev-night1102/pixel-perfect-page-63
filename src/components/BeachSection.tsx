import BeachCard from "./BeachCard";
import clearwaterImage from "@/assets/clearwater-beach.jpg";
import bondiImage from "@/assets/bondi-beach.jpg";
import anseSourceImage from "@/assets/anse-source.jpg";
import navagioImage from "@/assets/navagio-beach.jpg";

const BeachSection = () => {
  const beaches = [
    {
      name: "Clearwater Beach",
      image: clearwaterImage,
      rating: 4.5,
      reviews: 300,
      hours: "9 AM - 8 PM",
      distance: "4.5 miles",
      amenities: 2
    },
    {
      name: "Bondi Beach",
      image: bondiImage,
      rating: 4.5,
      reviews: 300,
      hours: "9 AM - 8 PM",
      distance: "4.5 miles",
      amenities: 2
    },
    {
      name: "Anse Source d'Argent",
      image: anseSourceImage,
      rating: 4.5,
      reviews: 300,
      hours: "9 AM - 8 PM",
      distance: "4.5 miles",
      amenities: 2
    },
    {
      name: "Navagio Beach",
      image: navagioImage,
      rating: 4.5,
      reviews: 300,
      hours: "9 AM - 8 PM",
      distance: "4.5 miles",
      amenities: 2
    }
  ];

  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-ocean-deep mb-2">
            Popular beaches near{" "}
            <span className="underline decoration-ocean-primary underline-offset-4">
              Clearwater
            </span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {beaches.map((beach, index) => (
            <BeachCard key={index} {...beach} />
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-gray-600 mb-2">Built by beach lovers.</p>
          <p className="text-gray-500">Made for families, surfers, and casual explorers.</p>
        </div>
      </div>
    </section>
  );
};

export default BeachSection;