import { Text, TouchableOpacity } from "react-native";
import { styles } from "./button.style";

function Button (props){

    return <TouchableOpacity 

            style={[styles.btn,
            props.theme == "danger" ? styles.danger : styles.primary
            ]}>

        <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
}

export default Button;