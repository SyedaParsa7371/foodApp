import { FC } from "react"
import { Platform, Pressable, ScrollView, StyleSheet, Text, View } from "react-native"
import { Icategory } from "../constant/interface";
import { colors } from "../assets/constant/color";




const CategoryGridTile: FC<Icategory> = (props) => {
    const { title, color,onPress } = props;
    return (

        <View style={styles.gridItem}>

            <Pressable android_ripple={{ color: '#acabab' }}
                style={({pressed}) => [styles.button, pressed ? styles.buttonPressed : null]}
                onPress={onPress}
                >
                <View style={[styles.innerContainer,,{backgroundColor:color}]}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}
export default CategoryGridTile

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 20,
        height: 150,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        elevation: 16,
        backgroundColor: "#929090",
        borderRadius: 8,

    },
    buttonPressed: {
        opacity: 0.5,
    },
    button: {
        flex: 1
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        color: colors.primarybBlack,
    }
})