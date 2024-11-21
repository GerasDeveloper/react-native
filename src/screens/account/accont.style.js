import {COLORS, FONT_SIZE} from "../../constats/theme.js";

export const styles = {

    container: {
        color: COLORS.white,
        padding: 50,
        flex: 1,
        justifyContent: "space-between",
    },

    containerLogo: {
       alignItems: "center",
       marginTop: 30,
    },

    logo: {
        width: 150,
        height: 30,
    },

    containerInput: {
        marginBottom: 15,
    },

    input: {
        backgroundColor: COLORS.gray5,
        padding: 10,
        borderRadius: 6,
    },

    footer:{
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },

    footerLink:{
        color: COLORS.blue,
    }
}