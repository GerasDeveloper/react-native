import { View, Image, TextInput, Text, TouchableOpacity } from "react-native";
import icons from "../../constats/icons";
import { styles } from "./login.style";
import Button from "../../components/button/button.jsx";

function Login() {
    return <View style={styles.container}>

        <View style={styles.containerLogo}>
            <Image source={icons.logo} style={styles.logo} />
        </View>

        <View>
            <View style={styles.containerInput}>
                <TextInput placeholder="E-mail" style={styles.input} />
            </View>
            <View style={styles.containerInput}>
                <TextInput placeholder="Senha" style={styles.input} secureTextEntry={true} />
            </View>
            <Button text="Acessar" />
        </View>

        <View style={styles.footer}>
            <Text>Não tenho uma conta. </Text>
            <TouchableOpacity>
                <Text style={styles.footerLink}>Criar uma conta agora!</Text>
            </TouchableOpacity>
        </View>

    </View>
}

export default Login;