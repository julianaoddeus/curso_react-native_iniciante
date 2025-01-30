import { StyleSheet } from "react-native";

import { colors } from "@/app/styles/colors";

export const s = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 62,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  title: {
    color: colors.gray[200],
    fontSize: 16,
    fontWeight: "600",
  },
  lable: {
    color: colors.gray[400],
    fontSize: 14,
    paddingHorizontal: 24,
  },
});
