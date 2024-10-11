import { FC, useEffect, useLayoutEffect } from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Icategory } from "../constant/interface";
import { MEALS, CATEGORIES } from "../data/dummy-data";

import MealsList from "../components/MealsList/MealsList";
// import cross from '../assets/constant/cross.png'


const MealsOverviewScreens:FC<Icategory>=({route, navigation})=> {
   const catId= route.params.categoryId
   
   const displayedMeals= MEALS.filter((mealItem)=>{
    return mealItem.categoryIds.indexOf(catId)>=0 

   })

   useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((category) => category.id === catId)?.title;
    console.log(`Setting title to: ${categoryTitle}`)
    navigation.setOptions({
        title: categoryTitle
    });
}, [catId, navigation]);

   return (
    <MealsList items={displayedMeals}/>
   )
}
export default MealsOverviewScreens;



// headerLeft: () =>
//     <>
//     <TouchableOpacity onPress={()=> navigation.goBack()}>
//         <Image source={cross} style={{height:20 , width:15}}/>
//     </TouchableOpacity>
//    <Text>{categoryTitle}</Text>
//    </>