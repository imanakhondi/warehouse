import React, { useEffect, useState } from "react";
import AppLayout from "../components/layout/AppLayout";
import { useParams } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

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
      <h1>{product?.title}</h1>
      <h1>{product?.quantity}</h1>
      <h1>{product?.category}</h1>
      <h1>{product?.date}</h1>
    </AppLayout>
  );
}

export default SingleProduct;
