import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
export const COLORS = {
    primary: "#3d9aee",
    secondary: "#5393ae",

    black: "#1E1F20",
    white: "#FFFFFF",

    lightGray: "#F5F5F6",
    lightGray2: "#F6F6F7",
    lightGray3: "#EFEFF1",
    lightGray4: "#F8F8F9",
    transparent: "transparent",
    darkgray: '#898C95',
};

export const SIZES = {
    base: 8,
    font: 14,
    radius: 30,
    padding: 10,
    padding2: 12,
    width,
    height
}
const appTheme = { COLORS, SIZES };

export default appTheme;