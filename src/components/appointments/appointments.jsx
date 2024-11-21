import { View, Text, Image } from "react-native";
import { styles } from "./appointements.style";
import icon from "../../constats/icons";
import Button from "../button/Button.jsx";

function Appointments(props) {
    return <View style={styles.appointments}>

        <Text style={styles.name}>{
            props.services} - {props.doctor}
        </Text>

        <Text style={styles.specialty}>{
            props.specialty}
        </Text>

        <View style={styles.container}>

            <View style={styles.containerBooking}>
                <View style={styles.booking}>
                    <Image style={styles.icon} source={icon.calendar}/>
                    <Text style={styles.bookingDate}>26/10/2024</Text>
                </View>
                <View style={styles.booking}>
                    <Image style={styles.icon} source={icon.clock}/>
                    <Text style={styles.bookingHour}>08:15</Text>
                </View>
            </View>
            <View style={styles.containerButton}>
                <Button text="Cancelar Reserva" theme="danger"/>
            </View>
        </View>
    </View>
}

export default Appointments;