import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../assets/constant/color";
import { FC } from "react";
import { Icategory } from "../../constant/interface";

const SubTitle:FC<Icategory>=({children})=> {
    return (
        <View style={styles.subTitleContainer}>
            <Text style={styles.subTitle}>{children}</Text>
        </View>
    )
}
export default SubTitle;

const styles = StyleSheet.create({
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
        marginHorizontal: 19,
        marginBottom:10,
    },
 
})