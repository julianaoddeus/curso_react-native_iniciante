import { StyleSheet } from "react-native";

import { colors } from "@/app/styles/theme";

export const s = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    gap: 2,
  },
  details: {
    flex: 1,
  },
  name: {
    color: colors.gray[100],
    fontSize: 16,
    fontWeight: "600",
  },
  url: {
    color: colors.gray[400],
    fontSize: 14,
  },
});
