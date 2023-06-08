import {
  AspectRatio,
  Button,
  Container,
  Flex,
  Footer,
  Group,
  Image,
  Space,
  Text,
  TextInput,
  Title,
} from "@mantine/core";

import IlustrationDashboard from "./assets/illustration-dashboard.png";
import Logo from "./assets/logo.svg";
import SocialIcon from "./components/SocialIcon";
import { Controller, useForm } from "react-hook-form";

type FormData = {
  email: string;
};

const Home = () => {
  const { control, handleSubmit } = useForm<FormData>({
    defaultValues: { email: "" },
  });

  const onSubmit = (data: FormData) => console.log(data);

  return (
    <>
      <Container size="sm">
        <Image src={Logo} maw={100} mx="auto" my="xl" alt="logo" />
        <Title fw={300} color="_gray" align="center">
          We are launching{" "}
          <Text fw={700} color="_veryDarkBlue" display="inline">
            soon!
          </Text>
        </Title>

        <Text size={20} align="center" fw={300} c="_veryDarkBlue">
          Suscribe and get notified
        </Text>
        <Space h="sm" />
        <Flex direction={{ base: "column", md: "row" }} gap="sm" mt="xl">
          <Controller
            name="email"
            control={control}
            rules={{
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Please provide a valid email address",
              },
            }}
            render={({ field: { value, onChange }, fieldState }) => (
              <TextInput
                aria-label="Email address"
                value={value}
                onChange={onChange}
                w="100%"
                radius="xl"
                size="xl"
                placeholder="Your email address..."
                error={fieldState.error?.message}
                styles={theme => ({
                  input: {
                    "::placeholder": {
                      color: theme.colors._paleBlue[6],
                    },
                  },
                  error: {
                    fontStyle: "italic",
                  },
                })}
              />
            )}
          />

          <Button
            onClick={handleSubmit(onSubmit)}
            radius="xl"
            w={{ base: "100%", md: 250 }}
            size="xl"
            bg="_blue"
            sx={theme => ({
              "&:hover": {
                backgroundColor: theme.colors._blue[4],
              },
            })}
            fz={16}
          >
            Notify Me
          </Button>
        </Flex>
        <Space h="xl" />
        <AspectRatio ratio={14 / 9} mx="auto" my="xl">
          <Image src={IlustrationDashboard} alt="ilustration" />
        </AspectRatio>
        <Footer height="auto" py="xs" withBorder={false}>
          <Group position="center" spacing="xs">
            <SocialIcon icon="facebook" />
            <SocialIcon icon="instagram" />
            <SocialIcon icon="twitter" />
          </Group>
          <Text align="center" mt="lg" color="_gray">
            &copy; Copyright Ping. All rights reserved.
          </Text>
        </Footer>
      </Container>
    </>
  );
};

export default Home;
