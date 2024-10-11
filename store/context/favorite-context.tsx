import { createContext, FC, useState } from "react";
import { Icategory } from "../../constant/interface";
import { View } from "react-native";

export const FavoriteContext=createContext({
    ids: [],
    addFavorite: (id: string) => {},
    removeFavorite: (id: string) => {},

})

const FavoriteContextProvider: FC<Icategory>=({children})=> {

    const [favoriteMealIds, setFavoriteMealIds] = useState<string[]>([]);

    function addFavorite(id : string) {
        setFavoriteMealIds((currentFavIds) => [...currentFavIds , id])
    }

    function removeFavorite(id : string) {
        setFavoriteMealIds((currentFavIds)=>currentFavIds.filter((mealId)=> mealId!==id))
    }
    const value: any={
        ids:favoriteMealIds,
        addFavorite:addFavorite,
        removeFavorite:removeFavorite,
    }

    return(
       <FavoriteContext.Provider value={value}>{children}</FavoriteContext.Provider>
    )
}
export default FavoriteContextProvider