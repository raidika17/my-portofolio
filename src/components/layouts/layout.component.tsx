import NavbarComponent from "../navbar/navbar.component";

const LayoutComponent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="relative">
      <NavbarComponent />
      <div className="space-y-6">{children}</div>
    </div>
  );
};

export default LayoutComponent;
