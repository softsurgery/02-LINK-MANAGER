import { makeAutoObservable, action, observable } from "mobx";
import { Category, Item } from "../api/types";
import { CategoryApi } from "../api/category";

class AppModel {
    categories: Category[] = [];
    items: Item[] = [];
    currentText: string = "";

    constructor() {
        makeAutoObservable(this, {
            categories: observable,
            currentText: observable,
            fetchCategories:action.bound,
        });
    }

    async fetchCategories() {
        this.categories = await CategoryApi.getAllCategories();
    }

}

const appModel = new AppModel();
export default appModel;