import {COLORS, FONT_SIZE} from "../../constats/theme.js";

export const styles = {

    doctor: {
        color: COLORS.white,
        padding: 8,
        flex: 1,
        flexDirection: "row",
        borderWidth: 1,
        borderColor: COLORS.gray4,
        marginTop: 3,
        marginBottom: 3,
        borderRadius: 6,
    },

    name: {
        fontSize: FONT_SIZE.md,
        color: COLORS.gray1,
        marginTop: 5,

    },

    specialty: {
        fontSize: FONT_SIZE.sm,
        color: COLORS.gray3,
        
    },

    icon: {
        width: 50,
        height: 50,
        marginRight: 8,
    },
}