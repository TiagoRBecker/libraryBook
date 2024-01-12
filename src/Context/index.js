"use client";
import {
  createContext,
  useState,
  SetStateAction,
  Dispatch,
  useEffect,
  useContext,
} from "react";
export const CartContext = createContext({});
import { toast } from "react-toastify";

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [favorite, setFave] = useState([]);
 useEffect(()=>{
  const getFavorite = JSON?.parse(localStorage.getItem("cart"))
  if(getFavorite){
    setFave(getFavorite)
  }
 },[])
  
  const addToCart = (product) => {
    setCart((prev) => {
      const isProductAlreadyInCart = prev.some(
        (item) => item.id === product.id
      );

      if (!isProductAlreadyInCart) {
        toast.success("Produto adicionado ao carrinho com sucesso!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        const newCart = [...prev, product];
        localStorage.setItem("cart", JSON.stringify(newCart));
        return newCart;
      } else {
        toast.warn("O item já foi adicionado ao carrinho!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        return prev;
      }
    });
  };
  const removeToCart = (product) => {
    setCart((prev) => {
      const pos = prev.findIndex((item) => item.id === product.id);
      const newCart = prev.filter((value, index) => index !== pos);

      // Atualize o localStorage após a remoção
      localStorage.setItem("cart", JSON.stringify(newCart));

      return newCart;
    });
  };
  const clearCart = () => {
    const newCart = [];

    // Atualize o localStorage para refletir o carrinho vazio
    localStorage.setItem("cart", JSON.stringify(newCart));
    setCart(newCart);
    return newCart;
  };
  const handleAddFav = (book) => {
    
    setFave((prev) => {
      const isProductAlreadyInCart = prev.some(
        (item) => item.id === book.id
      );

      if (!isProductAlreadyInCart) {
        toast.success("Produto adicionado ao favoritos com sucesso!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        const favorites = [...prev, book];
        localStorage.setItem("favorite", JSON.stringify(favorites));
        return favorites;
      } else {
        toast.warn("O item já foi adicionado ao favoritos!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        return prev;
      }
    });
  };
  const clearFavorite = () => {
    const favorite = [];

    // Atualize o localStorage para refletir o carrinho vazio
    localStorage.setItem("favorite", JSON.stringify(favorite));
    setFave(favorite)
      
    return favorite;
   
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        favorite,
        setCart,
        removeToCart,
        addToCart,
        clearCart,
        handleAddFav,
        clearFavorite
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

