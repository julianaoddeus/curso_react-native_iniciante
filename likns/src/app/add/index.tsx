import { useState } from "react";
import {
  View,
  Text,
  Pressable,
  PressableProps,
  TouchableOpacity,
  Alert,
} from "react-native";
import { router } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

import { s } from "./style";

import { Categories } from "@/app/components/categories";
import { colors } from "@/app/styles/theme";
import { Input } from "@/app/components/input";
import { Button } from "@/app/components/button";

export default function Add() {
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [url, setURL] = useState("");

  function handleAdd() {
    if (!category) return Alert.alert("Categoria", "Selecione a categoria.");

    if (!name.trim()) return Alert.alert("Nome", "Informe o nome.");

    if (!url.trim()) return Alert.alert("URL", "Informe a url.");
  }

  return (
    <View style={s.container}>
      <View style={s.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialIcons name="arrow-back" size={32} color={colors.gray[200]} />
        </TouchableOpacity>
        <Text style={s.title}>Novo</Text>
      </View>

      <Text style={s.lable}>Selecione uma categoria</Text>
      <Categories onChange={setCategory} selected={category} />

      <View style={s.form}>
        <Input placeholder="Nome" onChangeText={setName} autoCorrect={false} />
        <Input placeholder="URL" onChangeText={setURL} />
        <Button title="Adicionar" onPress={handleAdd} />
      </View>
    </View>
  );
}
