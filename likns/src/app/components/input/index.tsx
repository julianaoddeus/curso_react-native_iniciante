import { TextInput, TextInputProps } from "react-native";

import { s } from "./style";
import { colors } from "@/app/styles/theme";

export function Input({ ...rest }: TextInputProps) {
  return (
    <TextInput
      style={s.container}
      placeholderTextColor={colors.gray[400]}
      {...rest}
    ></TextInput>
  );
}
