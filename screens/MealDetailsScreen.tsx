import { FC, useContext, useLayoutEffect } from "react"
import { Button, Image, StyleSheet, Text, View } from "react-native"
import { Icategory } from "../constant/interface"
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import { colors } from "../assets/constant/color";
import { ScrollView } from "react-native-gesture-handler";
import SubTitle from "../components/MealDetail/SubTitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/MealDetail/IconButton";
import { FavoriteContext } from "../store/context/favorite-context";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favorites";

const MetalDetailScreen: FC<Icategory> = ({ navigation, route }) => {

    //const favoriteMealCtx = useContext(FavoriteContext);

    const favoriteMealIds = useSelector((state: any) => state.favoriteMeals.ids)

    const dispatch = useDispatch()

    const mealId = route.params.mealId;

    console.log("THIS IS MEAL ID", mealId);


    const selectedMeal = MEALS.find((meal) => meal.id === mealId)
    // console.log("HHFDHFHD", favoriteMealCtx);

    const mealIsFavorite = favoriteMealIds.includes(mealId)

    function changeFavoriteStatusHandler() {
        if (mealIsFavorite) {
            //favoriteMealCtx.removeFavorite(mealId)
            dispatch(removeFavorite({ id: mealId }))
        } else {
            //favoriteMealCtx.addFavorite(mealId)
            dispatch(addFavorite({ id: mealId }))

        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton
                    icon={mealIsFavorite ? 'star' : 'star-outline'}
                    onPress={changeFavoriteStatusHandler} />
            }
        });
    }, [navigation, mealIsFavorite, changeFavoriteStatusHandler]);


    return (
        <ScrollView style={styles.root}>
            <View>
                <Image style={styles.image} source={{ uri: selectedMeal?.imageUrl }} />
                <Text style={styles.title}>{selectedMeal?.title}</Text>
                <MealDetails
                    duration={selectedMeal?.duration}
                    complexity={selectedMeal?.complexity}
                    affordability={selectedMeal?.affordability}
                    textstyle={styles.detailText}
                />
                <View style={styles.listOuterContiner}>
                    <View style={styles.listContainer}>
                        <SubTitle>Ingredient</SubTitle>
                        <List data={selectedMeal?.ingredients} />
                        <SubTitle>Steps</SubTitle>
                        <List data={selectedMeal?.steps} />
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}
export default MetalDetailScreen

const styles = StyleSheet.create({
    root: {
        marginBottom: 32
    },
    image: {
        width: '100%',
        height: 250
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        margin: 10,
        justifyContent: "center",
        textAlign: 'center',
        color: colors.primaryWhite
    },
    detailText: {
        color: colors.primaryWhite
    },
    subTitle: {
        color: colors.primaryWhite,
        fontSize: 19,
        fontWeight: "bold",
        margin: 8,
        textAlign: "center"

    },
    subTitleContainer: {
        borderBottomWidth: 2,
        borderBottomColor: colors.primaryWhite,
        margin: 4,
        padding: 6,
        marginHorizontal: 80,

    },
    listOuterContiner: {
        alignItems: 'center'
    },
    listContainer: {
        width: "80%",

    }

})