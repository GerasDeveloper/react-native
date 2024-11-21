import { View, Text } from "react-native";
import { styles } from "./abaProfile.style.js";

function AbaProfile (){
    return <View style={styles.container}>

        <View style={styles.item}>
            <Text style={styles.title}>Nome:</Text>
            <Text style={styles.text}>Geraldo Oliveira Pinho</Text>
        </View>

        <View style={styles.item}>
            <Text style={styles.title}>E-mail:</Text>
            <Text style={styles.text}>ggpinho@gmail.com</Text>
        </View>

    </View>
}

export default AbaProfile;