import { Search, ShoppingCart, User, ChevronDown, X } from "lucide-react"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "../store"
import { hideSignUpBanner } from "../store/slices/uiSlice"

export const Header = () => {
  const dispatch = useDispatch()
  const showSignUpOffer = useSelector((state: RootState) => state.ui.showSignUpBanner)
  const handleCloseSignUpOffer = () => dispatch(hideSignUpBanner())
  return (
    <>
      {/* Promotional Banner */}
      {
        showSignUpOffer && 
        <div className="bg-black text-white py-3 px-4 text-center text-sm">
        <div className="flex items-center justify-center relative max-w-7xl mx-auto">
          <span>
            Sign up and get 20% off to your first order.{" "}
            <span className="underline font-medium cursor-pointer">Sign Up Now</span>
          </span>
          <button className="absolute right-0 p-1">
            <X className="w-4 h-4" onClick={handleCloseSignUpOffer} />
          </button>
        </div>
      </div>}

      {/* Header */}
      <header className="sticky top-0 border-b border-gray-200 py-6 px-[100px] bg-white z-50">
        <div className="flex items-center justify-between">
          <Link to="/" className="font-alfa text-navbar-h1 font-bold">FAKESTORE</Link>

          <nav className="hidden md:flex items-center gap-6">
            <div className="flex items-center space-x-1 cursor-pointer">
              <span className="text-navbar-menu-text">Shop</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <span className="text-navbar-menu-text cursor-pointer">On Sale</span>
            <span className="text-navbar-menu-text cursor-pointer">New Arrivals</span>
            <span className="text-navbar-menu-text cursor-pointer">Brands</span>
          </nav>

          <div className="flex items-center">
            <div className="relative hidden md:block">
              <img className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#00000066] w-6 h-6" src='/search.svg' />
              <input
                type="text"
                placeholder="Search for products..."
                className="pl-10 pr-4 py-3 md:w-[505px] bg-[#F0F0F0] border-0 rounded-[62px] outline-none mr-10"
              />
            </div>
            <Link to="/cart" className="pr-[14px]">
              <img className="w-6 h-6" src='/cart.svg' />
            </Link>
            <button>
              <img className="w-6 h-6" src='/profile.svg' />
            </button>
          </div>
        </div>
      </header>
    </>
  )
}