import HeadingComponent from "./_components/heading";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      {children}
    </div>
  );
};

export default LandingLayout;
