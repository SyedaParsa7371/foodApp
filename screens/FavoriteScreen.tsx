import { StyleSheet, Text, View } from "react-native"
import MealsList from "../components/MealsList/MealsList"
import { useContext } from "react"
//import { FavoriteContext } from "../store/context/favorite-context"
import { MEALS } from "../data/dummy-data"
import { colors } from "../assets/constant/color"
import { useSelector } from "react-redux"


function FavoriteScreen() {

   // const favoriteMealsCtx = useContext(FavoriteContext)

   const favoriteMealIds = useSelector((state:any) =>state.favoriteMeals.ids)
    const favoriteMeals = MEALS.filter(meal => favoriteMealIds.includes(meal.id))
    
    if(favoriteMeals.length===0){
        return  (
            <View style={styles.rootContainer}>
                <Text style={styles.text}>You have no favorite meals.</Text>
            </View>
        )
    }
    return(
        <MealsList items={favoriteMeals} />
    )
}
export default FavoriteScreen

const styles= StyleSheet.create({
    rootContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:'center'
    },
    text:{
        fontSize:24,
        color:colors.primaryWhite,
    }
})