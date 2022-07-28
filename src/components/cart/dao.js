import dotenv from "dotenv";
import ShoppingFirebaseDao from "./firebase/dao.js";
import ShoppingMongoDao from "./mongodb/dao.js";

dotenv.config();

let dao;

switch (process.env.DATABASE) {
    case "firebase":
        dao = new ShoppingFirebaseDao();
        break;
    case "mongo":
        dao = new ShoppingMongoDao();
        break;
    default:
        break;
}

export default dao;