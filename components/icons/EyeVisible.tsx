import IconImage from "./IconImage";

export default function EyeVisibleIcon({ onPress }: { onPress?: () => void }) {
  return (
    <IconImage
      onPress={onPress}
      size={{ width: 60, height: 60 }}
      imageSource={() => require("../../assets/images/eye-visible.svg")}
    />
  );
}
