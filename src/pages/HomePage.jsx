import React from "react";
import AppLayout from "../components/layout/AppLayout";
import Breadcrumb from "../components/ui/Breadcrumb";
import Button from "../components/form/Button";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <AppLayout>
      <div className="flex flex-col h-[calc(100vh-20rem)]">
        <div className="mb-5 text-black/80 dark:text-white/90 text-left">
          <Breadcrumb />
        </div>
        <div className="flex items-center justify-center flex-grow overflow-hidden">
          <Link to="/products">
            <Button
              variant="secondary"
              className="flex items-center gap-2 justify-between px-10 py-3"
            >
              Go to Products Page
            </Button>
          </Link>
        </div>
      </div>
    </AppLayout>
  );
}

export default HomePage;
