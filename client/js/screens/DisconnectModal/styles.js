import {StyleSheet, Dimensions} from "react-native";
import {colors, fonts} from "../../config/styles";

const styles = StyleSheet.create({
  scrollView: {
    flexDirection: "column",
    height: Dimensions.get("window").height,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonAligner: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  header: {
    fontFamily: fonts.light,
    fontWeight: "400",
    paddingHorizontal: 20,
    paddingBottom: 20,
    textAlign: "center",
    fontSize: 16
  },
  buttonText: {
    alignSelf: "center",
    fontFamily: "Arial",
    fontSize: 16,
    paddingVertical: 10
  },
  disconnect: {
    width: "35%",
    backgroundColor: colors.white,
    borderRadius: 13,
    borderColor: colors.blue,
    borderWidth: 2,
    marginHorizontal: 10
  },
  
});

export default styles;
