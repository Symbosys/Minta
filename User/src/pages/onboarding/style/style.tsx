import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerDot: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    image: {
        height: 280,
        width: 250,
        padding: 20,
        borderRadius: 20,
        marginBottom: 10,
        marginTop: 60
    },
    heading: {
        marginTop: 10,
        marginBottom: 20,
        fontSize: 20,
        fontWeight: '700',
    },
    subText: {
        textAlign: 'center',
        padding: 10,
        fontSize: 14,
        marginBottom: 10

    },
    buttonContainer: {
        width: 250,
        marginVertical: 10,
        borderRadius: "50px",
        fontWeight: 500
    },
    dot: {
        backgroundColor: '#FF7622',
        width: 10,
        height: 10,
        borderRadius: 100,
        margin: 6,
        marginBottom: 50
    },
    dotCurrent: {
        backgroundColor: '#FFE1CE',
        width: 10,
        height: 10,
        borderRadius: 100,
        margin: 6,
        marginBottom: 50
    },
    next: {
        fontSize: 15,
        fontWeight: "600",
        backgroundColor: '#FF7622',
        color: "#ffffff",
        paddingHorizontal: 10,
        paddingVertical: 10,
        width: 270,
        borderRadius: 20,
        textAlign: "center"
    },
    skip: {
        fontSize: 15,
        fontWeight: "600"
    }
})

export default styles