import Header from "../ui/Header";

function AppLayout({ children }) {
  return (
    <div className="h-screen">
      <Header />
      <div className="container mt-10">{children}</div>
    </div>
  );
}

export default AppLayout;
