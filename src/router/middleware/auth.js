import router from "..";
import { storage } from "../../storage";
import { routeNames } from "../routes_names";

export default function auth(to, from, next) {

    if (!storage.pull(storage.TOKEN)) {
        router.push({ name: routeNames.LOGIN });
    }
    next()
}

