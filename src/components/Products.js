import Product from "./Product";
import formatAmount from "../utils/formatAmount";

const Products = ({ products }) => {
  return (
    <ul className="product-grid">
      <Product
        image={products[0].images[0]}
        name={products[0].name}
        description={products[0].description}
        price={formatAmount(products[0].prices[0].unit_amount)}
      />
      <Product
        image={products[1].images[0]}
        name={products[1].name}
        description={products[1].description}
        price={formatAmount(products[1].prices[0].unit_amount)}
      />
      <Product
        image={products[2].images[0]}
        name={products[2].name}
        description={products[2].description}
        price={formatAmount(products[2].prices[0].unit_amount)}
      />
      <Product
        image={products[3].images[0]}
        name={products[3].name}
        description={products[3].description}
        price={formatAmount(products[3].prices[0].unit_amount)}
      />
      <Product
        image={products[4].images[0]}
        name={products[4].name}
        description={products[4].description}
        price={formatAmount(products[4].prices[0].unit_amount)}
      />
      <Product
        image={products[5].images[0]}
        name={products[5].name}
        description={products[5].description}
        price={formatAmount(products[5].prices[0].unit_amount)}
      />
      <Product
        image={products[6].images[0]}
        name={products[6].name}
        description={products[6].description}
        price={formatAmount(products[6].prices[0].unit_amount)}
      />
      <Product
        image={products[7].images[0]}
        name={products[7].name}
        description={products[7].description}
        price={formatAmount(products[7].prices[0].unit_amount)}
      />
      <Product
        image={products[8].images[0]}
        name={products[8].name}
        description={products[8].description}
        price={formatAmount(products[8].prices[0].unit_amount)}
      />
      <Product
        image={products[9].images[0]}
        name={products[9].name}
        description={products[9].description}
        price={formatAmount(products[9].prices[0].unit_amount)}
      />
      <Product
        image={products[10].images[0]}
        name={products[10].name}
        description={products[10].description}
        price={formatAmount(products[10].prices[0].unit_amount)}
      />
      <Product
        image={products[11].images[0]}
        name={products[11].name}
        description={products[11].description}
        price={formatAmount(products[11].prices[0].unit_amount)}
      />
    </ul>
  );
};

export default Products;
