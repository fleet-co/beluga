import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import productsList from "../../productData.json";


interface ProductBlockProps {
  productId: number
}

interface ProductBlock {
  name: string,
  description: string,
  img_url: string,
  price: string,
  id: number,
}

const ProductBlock = (props: ProductBlockProps) => {
  const { productId } = props;
  const [product, setProduct] = React.useState<ProductBlock>();

  useEffect(() => {
    const matchingProduct = productsList.find((product) => product.id === productId);

    setProduct(matchingProduct);
  }, []);

  return (
    <Box
      sx={{
        width: "100vw",
        display: "flex",
        height: 300,
        backgroundColor: "primary.dark",
      }}
    >
      <Box
        sx={{
          width: "100vw",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {product?.name}{product?.description}{product?.price}
        <img src={product?.img_url} alt={product?.name} />
      </Box>
    </Box>
  );
};

export default ProductBlock;