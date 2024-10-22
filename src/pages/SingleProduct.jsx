import React, { useEffect, useState } from "react";
import AppLayout from "../components/layout/AppLayout";
import { useParams } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import defaultImage from "../images/default-removebg-preview.png";
import { FaBox } from "react-icons/fa";
import Button from "../components/form/Button";
import { HiOutlineCheckCircle } from "react-icons/hi";

function SingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const {
    state: { productsState },
  } = useAppContext();

  useEffect(() => {
    const findProduct = productsState.products.find(
      (product) => product.id === Number(id)
    );
    if (findProduct) {
      setProduct(findProduct);
    }
  }, [id]);

  if (!product) {
    return (
      <AppLayout>
        <div>Product not found</div>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <div className="flex ">
        <div className="flex-1 bg-white dark:bg-black/30 flex items-center justify-center rounded-2xl">
          <img className="p-10" src={defaultImage} alt="" />
        </div>
        <div className="flex-1 ">
          <div className="px-10 flex flex-col items-start justify-between h-full">
            <div className="flex flex-col items-start">
              <h1 className="text-4xl font-bold text-black/80 dark:text-white/90">
                {product.title}
              </h1>
              <p className="my-5 text-3xl font-bold text-black/70 dark:text-white/70">
                $ {product.price}
              </p>
              <div className="flex items-center gap-x-2 text-black/70 dark:text-white/70">
                <FaBox />
                <span className="">{product.quantity}</span>
              </div>
              <div className="my-5">
                <ul className="space-y-6 text-black/80 dark:text-white/80">
                  <li className="flex items-center gap-x-2">
                    <HiOutlineCheckCircle className="h-6 w-6" />
                    <span>Feature one</span>
                  </li>
                  <li className="flex items-center gap-x-2">
                    <HiOutlineCheckCircle className="h-6 w-6" />
                    <span>Feature two</span>
                  </li>
                  <li className="flex items-center gap-x-2">
                    <HiOutlineCheckCircle className="h-6 w-6" />
                    <span>Feature three</span>
                  </li>
                  <li className="flex items-center gap-x-2">
                    <HiOutlineCheckCircle className="h-6 w-6" />
                    <span>Feature four</span>
                  </li>
                  <li className="flex items-center gap-x-2">
                    <HiOutlineCheckCircle className="h-6 w-6" />
                    <span>Feature five</span>
                  </li>
                  <li className="flex items-center gap-x-2">
                    <HiOutlineCheckCircle className="h-6 w-6" />
                    <span>Feature six</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex gap-x-2 ">
              <Button
                variant="primary"
                className="flex items-center gap-2 justify-between px-10"
              >
                <span>Buy it now</span>
              </Button>
              <Button
                variant="secondary"
                className="flex items-center gap-2 justify-between px-10"
              >
                <span>Add to Cart</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

export default SingleProduct;
