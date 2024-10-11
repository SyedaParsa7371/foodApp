import { FC } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Icategory } from "../../constant/interface";
import { colors } from "../../assets/constant/color";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "../MealDetails";

const MealItem: FC<Icategory> = (props) => {
    const { id, title, imageUrl, affordability, duration, complexity, onPress } = props;

    const navigation:any = useNavigation();

    // navigation.navigate('MealDetail');

    function onPressHandler() {
        navigation.navigate('MealDetail', {
            mealId:id
        });
    }

    return (
        <View style={styles.mealItem}>
            <Pressable android_ripple={{ color: colors.rootColor }}
                style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null]}
                onPress={onPressHandler}
            >
                <View style={styles.innerContainer}>
                    <Image source={{ uri: imageUrl }} style={styles.image} />
                    <Text style={styles.title}>{title}</Text>
                </View>
                <MealDetails
                 duration={duration}
                 affordability={affordability} 
                 complexity={complexity} />
              
            </Pressable>
        </View>
    );
}

export default MealItem;

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: 'hidden',
        elevation: 10,
        backgroundColor: 'white',
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        textAlign: "center",
        fontSize: 18,
        color: colors.primarybBlack,
        padding: 8,
    },
    
    buttonPressed: {
        opacity: 0.5,
    },
    button: {
        flex: 1
    },
});
