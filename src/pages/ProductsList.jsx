import { MdAddCircleOutline } from "react-icons/md";
import Button from "../components/form/Button";
import AppLayout from "../components/layout/AppLayout";
import ProductsTable from "../features/products/components/ProductsTable";
import Modal from "../components/modal/Modal";
import { useState } from "react";
import CreateProductForm from "../features/products/components/CreateProductForm";
import CreateCategoryForm from "../features/products/components/CreateCategoryForm";
import { useAppContext } from "../context/AppContext";
import FilterProducts from "../features/products/components/FilterProducts";
import SideDrawerModal from "../components/modal/SideDrawerModal";
import { HiFilter } from "react-icons/hi";

function ProductsList() {
  const [openCategory, setOpenCategory] = useState(false);
  const [openProduct, setOpenProduct] = useState(false);
  const [open, setOpen] = useState(false);
  const {
    state: { filteredProducts },
  } = useAppContext();

  return (
    <AppLayout>
      <div>
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-2xl font-bold text-primary-900">ProductList</h2>
          <div className="flex gap-x-4">
            <Button
              variant="secondary"
              className="flex items-center gap-2 justify-between "
              onclick={() => setOpenCategory(true)}
            >
              <span>Add Category</span>
              <MdAddCircleOutline className="w-6 h-6" />
            </Button>
            <Modal
              open={openCategory}
              title="Add new category"
              onClose={() => setOpenCategory(false)}
            >
              <CreateCategoryForm />
            </Modal>
            <Button
              variant="primary"
              className="flex items-center gap-2 justify-between "
              onclick={() => setOpenProduct(true)}
            >
              <span>Add Product</span>
              <MdAddCircleOutline className="w-6 h-6" />
            </Button>
            <Modal
              open={openProduct}
              title="Add new Product"
              onClose={() => setOpenProduct(false)}
            >
              <CreateProductForm />
            </Modal>
            <button className="" onClick={() => setOpen(true)}>
              <HiFilter className="w-7 h-7 text-primary-900" />
            </button>
            <SideDrawerModal
              open={open}
              title="Filter"
              onClose={() => setOpen(false)}
            >
              <FilterProducts onClose={() => setOpen(false)} />
            </SideDrawerModal>
          </div>
        </div>
        <div className="bg-secondary-900 p-5 rounded-2xl dark:bg-black/30 text-secondary-900 min-h-96">
          <ProductsTable products={filteredProducts} />
        </div>
      </div>
    </AppLayout>
  );
}

export default ProductsList;
