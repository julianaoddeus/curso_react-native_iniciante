import {
  View,
  Text,
  Pressable,
  PressableProps,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { s } from "./style";
import { colors } from "@/app/styles/colors";

type Props = {
  name: string;
};
export default function Add() {
  return (
    <View style={s.container}>
      <View style={s.header}>
        <TouchableOpacity>
          <MaterialIcons name="arrow-back" size={32} color={colors.gray[200]} />
        </TouchableOpacity>
        <Text style={s.title}>Novo</Text>
      </View>
    </View>
  );
}
