// Import the Card component
import Card from "@/components/Card";

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className="text-xl font-extralight">Landing Page</h1>

      {/* Add this line of code to render the Card component */}
      <Card />
    </div>
  );
};

export default Landing;
