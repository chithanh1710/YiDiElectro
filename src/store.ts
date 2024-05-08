import { configureStore } from "@reduxjs/toolkit";
import homeReducer, { homeStoreProps } from "./pages/homeSlice";
import productReducer, { productStoreProps } from "./pages/productSlide";
import AppReducer, { appStoreProps } from "./layouts/User/AppSlice";
import AdminReducer, { adminStoreProps } from "./layouts/Admin/AdminSlice";

export interface storeProps {
  home: homeStoreProps;
  product: productStoreProps;
  app: appStoreProps;
  admin: adminStoreProps;
}

const store = configureStore({
  reducer: {
    home: homeReducer,
    product: productReducer,
    app: AppReducer,
    admin: AdminReducer,
  },
});

export default store;
