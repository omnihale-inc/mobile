import { Image } from "expo-image";
import { Pressable } from "react-native";

type IconImageProps = {
  onPress?: () => void;
  imageSource: () => any;
};

const IconImage = ({ onPress, imageSource }: IconImageProps) => {
  return (
    // Returns the user to previous screen
    <Pressable onPress={onPress}>
      <Image style={{ width: 22, height: 22 }} source={imageSource()} />
    </Pressable>
  );
};

export default IconImage;
