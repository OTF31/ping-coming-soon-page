import { ActionIcon } from "@mantine/core";
import { Facebook, Instagram, Twitter } from "@styled-icons/boxicons-logos";
import { FC } from "react";

type Props = {
  icon: "facebook" | "instagram" | "twitter";
};

const SocialIcon: FC<Props> = props => {
  const { icon } = props;

  return (
    <ActionIcon
      color="_paleBlue"
      size="lg"
      radius="xl"
      variant="outline"
      sx={theme => ({
        color: theme.colors._blue[6],
        "&:hover": {
          backgroundColor: theme.colors._blue[6],
          color: "white",
        },
      })}
    >
      {icon === "facebook" ? (
        <Facebook size={18} />
      ) : icon === "instagram" ? (
        <Instagram size={18} />
      ) : icon === "twitter" ? (
        <Twitter size={18} />
      ) : null}
    </ActionIcon>
  );
};

export default SocialIcon;
