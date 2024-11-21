import { View, FlatList } from "react-native";
import { styles } from "./abaCalendar.style.js";
import { appointments } from "../../constats/data";
import icon from "../../constats/icons.js";
import Appointments from "../../components/appointments/appointments.jsx";

function AbaCalendar () {
    return <View style={styles.container}>

        <FlatList data={appointments}
                  keyExtractor={(app) => app.id_appointment}
                  showsVerticalScrollIndicator={false}
                  renderItem={({item}) => {
                    return<Appointments services={item.service}
                                        doctor={item.doctor}
                                        specialty={item.specialty}/>
                  }}/>

    </View>
}

export default AbaCalendar;