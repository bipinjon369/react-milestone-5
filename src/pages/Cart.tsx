import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState, AppDispatch } from "../store";
import { Minus, Plus, Trash2, Tag, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

import { updateQuantity, removeItem } from "../store/slices/cartSlice";

interface CartItemProps {
  item: any;
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemove: (id: number) => void;
}

const CartItem = ({ item, onUpdateQuantity, onRemove }: CartItemProps) => (
  <div className="flex items-center space-x-4 p-6 border border-gray-200 rounded-lg">
    <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="flex-1 space-y-2">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-semibold text-lg">{item.name}</h3>
          {["size", "color"].map(
            (attr) =>
              item[attr] && (
                <p key={attr} className="text-sm text-gray-600">
                  {attr.charAt(0).toUpperCase() + attr.slice(1)}: {item[attr]}
                </p>
              )
          )}
        </div>
        <button
          onClick={() => onRemove(item.id)}
          className="text-red-500 hover:text-red-700 p-1"
        >
          <Trash2 className="w-5 h-5" />
        </button>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-xl font-bold">${item.price}</span>
        <div className="flex items-center bg-gray-100 rounded-full">
          {[
            { icon: Minus, action: -1 },
            { icon: Plus, action: 1 },
          ]
            .map(({ icon: Icon, action }, idx) => (
              <button
                key={idx}
                onClick={() =>
                  onUpdateQuantity(item.id, item.quantity + action)
                }
                className="p-2 hover:bg-gray-200 rounded-full"
              >
                <Icon className="w-4 h-4" />
              </button>
            ))
            .reduce(
              (acc, btn, idx) => [
                ...acc,
                ...(idx === 1
                  ? [
                      <span key="qty" className="px-4 py-2 font-medium">
                        {item.quantity}
                      </span>,
                    ]
                  : []),
                btn,
              ],
              []
            )}
        </div>
      </div>
    </div>
  </div>
);

const OrderSummaryRow = ({
  label,
  value,
  className = "",
}: {
  label: string;
  value: string;
  className?: string;
}) => (
  <div className={`flex justify-between ${className}`}>
    <span className={className.includes("font-bold") ? "" : "text-gray-600"}>
      {label}
    </span>
    <span
      className={
        className.includes("font-bold") ? "font-bold" : "font-semibold"
      }
    >
      {value}
    </span>
  </div>
);

export default function Cart() {
  const [promoCode, setPromoCode] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const cartItems = useSelector((state: RootState) => state.cart.data);

  const handleUpdateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    dispatch(updateQuantity({ id, quantity: newQuantity }));
  };

  const handleRemoveItem = (id: number) => {
    dispatch(removeItem(id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discount = subtotal * 0.2;
  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;

  const summaryItems = [
    { label: "Subtotal", value: `$${subtotal}` },
    {
      label: "Discount (-20%)",
      value: `-$${discount.toFixed(0)}`,
      className: "text-red-600",
    },
    { label: "Delivery Fee", value: `$${deliveryFee}` },
    {
      label: "Total",
      value: `$${total.toFixed(0)}`,
      className: "text-lg font-bold",
    },
  ];

  return (
    <div>

      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          {["Home", "/", "Cart"].map((item, idx) => (
            <span key={idx} className={idx === 2 ? "text-black" : ""}>
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-black mb-8">YOUR CART</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onUpdateQuantity={handleUpdateQuantity}
                onRemove={handleRemoveItem}
              />
            ))}
          </div>

          <div className="space-y-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-6">Order Summary</h2>

              <div className="space-y-4">
                {summaryItems.slice(0, -1).map((item, idx) => (
                  <OrderSummaryRow key={idx} {...item} />
                ))}
                <hr className="my-4" />
                <OrderSummaryRow {...summaryItems[summaryItems.length - 1]} />
              </div>

              <div className="mt-6">
                <div className="flex space-x-2">
                  <div className="flex-1 relative">
                    <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      type="text"
                      placeholder="Add promo code"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="pl-10 rounded-full border-gray-300"
                    />
                  </div>
                  <Button className="bg-black text-white px-6 rounded-full hover:bg-gray-800">
                    Apply
                  </Button>
                </div>
              </div>

              <Button className="w-full bg-black text-white py-4 rounded-full hover:bg-gray-800 mt-6 flex items-center justify-center space-x-2">
                <span>Go to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
