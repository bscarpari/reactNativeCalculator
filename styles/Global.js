import { StyleSheet } from "react-native-web";
import { colors } from "./Colors";

export const Styles = StyleSheet.create({
  main: {
    flex: 1,
    display: 'flex',
  },

  resultContainer: {
    backgroundColor: colors.dark,
    flex: 2,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    overflow: 'visible',
  },

  textContainer: {
    minHeight: 105,
    fontSize: 18,
    justifyContent: "flex-end",
    backgroundColor: colors.dark,
  },

  textHistory: {
    color: colors.purple,
    fontSize: 18,
    paddingRight: 15,
    alignSelf: "flex-end",
  },

  textResult: {
    color: colors.white,
    fontSize: 48,
    paddingRight: 15,
    alignSelf: "flex-end",
    margin: 2,
  },

  operatorContainer: {
    backgroundColor: colors.dark,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 25,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  operators: {
    flex: 1,
    margin: 5,
    minHeight: '60px',
    minWidth: '60px',
    alignItems: "center",
    justifyContent: "center",
    borderRadius: '120px',
  },

  operatorsText: {
    color: colors.white,
    fontWeight: 'medium',
    fontSize: 18,
  },
})