import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icategory } from "../../constant/interface";
import { colors } from "../../assets/constant/color";

const List:FC<Icategory>=({data})=> {
    return(
        
        data?.map((dataPoint) => (
            
               <View key={dataPoint} style={styles.listItem}>
                   <Text style={styles.itemText}>{dataPoint}</Text>
               </View>
            ))
        
    ) 
}
export default List;

const styles= StyleSheet.create({
    listItem:{
        borderWidth:0.5,
        borderRadius:6,
        paddingHorizontal:8,
        paddingVertical:4,
        marginVertical:4,
        marginHorizontal:12,
        backgroundColor:colors.listColor
        
    },
    itemText:{
        color: colors.primaryWhite,

    }

})