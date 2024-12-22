// Import the Card component
import Card from "@/components/Card";
// Import the Button component
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      {/* Title */}
      <h1 className="text-xl font-extralight text-center mb-6">Landing Page</h1>

      {/* Card with Villa details */}
      <div className="mb-6">
        <Card />
      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-4 mt-4">
        <Button title="Small Button" size="small" shape="rounded-sm" />
        <Button title="Medium Button" size="medium" shape="rounded-md" />
        <Button title="Large Button" size="large" shape="rounded-full" />
      </div>
    </div>
  );
};

export default Landing;
