import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    row: {
        flex: 1,
        flexDirection: "row",
        
    },
    col: {
        flex: 1,
    },
    textCenter: {
        textAlign: "center",
    },
    textLeft: {
        textAlign: "left",
    },
    textRight: {
        textAlign: "right",
    },
    bold: {
        fontWeight: "bold",
    },
    italic: {
        fontStyle: "italic",
    },
    h1: {
        fontSize: 32,
        fontWeight: "bold",
    },
    h2: {
        fontSize: 28,
        fontWeight: "bold",
    },
    h3: {
        fontSize: 24,
        fontWeight: "bold",
    },
    h4: {
        fontSize: 20,
        fontWeight: "bold",
    },
    h5: {
        fontSize: 18,
        fontWeight: "bold",
    },
    h6: {
        fontSize: 16,
        fontWeight: "bold",
    },
    p: {
        fontSize: 14,
    },
    m0: { margin: 0 },
    m1: { margin: 4 },
    m2: { margin: 8 },
    m3: { margin: 16 },
    m4: { margin: 24 },
    m5: { margin: 32 },
    mt: { marginTop: 8 },
    mb: { marginBottom: 8 },
    ml: { marginLeft: 8 },
    mr: { marginRight: 8 },
    p0: { padding: 0 },
    p1: { padding: 4 },
    p2: { padding: 8 },
    p3: { padding: 16 },
    p4: { padding: 24 },
    p5: { padding: 32 },
    pt: { paddingTop: 14 },
    pb: { paddingBottom: 8 },
    pl: { paddingLeft: 8 },
    pr: { paddingRight: 8 },
    floatLeft: {
        alignSelf: "flex-start",
    },
    bgPrimary: {
        backgroundColor: "#007bff",
    },
    bgSecondary: {
        backgroundColor: "#6c757d",
    },
    bgSuccess: {
        backgroundColor: "#28a745",
    },
    bgDanger: {
        backgroundColor: "#dc3545",
    },
    bgWarning: {
        backgroundColor: "#ffc107",
    },
    bgInfo: {
        backgroundColor: "#17a2b8",
    },
    bgLight: {
        backgroundColor: "#f8f9fa",
    },
    bgDark: {
        backgroundColor: "#343a40",
    },
    textWhite: {
        color: "#fff",
    },
    textBlack: {
        color: "#000",
    },
    textPrimary: {
        color: "#007bff",
    },
    textSecondary: {
        color: "#6c757d",
    },
    textSuccess: {
        color: "#28a745",
    },
    textDanger: {
        color: "#dc3545",
    },
    textWarning: {
        color: "#ffc107",
    },
    textInfo: {
        color: "#17a2b8",
    },
    textLight: {
        color: "#f8f9fa",
    },
    textDark: {
        color: "#343a40",
    },
    textMuted: {
        color: "#c5c3c6",
    },
    rounded: {
        borderRadius: 8,
    },
    roundedCircle: {
        borderRadius: 50,
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 2,
    },
    border: {
        borderWidth: 1,
        borderColor: "#dee2e6",
    },
    borderTop: {
        borderTopWidth: 1,
        borderColor: "#dee2e6",
    },
    borderBottom: {
        borderBottomWidth: 1,
        borderColor: "#dee2e6",
    },
    borderLeft: {
        borderLeftWidth: 1,
        borderColor: "#dee2e6",
    },
    borderRight: {
        borderRightWidth: 1,
        borderColor: "#dee2e6",
    },
});
