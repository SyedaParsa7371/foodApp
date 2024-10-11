import { StyleSheet, Text, View } from "react-native"
import { colors } from "../assets/constant/color";
import { FC } from "react";
import { Icategory } from "../constant/interface";

const MealDetails:FC<Icategory> = (props)=>{
    const { affordability, duration, complexity ,style,textstyle}=props
    return (
        <View style={[styles.details,style]}>
        <Text style={[styles.detailItem,textstyle]}>{duration}</Text>
        <Text style={[styles.detailItem,textstyle]}>{complexity?.toUpperCase()}</Text>
        <Text style={[styles.detailItem,textstyle]}>{affordability?.toUpperCase()}</Text>
    </View>
    )
}
export default MealDetails;

const styles = StyleSheet.create({
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        justifyContent: 'center',
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 14,
        color: colors.primarybBlack,
    },
})