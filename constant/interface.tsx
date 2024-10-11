import { NavigationAction } from "@react-navigation/native";
import { ReactNode } from "react";
import { StyleProp, TextStyle } from "react-native";

export interface Icategory {
    title?: string
    color?: string
    onPress?: () => void
    navigation?: any
    route?: any
    imageUrl?: string
    duration?: any
    complexity?: string
    affordability?: string
    id?: string
    style?:any
    textstyle?:StyleProp<TextStyle>;
    children?:ReactNode
    data?:any
    icon?:React.ReactNode,
    ids?: string[];
    addFavorite?: (id: string) => void
    removeFavorite?: (id: string) => void
    items?:any
   

}