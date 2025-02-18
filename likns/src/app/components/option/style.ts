import { StyleSheet } from "react-native";

import { colors } from "@/app/styles/theme";

export const s = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  primaryTitle: {
    color: colors.green[300],
    fontSize: 16,
    fontWeight: "600",
  },
  secondaryTitle: {
    color: colors.gray[400],
    fontSize: 16,
  },
});
