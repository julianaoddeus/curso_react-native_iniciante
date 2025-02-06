import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Modal,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { s } from "./styles";
import { colors } from "@/app/styles/theme";
import { Categories } from "../components/categories";
import { Link } from "../components/links";
import { Option } from "../components/option";
import { router } from "expo-router";

export default function Index() {
  return (
    <View style={s.container}>
      <View style={s.header}>
        <Image source={require("@/assets/logo.png")} style={s.logo} />

        <TouchableOpacity onPress={() => router.push("/add")}>
          <MaterialIcons name="add" size={28} color={colors.green[300]} />
        </TouchableOpacity>
      </View>

      <Categories />

      <FlatList
        data={["1", "2", "3"]}
        keyExtractor={(item) => item}
        renderItem={() => (
          <Link
            name="Arquiterura de Software"
            url="https://arquiteturadesoftware.online/"
            onDetails={() => console.log("Clicou!")}
          />
        )}
        style={s.links}
        contentContainerStyle={s.linksContent}
        showsVerticalScrollIndicator={false}
      />

      <Modal transparent visible={false}>
        <View style={s.modal}>
          <View style={s.modalContent}>
            <View style={s.modalHeader}>
              <Text style={s.modalCategory}>Curso</Text>
              <TouchableOpacity>
                <MaterialIcons
                  name="close"
                  size={20}
                  color={colors.gray[400]}
                />
              </TouchableOpacity>
            </View>
            <Text style={s.modalLinkName}>Arquitetura de Software</Text>
            <Text style={s.modalUrl}>
              "https://arquiteturadesoftware.online/"
            </Text>

            <View style={s.modalFooter}>
              <Option name="Excluir" icon="delete" variant="secondary"></Option>
              <Option name="Abrir" icon="language"></Option>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
