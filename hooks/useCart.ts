import {create} from "zustand"
import {persist, createJSONStorage} from "zustand/middleware"
import { Product } from "@/types"
import toast from "react-hot-toast";

interface CartStore {
  items: Product[],
  addItem:(data:Product) => void;
  removeItem: (_id:string) => void;
  removeAll: () => void;
}


const useCart = create(
    persist<CartStore>((set, get) => ({
        items:[],
        addItem: (data:Product) => {
            const currentItem = get().items;
            const existingItem = currentItem.find((item) => item._id === data._id)
            if(existingItem){
                return toast("Item already in cart");
            }

            set({items: [...get().items, data]});
            toast.success("Item added to cart");
        },
        removeItem:(_id:string) => {
            set({items : [...get().items.filter((item) => item._id !== _id)]})
            toast.success("Item removed from the cart");
        },
        removeAll:() =>  {
            set({items:[]});
        },
    }), {
        name: "cart-storage",
        storage: createJSONStorage(() => localStorage)
    })
)


export default useCart;