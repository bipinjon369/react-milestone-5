import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Star, Minus, Plus, Check } from "lucide-react";
import Button from "../components/Button";
import { Footer } from "../components/Footer";
import useApi from "../services/useApi";

const LoadingSpinner = ({ message }: { message: string }) => (
  <div className="min-h-screen bg-white flex items-center justify-center">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black mx-auto mb-4"></div>
      <p className="text-lg font-medium text-gray-700">{message}</p>
    </div>
  </div>
);

const QuantitySelector = ({
  quantity,
  onUpdate,
}: {
  quantity: number;
  onUpdate: (qty: number) => void;
}) => (
  <div className="flex items-center bg-gray-100 rounded-full">
    {[
      { icon: Minus, action: -1 },
      { icon: Plus, action: 1 },
    ]
      .map(({ icon: Icon, action }, idx) => (
        <button
          key={idx}
          onClick={() => onUpdate(Math.max(1, quantity + action))}
          className="p-3 hover:bg-gray-200 rounded-full"
        >
          <Icon className="w-6 h-6" />
        </button>
      ))
      .reduce(
        (acc, btn, idx) => [
          ...acc,
          ...(idx === 1
            ? [
                <span key="qty" className="px-8 py-3 font-medium">
                  {quantity}
                </span>,
              ]
            : []),
          btn,
        ],
        []
      )}
  </div>
);

const SelectionGroup = ({
  title,
  options,
  selected,
  onSelect,
  type = "button",
}: {
  title: string;
  options: any[];
  selected: string;
  onSelect: (value: string) => void;
  type?: "button" | "color";
}) => (
  <div>
    <h3 className="text-lg font-medium mb-3">{title}</h3>
    <div className="flex space-x-3">
      {options.map((option) => {
        const value = typeof option === "string" ? option : option.name;
        const isSelected = selected === value;

        return type === "color" ? (
          <button
            key={value}
            onClick={() => onSelect(value)}
            className={`w-10 h-10 rounded-full ${option.class} border-2 ${
              isSelected ? "border-black" : "border-gray-300"
            } flex items-center justify-center`}
          >
            {isSelected && <Check className="w-4 h-4 text-white" />}
          </button>
        ) : (
          <button
            key={value}
            onClick={() => onSelect(value)}
            className={`px-6 py-3 rounded-full border ${
              isSelected
                ? "bg-black text-white border-black"
                : "bg-gray-100 text-[#00000099] border-gray-300"
            }`}
          >
            {value}
          </button>
        );
      })}
    </div>
  </div>
);

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getAPI } = useApi();

  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState("Large");
  const [selectedColor, setSelectedColor] = useState("brown");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await getAPI(`products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  const sizes = ["Small", "Medium", "Large", "X-Large"];
  const colors = [
    { name: "brown", class: "bg-amber-800" },
    { name: "green", class: "bg-green-800" },
    { name: "navy", class: "bg-blue-900" },
  ];

  if (loading) return <LoadingSpinner message="Loading..." />;
  if (!product) return <LoadingSpinner message="Product Not Found" />;

  const breadcrumbs = [
    { label: "Home", path: "/" },
    { label: "Shop", path: "#" },
    { label: product.category?.name || "Product", path: "#" },
  ];

  return (
    <div>
      <div className="mx-[85px] px-4 pt-4">
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          {breadcrumbs.map((item, idx) => (
            <>
              {idx === breadcrumbs.length - 1 ? (
                <span key={idx} className="text-black">
                  {item.label}
                </span>
              ) : (
                <button
                  key={idx}
                  onClick={() => navigate(item.path)}
                  className="hover:text-black transition-colors"
                >
                  {item.label}
                </button>
              )}
              {idx < breadcrumbs.length - 1 && (
                <img src="/divider.svg" alt="divider" className="w-4 h-4" />
              )}
            </>
          ))}
        </div>
      </div>

      <div className="mx-[100px] px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-5">
          <div className="flex ml-[100px] gap-[30px]">
            <div>
              {(product.images || [])
                .slice(0, 3)
                .map((img: string, i: number) => (
                  <div
                    key={i}
                    className="w-[152px] h-[208px] overflow-hidden pb-[14px]"
                  >
                    <img
                      src={img}
                      alt={`${product.title} view ${i + 1}`}
                      className="rounded-[20px] w-full h-full object-cover"
                    />
                  </div>
                ))}
            </div>
            <div className="w-[444px] h-[610px] overflow-hidden">
              <img
                src={product.images[0] || product.images?.[0]}
                alt={product.title}
                className="rounded-[20px] w-full h-full object-cover"
              />
            </div>
          </div>

          <div>
            <div>
              <h1 className="text-navbar-h1 font-alfa pb-6">{product.title}</h1>
              <span className="text-product-view-price">${product.price}</span>
            </div>

            <p className="text-[#00000099] leading-relaxed pb-6 border-b border-[#0000001A] mb-6 pt-6">
              {product.description}
            </p>

            <div className="pb-6 border-b border-[#0000001A] mb-6">
              <SelectionGroup
                title="Select Colors"
                options={colors}
                selected={selectedColor}
                onSelect={setSelectedColor}
                type="color"
              />
            </div>
            <div className="pb-6 border-b border-[#0000001A] mb-6">
              <SelectionGroup
                title="Choose Size"
                options={sizes}
                selected={selectedSize}
                onSelect={setSelectedSize}
              />
            </div>
            <div className="flex space-x-5">
              <QuantitySelector quantity={quantity} onUpdate={setQuantity} />
              <Button buttonText="Add to Cart" width="400px" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
