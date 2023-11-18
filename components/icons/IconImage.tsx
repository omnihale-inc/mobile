import { Image } from "expo-image";
import { Pressable } from "react-native";

type IconImageProps = {
  onPress?: () => void;
  imageSource: () => any;
  size?: { width: number; height: number };
};

const IconImage = ({
  onPress,
  imageSource,
  size = { width: 22, height: 22 }
}: IconImageProps) => {
  return (
    // Returns the user to previous screen
    <Pressable onPress={onPress}>
      <Image
        style={{ width: size.width, height: size.height }}
        source={imageSource()}
      />
    </Pressable>
  );
};

export default IconImage;
