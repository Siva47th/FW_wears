"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  CreditCard,
  Landmark,
  Smartphone,
  Banknote,
  Lock,
  ShieldCheck,
  Truck,
  Package,
  MapPin,
  User,
  Mail,
  Phone,
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPriceINR } from "@/data/products";

const STEPS = ["Shipping", "Review", "Payment", "Confirmed"] as const;
type Step = (typeof STEPS)[number];

interface ShippingData {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pinCode: string;
}

const PAYMENT_METHODS = [
  { id: "upi", label: "UPI", icon: Smartphone, desc: "Google Pay, PhonePe, Paytm" },
  { id: "card", label: "Credit / Debit Card", icon: CreditCard, desc: "Visa, Mastercard, RuPay" },
  { id: "netbanking", label: "Net Banking", icon: Landmark, desc: "All major Indian banks" },
  { id: "cod", label: "Cash on Delivery", icon: Banknote, desc: "Pay when delivered" },
] as const;

const INDIAN_STATES = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
  "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
  "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
  "Delhi", "Chandigarh", "Puducherry",
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
  }),
};

export default function CheckoutView() {
  const { cart, totalItems, subtotal, discount, promoCode, total, clearCart } =
    useCart();

  const [currentStep, setCurrentStep] = useState<Step>("Shipping");
  const [direction, setDirection] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("upi");
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");

  const [shipping, setShipping] = useState<ShippingData>({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pinCode: "",
  });

  const [errors, setErrors] = useState<Partial<ShippingData>>({});

  const stepIndex = STEPS.indexOf(currentStep);

  const validateShipping = (): boolean => {
    const newErrors: Partial<ShippingData> = {};

    if (!shipping.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!shipping.email.trim() || !/\S+@\S+\.\S+/.test(shipping.email))
      newErrors.email = "Valid email is required";
    if (!shipping.phone.trim() || !/^[6-9]\d{9}$/.test(shipping.phone))
      newErrors.phone = "Valid 10-digit Indian phone number";
    if (!shipping.address.trim()) newErrors.address = "Address is required";
    if (!shipping.city.trim()) newErrors.city = "City is required";
    if (!shipping.state) newErrors.state = "Select a state";
    if (!shipping.pinCode.trim() || !/^\d{6}$/.test(shipping.pinCode))
      newErrors.pinCode = "Valid 6-digit PIN code";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const goToStep = (step: Step) => {
    const newIndex = STEPS.indexOf(step);
    setDirection(newIndex > stepIndex ? 1 : -1);
    setCurrentStep(step);
  };

  const handleNext = () => {
    if (currentStep === "Shipping") {
      if (!validateShipping()) return;
      goToStep("Review");
    } else if (currentStep === "Review") {
      goToStep("Payment");
    }
  };

  const handleBack = () => {
    if (currentStep === "Review") goToStep("Shipping");
    else if (currentStep === "Payment") goToStep("Review");
  };

  const handlePlaceOrder = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setOrderNumber(`FW-2026-${(Math.random() * 9000 + 1000).toFixed(0)}`);
      clearCart();
      setIsProcessing(false);
      goToStep("Confirmed");
    }, 2000);
  };

  const updateField = (field: keyof ShippingData, value: string) => {
    setShipping((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  // Redirect to cart if empty (except on confirmation)
  if (cart.length === 0 && currentStep !== "Confirmed") {
    return (
      <div className="min-h-screen bg-brand-white pt-16 sm:pt-20">
        <section className="bg-brand-black py-10 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-brand-gold tracking-[0.3em] uppercase text-[10px] sm:text-xs mb-2 font-semibold">
              FW Wears • Checkout
            </p>
            <h1 className="font-serif text-3xl sm:text-5xl text-white">
              Checkout
            </h1>
          </div>
        </section>
        <div className="max-w-2xl mx-auto px-4 py-20 text-center">
          <Package size={48} className="text-brand-gold mx-auto mb-4" />
          <h2 className="font-serif text-2xl text-brand-black mb-3">
            Your cart is empty
          </h2>
          <p className="text-brand-gray-500 text-sm mb-6">
            Add some items to your bag before checking out.
          </p>
          <Link href="/#products" className="btn-primary">
            Browse Collection
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-white pt-16 sm:pt-20">
      {/* Header */}
      <section className="bg-brand-black py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-gold tracking-[0.3em] uppercase text-[10px] sm:text-xs mb-2 font-semibold">
            FW Wears • Secure Checkout
          </p>
          <h1 className="font-serif text-3xl sm:text-5xl text-white">
            Checkout
          </h1>
        </div>
      </section>

      {/* Progress Stepper */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="flex items-center justify-between relative">
          {/* Connecting line */}
          <div className="absolute top-4 left-0 right-0 h-[2px] bg-brand-gray-200" />
          <div
            className="absolute top-4 left-0 h-[2px] bg-brand-gold transition-all duration-500"
            style={{
              width: `${(Math.min(stepIndex, STEPS.length - 1) / (STEPS.length - 1)) * 100}%`,
            }}
          />

          {STEPS.map((step, i) => {
            const isActive = i === stepIndex;
            const isComplete = i < stepIndex;
            return (
              <div key={step} className="relative flex flex-col items-center z-10">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                    isComplete
                      ? "bg-brand-gold text-brand-black"
                      : isActive
                      ? "bg-brand-black text-white ring-4 ring-brand-gold/30"
                      : "bg-brand-gray-200 text-brand-gray-400"
                  }`}
                >
                  {isComplete ? (
                    <CheckCircle2 size={16} />
                  ) : (
                    i + 1
                  )}
                </div>
                <span
                  className={`mt-2 text-[10px] sm:text-xs tracking-wider uppercase font-medium ${
                    isActive
                      ? "text-brand-black"
                      : isComplete
                      ? "text-brand-gold"
                      : "text-brand-gray-400"
                  }`}
                >
                  {step}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Step Content */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
        <AnimatePresence mode="wait" custom={direction}>
          {/* ── STEP 1: Shipping ── */}
          {currentStep === "Shipping" && (
            <motion.div
              key="shipping"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                {/* Form */}
                <div className="lg:col-span-7">
                  <h2 className="font-serif text-xl sm:text-2xl text-brand-black mb-6 flex items-center gap-2">
                    <MapPin size={20} className="text-brand-gold" />
                    Shipping Details
                  </h2>

                  <div className="space-y-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-[11px] font-semibold text-brand-black uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
                        <User size={13} className="text-brand-gold" />
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={shipping.fullName}
                        onChange={(e) => updateField("fullName", e.target.value)}
                        placeholder="e.g. Arjun Verma"
                        className={`w-full px-4 py-3 bg-white border text-sm text-brand-black placeholder:text-brand-gray-400 focus:outline-none focus:border-brand-gold transition-colors ${
                          errors.fullName ? "border-red-400" : "border-brand-gray-200"
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-red-500 text-[11px] mt-1">{errors.fullName}</p>
                      )}
                    </div>

                    {/* Email & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-semibold text-brand-black uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
                          <Mail size={13} className="text-brand-gold" />
                          Email
                        </label>
                        <input
                          type="email"
                          value={shipping.email}
                          onChange={(e) => updateField("email", e.target.value)}
                          placeholder="you@email.com"
                          className={`w-full px-4 py-3 bg-white border text-sm text-brand-black placeholder:text-brand-gray-400 focus:outline-none focus:border-brand-gold transition-colors ${
                            errors.email ? "border-red-400" : "border-brand-gray-200"
                          }`}
                        />
                        {errors.email && (
                          <p className="text-red-500 text-[11px] mt-1">{errors.email}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-[11px] font-semibold text-brand-black uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
                          <Phone size={13} className="text-brand-gold" />
                          Phone
                        </label>
                        <input
                          type="tel"
                          value={shipping.phone}
                          onChange={(e) => updateField("phone", e.target.value)}
                          placeholder="9876543210"
                          className={`w-full px-4 py-3 bg-white border text-sm text-brand-black placeholder:text-brand-gray-400 focus:outline-none focus:border-brand-gold transition-colors ${
                            errors.phone ? "border-red-400" : "border-brand-gray-200"
                          }`}
                        />
                        {errors.phone && (
                          <p className="text-red-500 text-[11px] mt-1">{errors.phone}</p>
                        )}
                      </div>
                    </div>

                    {/* Address */}
                    <div>
                      <label className="block text-[11px] font-semibold text-brand-black uppercase tracking-widest mb-1.5">
                        Street Address
                      </label>
                      <textarea
                        value={shipping.address}
                        onChange={(e) => updateField("address", e.target.value)}
                        placeholder="House/Flat No., Building, Street, Area"
                        rows={2}
                        className={`w-full px-4 py-3 bg-white border text-sm text-brand-black placeholder:text-brand-gray-400 focus:outline-none focus:border-brand-gold transition-colors resize-none ${
                          errors.address ? "border-red-400" : "border-brand-gray-200"
                        }`}
                      />
                      {errors.address && (
                        <p className="text-red-500 text-[11px] mt-1">{errors.address}</p>
                      )}
                    </div>

                    {/* City, State, PIN */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-[11px] font-semibold text-brand-black uppercase tracking-widest mb-1.5">
                          City
                        </label>
                        <input
                          type="text"
                          value={shipping.city}
                          onChange={(e) => updateField("city", e.target.value)}
                          placeholder="Mumbai"
                          className={`w-full px-4 py-3 bg-white border text-sm text-brand-black placeholder:text-brand-gray-400 focus:outline-none focus:border-brand-gold transition-colors ${
                            errors.city ? "border-red-400" : "border-brand-gray-200"
                          }`}
                        />
                        {errors.city && (
                          <p className="text-red-500 text-[11px] mt-1">{errors.city}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-[11px] font-semibold text-brand-black uppercase tracking-widest mb-1.5">
                          State
                        </label>
                        <select
                          value={shipping.state}
                          onChange={(e) => updateField("state", e.target.value)}
                          className={`w-full px-4 py-3 bg-white border text-sm text-brand-black focus:outline-none focus:border-brand-gold transition-colors ${
                            errors.state ? "border-red-400" : "border-brand-gray-200"
                          } ${!shipping.state ? "text-brand-gray-400" : ""}`}
                        >
                          <option value="">Select</option>
                          {INDIAN_STATES.map((s) => (
                            <option key={s} value={s}>
                              {s}
                            </option>
                          ))}
                        </select>
                        {errors.state && (
                          <p className="text-red-500 text-[11px] mt-1">{errors.state}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-[11px] font-semibold text-brand-black uppercase tracking-widest mb-1.5">
                          PIN Code
                        </label>
                        <input
                          type="text"
                          value={shipping.pinCode}
                          onChange={(e) => updateField("pinCode", e.target.value)}
                          placeholder="400001"
                          maxLength={6}
                          className={`w-full px-4 py-3 bg-white border text-sm text-brand-black placeholder:text-brand-gray-400 focus:outline-none focus:border-brand-gold transition-colors ${
                            errors.pinCode ? "border-red-400" : "border-brand-gray-200"
                          }`}
                        />
                        {errors.pinCode && (
                          <p className="text-red-500 text-[11px] mt-1">{errors.pinCode}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mini Order Summary Sidebar */}
                <div className="lg:col-span-5">
                  <div className="bg-brand-cream/60 border border-brand-gray-200 p-5 sm:p-6 sticky top-24">
                    <h3 className="font-serif text-lg text-brand-black mb-4 pb-3 border-b border-brand-gray-200">
                      Order Summary ({totalItems} {totalItems === 1 ? "item" : "items"})
                    </h3>
                    <div className="space-y-3 max-h-[200px] overflow-y-auto mb-4">
                      {cart.map((item) => (
                        <div
                          key={`${item.id}-${item.size}-${item.color}`}
                          className="flex items-center gap-3"
                        >
                          <div className="relative w-12 h-16 bg-brand-gray-100 flex-shrink-0">
                            <Image
                              src={item.product.image}
                              alt={item.product.name}
                              fill
                              className="object-cover"
                              sizes="48px"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-medium text-brand-black line-clamp-1">
                              {item.product.name}
                            </p>
                            <p className="text-[10px] text-brand-gray-500">
                              {item.size} • {item.color} • Qty: {item.quantity}
                            </p>
                          </div>
                          <p className="text-xs font-semibold text-brand-black">
                            {formatPriceINR(item.product.price * item.quantity)}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="border-t border-brand-gray-200 pt-3 space-y-2 text-xs">
                      <div className="flex justify-between text-brand-gray-600">
                        <span>Subtotal</span>
                        <span className="text-brand-black font-medium">
                          {formatPriceINR(subtotal)}
                        </span>
                      </div>
                      {discount > 0 && (
                        <div className="flex justify-between text-green-600">
                          <span>Discount ({promoCode})</span>
                          <span>-{formatPriceINR(discount)}</span>
                        </div>
                      )}
                      <div className="flex justify-between text-brand-gray-600">
                        <span>Shipping</span>
                        <span className="text-brand-gold font-semibold">Free</span>
                      </div>
                      <div className="border-t border-brand-gray-200 pt-2 flex justify-between">
                        <span className="font-semibold text-brand-black">Total</span>
                        <span className="font-serif text-lg font-bold text-brand-black">
                          {formatPriceINR(total)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-brand-gray-200">
                <Link
                  href="/cart"
                  className="inline-flex items-center gap-2 text-xs text-brand-gray-600 hover:text-brand-gold transition-colors uppercase tracking-wider font-medium"
                >
                  <ArrowLeft size={15} />
                  Back to Cart
                </Link>
                <button onClick={handleNext} className="btn-primary gap-2">
                  <span>Continue to Review</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </motion.div>
          )}

          {/* ── STEP 2: Review ── */}
          {currentStep === "Review" && (
            <motion.div
              key="review"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <h2 className="font-serif text-xl sm:text-2xl text-brand-black mb-6 flex items-center gap-2">
                <Package size={20} className="text-brand-gold" />
                Review Your Order
              </h2>

              {/* Shipping Details Review */}
              <div className="bg-brand-cream/60 border border-brand-gray-200 p-5 mb-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-brand-gray-500">
                    Shipping To
                  </h3>
                  <button
                    onClick={() => goToStep("Shipping")}
                    className="text-[11px] text-brand-gold hover:underline uppercase tracking-wider font-medium"
                  >
                    Edit
                  </button>
                </div>
                <p className="text-sm font-medium text-brand-black">{shipping.fullName}</p>
                <p className="text-xs text-brand-gray-600 mt-1">{shipping.address}</p>
                <p className="text-xs text-brand-gray-600">
                  {shipping.city}, {shipping.state} — {shipping.pinCode}
                </p>
                <p className="text-xs text-brand-gray-600 mt-1">
                  {shipping.email} • {shipping.phone}
                </p>
              </div>

              {/* Items Table */}
              <div className="border border-brand-gray-200 mb-6">
                <div className="bg-brand-gray-100 px-5 py-3 text-[11px] uppercase tracking-widest font-semibold text-brand-gray-500 grid grid-cols-12 gap-2">
                  <span className="col-span-6 sm:col-span-5">Product</span>
                  <span className="col-span-2 hidden sm:block text-center">Size</span>
                  <span className="col-span-2 hidden sm:block text-center">Qty</span>
                  <span className="col-span-6 sm:col-span-3 text-right">Price</span>
                </div>
                {cart.map((item) => (
                  <div
                    key={`${item.id}-${item.size}-${item.color}`}
                    className="px-5 py-4 grid grid-cols-12 gap-2 items-center border-t border-brand-gray-100"
                  >
                    <div className="col-span-6 sm:col-span-5 flex items-center gap-3">
                      <div className="relative w-12 h-16 bg-brand-gray-100 flex-shrink-0">
                        <Image
                          src={item.product.image}
                          alt={item.product.name}
                          fill
                          className="object-cover"
                          sizes="48px"
                        />
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm font-medium text-brand-black line-clamp-1">
                          {item.product.name}
                        </p>
                        <p className="text-[10px] text-brand-gray-500 sm:hidden">
                          {item.size} • Qty: {item.quantity}
                        </p>
                      </div>
                    </div>
                    <span className="col-span-2 hidden sm:block text-center text-xs text-brand-gray-600">
                      {item.size}
                    </span>
                    <span className="col-span-2 hidden sm:block text-center text-xs text-brand-gray-600">
                      {item.quantity}
                    </span>
                    <span className="col-span-6 sm:col-span-3 text-right font-serif text-sm font-semibold text-brand-black">
                      {formatPriceINR(item.product.price * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div className="bg-brand-cream/60 border border-brand-gray-200 p-5">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-brand-gray-600">
                    <span>Subtotal ({totalItems} items)</span>
                    <span className="text-brand-black font-medium">{formatPriceINR(subtotal)}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-green-600 font-medium">
                      <span>Promo Discount ({promoCode})</span>
                      <span>-{formatPriceINR(discount)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-brand-gray-600">
                    <span className="flex items-center gap-1">
                      <Truck size={14} className="text-brand-gold" />
                      Express Shipping (India)
                    </span>
                    <span className="text-brand-gold font-semibold uppercase text-xs">Free</span>
                  </div>
                  <div className="flex justify-between text-brand-gray-600">
                    <span>GST / Taxes</span>
                    <span className="text-brand-gray-400 text-xs">Included</span>
                  </div>
                  <div className="border-t border-brand-gray-200 pt-3 flex justify-between items-baseline">
                    <span className="font-semibold text-brand-black">Estimated Total</span>
                    <span className="font-serif text-2xl font-bold text-brand-black">
                      {formatPriceINR(total)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-brand-gray-200">
                <button
                  onClick={handleBack}
                  className="inline-flex items-center gap-2 text-xs text-brand-gray-600 hover:text-brand-gold transition-colors uppercase tracking-wider font-medium"
                >
                  <ArrowLeft size={15} />
                  Edit Shipping
                </button>
                <button onClick={handleNext} className="btn-primary gap-2">
                  <span>Choose Payment</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </motion.div>
          )}

          {/* ── STEP 3: Payment ── */}
          {currentStep === "Payment" && (
            <motion.div
              key="payment"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <h2 className="font-serif text-xl sm:text-2xl text-brand-black mb-6 flex items-center gap-2">
                <CreditCard size={20} className="text-brand-gold" />
                Select Payment Method
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {PAYMENT_METHODS.map((method) => {
                  const Icon = method.icon;
                  const isSelected = paymentMethod === method.id;
                  return (
                    <button
                      key={method.id}
                      onClick={() => setPaymentMethod(method.id)}
                      className={`p-4 sm:p-5 border text-left transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md cursor-pointer ${
                        isSelected
                          ? "border-brand-gold bg-brand-gold/10 shadow-sm"
                          : "border-brand-gray-200 bg-white hover:border-brand-gold/50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 flex items-center justify-center rounded-full ${
                            isSelected
                              ? "bg-brand-gold text-brand-black"
                              : "bg-brand-gray-100 text-brand-gray-500"
                          }`}
                        >
                          <Icon size={18} />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-brand-black">
                            {method.label}
                          </p>
                          <p className="text-[11px] text-brand-gray-500">{method.desc}</p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Order Total */}
              <div className="bg-brand-cream/60 border border-brand-gray-200 p-5 mb-6 flex items-baseline justify-between">
                <div>
                  <p className="text-sm font-semibold text-brand-black">You&apos;ll Pay</p>
                  <p className="text-[10px] text-brand-gray-400">All inclusive of GST</p>
                </div>
                <span className="font-serif text-3xl font-bold text-brand-black">
                  {formatPriceINR(total)}
                </span>
              </div>

              {/* Place Order */}
              <button
                onClick={handlePlaceOrder}
                disabled={isProcessing}
                className="btn-primary w-full gap-2 min-h-[52px] text-sm shadow-lg hover:shadow-xl hover:shadow-brand-gold/20 hover:-translate-y-0.5 transition-all group mb-4"
              >
                <Lock size={16} className="group-hover:scale-110 transition-transform" />
                <span>
                  {isProcessing ? "Processing Secure Payment..." : "Place Order"}
                </span>
              </button>

              {/* Trust */}
              <div className="text-center space-y-2">
                <div className="flex items-center justify-center gap-1.5 text-[11px] text-brand-gray-600">
                  <ShieldCheck size={14} className="text-brand-gold" />
                  <span>256-bit Encrypted • 100% Secure Transaction</span>
                </div>
                <p className="text-[10px] text-brand-gray-400">
                  30-Day Hassle-Free Returns across India
                </p>
              </div>

              {/* Back */}
              <div className="mt-6 pt-6 border-t border-brand-gray-200">
                <button
                  onClick={handleBack}
                  className="inline-flex items-center gap-2 text-xs text-brand-gray-600 hover:text-brand-gold transition-colors uppercase tracking-wider font-medium"
                >
                  <ArrowLeft size={15} />
                  Back to Review
                </button>
              </div>
            </motion.div>
          )}

          {/* ── STEP 4: Confirmation ── */}
          {currentStep === "Confirmed" && (
            <motion.div
              key="confirmed"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="max-w-lg mx-auto text-center py-8 sm:py-16"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
                className="w-20 h-20 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <CheckCircle2 size={40} className="text-brand-gold" />
              </motion.div>

              <p className="text-brand-gold text-[10px] tracking-[0.3em] uppercase font-semibold mb-1">
                Order Confirmed
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-brand-black mb-3">
                Thank You!
              </h2>
              <p className="text-brand-gray-600 text-sm mb-6 leading-relaxed">
                Your order{" "}
                <span className="font-semibold text-brand-black">#{orderNumber}</span>{" "}
                has been placed successfully. We&apos;ve sent a confirmation email with tracking
                details.
              </p>

              <div className="bg-brand-cream/60 border border-brand-gold/30 p-5 mb-8 text-left text-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-brand-gray-600">Order Number</span>
                  <span className="font-semibold text-brand-black">{orderNumber}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-brand-gray-600">Shipping</span>
                  <span className="text-brand-black">Express Courier (2–3 Days)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-brand-gray-600">Payment</span>
                  <span className="text-brand-black capitalize">
                    {PAYMENT_METHODS.find((m) => m.id === paymentMethod)?.label}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-brand-gray-600">Status</span>
                  <span className="text-brand-gold font-semibold">Packaging at Atelier</span>
                </div>
              </div>

              <Link href="/" className="btn-primary w-full">
                Continue Shopping
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
}
