import { FC } from "react";
import { Pressable, StyleSheet } from "react-native"
import Ionicons  from "react-native-vector-icons/Ionicons";
import { Icategory } from "../../constant/interface";

const IconButton:FC<Icategory>=({onPress, color,icon}) =>{
    return (
        <Pressable onPress={onPress}  style={({ pressed }) => [styles.button, pressed && styles.pressed
        ]}>
            <Ionicons name={icon} size={24} color="white"/>
        </Pressable>
    )
}

export default IconButton

const styles= StyleSheet.create({
    pressed:{
        opacity:0.5,
    },
    button:{
        color:'white'
    }
})