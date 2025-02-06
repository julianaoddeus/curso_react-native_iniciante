import { TextInput, TextInputProps } from "react-native";

import { s } from "./style";

export function Input({ ...rest }: TextInputProps) {
  return <TextInput style={s.container} {...rest}></TextInput>;
}
