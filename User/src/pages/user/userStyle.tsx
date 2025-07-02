import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    bg: {
        flex: 1,
        backgroundColor: '#121223'
    },
    imageContainer: {
        flex: 1,
        flexDirection: "row"
    },
    bgImage: {
        height: 160,
        width: 160
    },
    heading: {
        color: "#ffffff",
        fontSize: 20,
        fontWeight: '800',
        marginTop: 10,
        marginBottom: 20,
        textAlign: 'center'
    },
    paragraph: {
        color: "#ffffff",
        fontSize: 14,
        marginBottom: 30
    },
    main: {
        backgroundColor: "#ffffff",
        width: "100%",
        height: "100%",
        borderTopEndRadius: 30,
        borderTopStartRadius: 30,
        padding: 30
    },
    lable: {
        fontWeight: '500',
        marginTop: 30
    },
    input: {
        height: 40,
        marginTop: 10,
        borderRadius: 7,
        padding: 10,
        backgroundColor: "#F0F5FA",
        color: "#000000",
    },
    buttonContainer: {
        width: '100%',
        marginTop: 30
    },
    button: {
        fontSize: 15,
        fontWeight: "600",
        backgroundColor: '#FF7622',
        color: "#ffffff",
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 20,
        textAlign: "center"
    },
    footer: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    footer1: {
        // marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center',  // Align the text to the left side
    },
    textLeft: {
        color: '#FF7622',
        marginLeft: 5,  // Added spacing to "Sign Up"
    },
    mt: {
        marginTop: 30
    }
});

export default styles