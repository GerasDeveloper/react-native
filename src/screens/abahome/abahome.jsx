import { View, Text, FlatList } from "react-native";
import { styles } from "./abahome.style";
import { doctors } from "../../constats/data";
import Doctor from "../../components/doctor/doctor";
import icon from "../../constats/icons.js";

function AbaHome () {
    return <View style={styles.container}>
        <Text style={styles.text}>Agende os seus serviços médicos.</Text>

        <FlatList data={doctors}
                  keyExtractor={(doc) => doc.id_doctors}
                  showsVerticalScrollIndicator={false}
                  renderItem={({item}) => {
                    return<Doctor name={item.name} 
                            icon={item.icon == "M" ? icon.male : icon.female}
                            specialty={item.specialty}/>
                  }}/>

    </View>
}

export default AbaHome;