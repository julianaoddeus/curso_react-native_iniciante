import { useState, useCallback } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Modal,
  Alert,
  Linking,
} from "react-native";
import { router, useFocusEffect } from "expo-router";
s;
import { MaterialIcons } from "@expo/vector-icons";

import { s } from "./styles";
import { Link } from "../components/links";
import { colors } from "@/app/styles/theme";
import { Option } from "../components/option";
import { categories } from "@/utils/categories";
import { Categories } from "@/app/components/categories";
import {
  LinksStorage,
  LinkStorage as linksStorage,
} from "@/storage/link-storage";

export default function Index() {
  const [showModal, setshowModal] = useState(false);
  const [link, setLink] = useState<linksStorage>({} as linksStorage);
  const [linksList, setLinks] = useState<linksStorage[]>([]);
  const [category, setCategory] = useState(categories[0].name);

  async function getLinks() {
    try {
      const response = await LinksStorage.get();

      const filtered = response.filter(
        (link: any) => link.category === category
      );

      setLinks(filtered);
    } catch (error) {
      Alert.alert("index", "Não foi possível listar os links");
    }
  }

  function handleDetails(selected: linksStorage) {
    setshowModal(true);
    setLink(selected);
  }

  async function linkRemove() {
    try {
      await LinksStorage.remove(link.id);
      getLinks();
      setshowModal(false);
    } catch (error) {
      Alert.alert("[idx01]Erro", "Não foi possível excluir.");
      console.log(error);
    }
  }
  function handleRemove() {
    Alert.alert("Excluir", "Deseja realmente excluir?", [
      {
        style: "cancel",
        text: "Não",
      },
      { text: "Sim", onPress: linkRemove },
    ]);
  }

  async function handleOpen() {
    try {
      await Linking.openURL(link.url);
      setshowModal(false);
    } catch (error) {
      Alert.alert("[idx002]Error", "Não foi possível abrir o link.");
    }
  }
  useFocusEffect(
    useCallback(() => {
      getLinks();
    }, [category])
  );

  return (
    <View style={s.container}>
      <View style={s.header}>
        <Image source={require("@/assets/logo.png")} style={s.logo} />

        <TouchableOpacity onPress={() => router.push("/add")}>
          <MaterialIcons name="add" size={28} color={colors.green[300]} />
        </TouchableOpacity>
      </View>

      <Categories onChange={setCategory} selected={category} />

      <FlatList
        data={linksList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Link
            name={item.name}
            url={item.url}
            onDetails={() => handleDetails(item)}
          />
        )}
        style={s.links}
        contentContainerStyle={s.linksContent}
        showsVerticalScrollIndicator={false}
      />

      <Modal transparent visible={showModal} animationType="slide">
        <View style={s.modal}>
          <View style={s.modalContent}>
            <View style={s.modalHeader}>
              <Text style={s.modalCategory}>{link.category}</Text>
              <TouchableOpacity onPress={() => setshowModal(false)}>
                <MaterialIcons
                  name="close"
                  size={20}
                  color={colors.gray[400]}
                />
              </TouchableOpacity>
            </View>
            <Text style={s.modalLinkName}>{link.name}</Text>
            <Text style={s.modalUrl}>{link.url}</Text>

            <View style={s.modalFooter}>
              <Option
                name="Excluir"
                icon="delete"
                variant="secondary"
                onPress={handleRemove}
              ></Option>
              <Option
                name="Abrir"
                icon="language"
                onPress={handleOpen}
              ></Option>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
