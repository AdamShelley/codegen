import { Button } from "@/components/ui/button";

const LandingPage = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-col items-center justify-center flex-1 px-6 pb-10 text-center gap-y-8">
        <h1 className="text-4xl font-bold">Welcome to Awesome Service!</h1>
        <p className="text-lg">
          Blah blah blah, we offer the best solutions for your needs.
        </p>

        <div className="flex flex-col gap-4 mt-8 md:flex-row">
          <div className="text-center">
            <h2 className="text-2xl font-semibold">Feature One</h2>
            <p>Describe why this feature is important.</p>
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-semibold">Feature Two</h2>
            <p>Highlight another key benefit.</p>
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-semibold">Feature Three</h2>
            <p>Talk about your unique selling point.</p>
          </div>
        </div>

        <div className="mt-10">
          <Button variant="outline" size="lg">
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
