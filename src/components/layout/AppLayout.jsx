import Header from "../ui/Header";

function AppLayout({ children }) {
  return (
    <div className="h-screen">
      <Header />
      <div className="container">{children}</div>
    </div>
  );
}

export default AppLayout;
