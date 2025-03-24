import { usePexels } from "../services/usePexels";
import { useCartStore } from "../store/useCartStore";
import { useProducts } from "../services/useProducts";

export const Products = () => {
  const { data } = usePexels("fpv drone");
  const { data: productResponse } = useProducts(1, 70);

  const addItem = useCartStore((state) => state.addItem);

  return (
    <div className="bg-base-100 min-h-screen pt-24">
      <div className="container mx-auto w-fit">
        <h1 className="mb-4 font-mono text-4xl font-bold">Our Products</h1>
        <div className="columns-3 gap-3 first:pt-8">
          {productResponse &&
            data &&
            productResponse.data.map((product, index) => (
              <div
                key={product.id}
                className="card bg-base-100 mb-3 w-96 shadow-sm"
              >
                <figure>
                  <img src={data.photos[index].src.large2x} alt="product" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{product.name}</h2>
                  <p>{product.description}</p>
                  <div className="card-actions mt-3 items-center justify-between">
                    <span className="text-xl font-bold">$ {product.price}</span>
                    <button
                      className="btn btn-primary"
                      onClick={() => addItem(product)}
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
