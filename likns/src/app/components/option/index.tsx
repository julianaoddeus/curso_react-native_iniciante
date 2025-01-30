import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { s } from "./style";
import { colors } from "@/app/styles/colors";

type Props = TouchableOpacityProps & {
  name: string;
  icon: keyof typeof MaterialIcons.glyphMap;
  variant?: "primary" | "secondary";
};
export function Option({ name, icon, variant = "primary", ...rest }: Props) {
  return (
    <TouchableOpacity style={s.container} {...rest}>
      <MaterialIcons
        name={icon}
        size={20}
        color={variant === "primary" ? colors.green[300] : colors.gray[400]}
      />
      <Text
        style={variant === "primary" ? s.primaryTitle : s.secondaryTitle}
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
}
