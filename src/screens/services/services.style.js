import {COLORS, FONT_SIZE} from "../../constats/theme.js";

export const styles = {

    container: {
        flex: 1,
        color: COLORS.white,
      
    },

    banner: {
        backgroundColor: COLORS.blue,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 20,
        paddingBottom: 25,
    },

    name: {
        fontSize: FONT_SIZE.md,
        color: COLORS.white,
        fontWeight: "bold",
        marginTop: 5,
    },

    specialty: {
        fontSize: FONT_SIZE.sm,
        color: COLORS.white,
        marginTop: 3,
    },

}