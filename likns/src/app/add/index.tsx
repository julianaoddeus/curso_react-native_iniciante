import {
  View,
  Text,
  Pressable,
  PressableProps,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

import { s } from "./style";

import { Categories } from "@/app/components/categories";
import { colors } from "@/app/styles/theme";
import { Input } from "@/app/components/input";
import { Button } from "@/app/components/button";

export default function Add() {
  const router = useRouter();
  return (
    <View style={s.container}>
      <View style={s.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialIcons name="arrow-back" size={32} color={colors.gray[200]} />
        </TouchableOpacity>
        <Text style={s.title}>Novo</Text>
      </View>

      <Text style={s.lable}>Selecione uma categoria</Text>
      <Categories />

      <View style={s.form}>
        <Input
          placeholder="Nome"
          onChangeText={(value) => console.log(value)}
        />
        <Input placeholder="Url" onChangeText={(value) => console.log(value)} />
        <Button title="Adicionar" />
      </View>
    </View>
  );
}
