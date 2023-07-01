import AsyncStorage from "@react-native-async-storage/async-storage";

export default function usePersistStorage() {

    async function setData<TDataModel>(data: TDataModel, key: string): Promise<void> {
        await AsyncStorage.setItem(key, JSON.stringify(data));
    }

    async function getData<TDataModel>(key: string): Promise<TDataModel> {
        const data = await AsyncStorage.getItem(key);
        return JSON.parse(data) as TDataModel;
    }

    async function checkExistDataByKey<TDataModel>(key: string): Promise<boolean> {
        const deliveryData = await getData<TDataModel>(key) ?? {} as TDataModel;
        return Object.keys(deliveryData).length > 0
    }

    return {
        setData,
        getData,
        checkExistDataByKey,
    }
}