
import { CATEGORIES } from '../data/dummy-data'
import { Icategory } from '../constant/interface';
import { FC } from 'react';
import { FlatList, View } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTitle';


const CategoriesScreen: FC<Icategory> = ({navigation}) => {
 
    function renderCategories(itemData: any) {
        function pressHandler() {
            navigation.navigate('MealsOverView',{
                categoryId:itemData.item.id
                })
        }
    
        return (
            <CategoryGridTile title={itemData.item.title}
                color={itemData.item.color}
                onPress={pressHandler}
            />
        )
    }
    
    
    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={item => item.id}
            renderItem={renderCategories}
            numColumns={2}
        />
    )
}
export default CategoriesScreen;