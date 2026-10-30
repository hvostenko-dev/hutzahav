import React, { createContext, useContext, useState, useEffect } from 'react';
import { PortfolioItem } from '../data/portfolioData';

export interface CartItem {
  product: PortfolioItem;
  size: string;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  wishlist: string[];
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isWishlistOpen: boolean;
  setIsWishlistOpen: (open: boolean) => void;
  isSizeGuideOpen: boolean;
  setIsSizeGuideOpen: (open: boolean) => void;
  addToCart: (product: PortfolioItem, size?: string) => void;
  removeFromCart: (productId: string, size: string) => void;
  updateQuantity: (productId: string, size: string, delta: number) => void;
  clearCart: () => void;
  toggleWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  cartCount: number;
  cartTotal: number;
  toast: string | null;
  showToast: (msg: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('hutzahav_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [wishlist, setWishlist] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('hutzahav_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('hutzahav_cart', JSON.stringify(cart));
    } catch {}
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('hutzahav_wishlist', JSON.stringify(wishlist));
    } catch {}
  }, [wishlist]);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => {
      setToast(null);
    }, 3200);
  };

  const addToCart = (product: PortfolioItem, size = 'Индивидуальный пошив') => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id && item.size === size);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id && item.size === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, size, quantity: 1 }];
    });
    showToast(`«${product.nameRu}» добавлено в ваш заказ`);
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string, size: string) => {
    setCart((prev) => prev.filter((item) => !(item.product.id === productId && item.size === size)));
  };

  const updateQuantity = (productId: string, size: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId && item.size === size) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const toggleWishlist = (productId: string) => {
    setWishlist((prev) => {
      const exists = prev.includes(productId);
      if (exists) {
        showToast('Удалено из избранного');
        return prev.filter((id) => id !== productId);
      } else {
        showToast('Сохранено в избранное');
        return [...prev, productId];
      }
    });
  };

  const isInWishlist = (productId: string) => wishlist.includes(productId);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const cartTotal = cart.reduce((sum, item) => {
    const rawPrice = item.product.price ? parseFloat(item.product.price.replace(/[^\d.]/g, '')) || 0 : 0;
    return sum + rawPrice * item.quantity;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        wishlist,
        isCartOpen,
        setIsCartOpen,
        isWishlistOpen,
        setIsWishlistOpen,
        isSizeGuideOpen,
        setIsSizeGuideOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        toggleWishlist,
        isInWishlist,
        cartCount,
        cartTotal,
        toast,
        showToast,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
