import {COLORS, FONT_SIZE} from "../../constats/theme.js";

export const styles = {

    appointments: {
        color: COLORS.white,
        padding: 14,
        flex: 1,
        borderWidth: 1,
        borderColor: COLORS.gray4,
    },

    name: {
        fontSize: FONT_SIZE.md,
        color: COLORS.gray1,
        marginBottom: 5,
    },

    specialty: {
        fontSize: FONT_SIZE.sm,
        color: COLORS.gray3,
        marginBottom: 5,
    },
    icon: {
        width: 25,
        height: 25,
        marginRight: 5,
    },

    bookingDate: {
        fontSize: FONT_SIZE.sm,
        color: COLORS.gray3,
        marginBottom: 3,
    },
    bookingHour: {
        fontSize: FONT_SIZE.sm,
        color: COLORS.gray3,
        marginBottom: 3,
    },

    booking: {
        flexDirection: "row",
    },

    containerBooking: {
        flex: 1,
    },

    container: {
        flexDirection: "row",
    },

    containerButton: {
        marginTop: 4,
    },

}