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
import { LinksStorage } from "@/storage/link-storage";

export default function Add() {
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [url, setURL] = useState("");

  async function handleAdd() {
    try {
      if (!category) return Alert.alert("Categoria", "Selecione a categoria.");

      if (!name.trim()) return Alert.alert("Nome", "Informe o nome.");

      if (!url.trim()) return Alert.alert("URL", "Informe a url.");

      await LinksStorage.save({
        id: new Date().getTime().toString(),
        name,
        url,
        category,
      });

      Alert.alert("Sucesso!", "Novo link adicionado!", [
        { text: "OK", onPress: () => router.back() },
      ]);

    } catch (error) {
      Alert.alert("Não foi possível salvar o link.");
      console.log("add", error);
    }
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
        <Input
          placeholder="URL"
          onChangeText={setURL}
          autoCorrect={false}
          autoCapitalize="none"
        />
        <Button title="Adicionar" onPress={handleAdd} />
      </View>
    </View>
  );
}
