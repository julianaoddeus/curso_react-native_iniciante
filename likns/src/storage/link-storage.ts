import AsyncStorage from "@react-native-async-storage/async-storage";

const LINKS_STORAGE_KEY = "links-storage";

export type LinkStorage = {
  id: string;
  name: string;
  url: string;
  category: string;
};

async function get() {
  const storage = await AsyncStorage.getItem(LINKS_STORAGE_KEY);
  const response = storage ? JSON.parse(storage) : [];
  return response;
}

async function save(newlink: LinkStorage) {
  try {
    const storage = await get();
    const update = JSON.stringify([...storage, newlink]);

    await AsyncStorage.setItem(LINKS_STORAGE_KEY, update);
  } catch (error) {
    throw error;
  }
}

async function remove(id: string) {
  try {
    const storage = await get();
    const update = storage.filter((link: any) => link.id != id);

    await AsyncStorage.setItem(LINKS_STORAGE_KEY, JSON.stringify(update));
  } catch (error) {
    throw error;
  }
}

export const LinksStorage = { get, save, remove };
