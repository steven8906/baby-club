import UserData from "../../data/models/user/user-data";

export default function useUserInfo(){

    function getUserData():UserData {
        return {
            address : 'CRA 42H #87-213',
            name    : 'EDWARD STEVEN HERNÁNDEZ LAMBRAÑO',
            phone   : '311 791 92 95',
        }
    }

    return {
        getUserData
    }
}