import { StatusBar, Text } from "react-native";
import { useIsFocused } from "@react-navigation/native";

const FocusedStatusBar = (props) => {
	const isFocused = useIsFocused();

	// TODO: make this work on iOS
	return isFocused ? <StatusBar animated={true} {...props} /> : null;
};

export default FocusedStatusBar;
