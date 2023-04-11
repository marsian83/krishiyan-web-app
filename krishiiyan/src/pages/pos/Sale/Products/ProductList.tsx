import React, { useState, useEffect } from "react";
import * as Api from "../../../../Services/Api";
import { Icon } from "@iconify/react";

const ProductList = (props: any) => {
  const [products, setProducts] = useState<any>();

  const getProducts = async () => {
    const [err, res] = await Api.getDealerProducts();
    if (res) {
      setProducts(res?.data);
    }
  };

  useEffect(() => {
    const init = () => {
      getProducts();
    };
    init();
  }, []);

  const productDetails = (details: any) => {
    console.log(details);
    props?.setSelectedProductDetails(details);
  };

  return (
    <>
      {products &&
        products.map((product: any) => (
          <>
            <div
              key={product?._id}
              className="flex justify-around p-2 mt-5"
            >
              <div>{product?._id.slice(0, 5)}</div>
              <div>{product?.tradeName}</div>
              <button>
                <Icon
                  icon="material-symbols:add-circle-outline"
                  height={30}
                  width={30}
                />
              </button>
              <button onClick={productDetails}>
                <Icon icon="clarity:details-solid" height={30} width={30} />
              </button>
            </div>
          </>
        ))}
    </>
  );
};

export default ProductList;
