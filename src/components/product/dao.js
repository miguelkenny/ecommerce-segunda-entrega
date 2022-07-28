import dotenv from "dotenv";
import ProductFirebaseDao from "./firebase/dao.js";
import ProductMongoDao from "./mongodb/dao.js";

dotenv.config();

let dao;

switch (process.env.DATABASE) {
    case "firebase":
        dao = new ProductFirebaseDao();
        break;
    case "mongo":
        dao = new ProductMongoDao();
        break;
    default:
        break;
}

export default dao;