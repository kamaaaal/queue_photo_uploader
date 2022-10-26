import React, { Children, useState, useRef } from "react"
import "../global.css"
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  Menu,
  Button,
  Breadcrumbs,
  Anchor,
  Image,
  BackgroundImage,
  Drawer,
  Grid,
  Stack,
  Center,
  Card,
  Container,
} from "@mantine/core"

// import { } from "@mantine/core"

const menuItems = [
  { title: "Mantine", href: "#" },
  { title: "Mantine hooks", href: "#" },
  { title: "use-id", href: "#" },
  // { title: "Mantine", href: "#" },
  // { title: "Mantine hooks", href: "#" },
  // { title: "use-id", href: "#" },
  // { title: "Mantine", href: "#" },
  // { title: "Mantine hooks", href: "#" },
  // { title: "use-id", href: "#" },
  // { title: "Mantine", href: "#" },
  // { title: "Mantine hooks", href: "#" },
  // { title: "use-id", href: "#" },
]

const footerFontStylesSx = {
  fontFamily: "monospace",
}
export default function Layout({ children }: { children: React.ReactNode }) {
  const theme = useMantineTheme()
  const [opened, setOpened] = useState(false)
  return (
    <AppShell
      // style={{
      //   position: "relative",
      // }}
      // fixed={false}
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      fixed={false}
      ///
      //   navbar={
      //     <Navbar
      //       p="md"
      //       hiddenBreakpoint="sm"
      //       hidden={!opened}
      //       width={{ sm: 200, lg: 300 }}
      //     >
      //       <Text>Application navbar</Text>
      //     </Navbar>
      //   }
      //   aside={
      //     <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
      //       <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
      //         <Text>Application sidebar</Text>
      //       </Aside>
      //     </MediaQuery>
      //   }
      header={
        <Header
          // mb={100}
          height={90}
          p="md"
          fixed
          // pb="xl"
          sx={theme => ({
            // backgroundImage: `radial-gradient(
            //   at top left,
            //   ${theme.colors.gray[1]},
            //   ${theme.colors.gray[9]},
            //   )`,
            // padding: "1.5rem 1.5rem 3rem 1.5rem",
            background: theme.colors.gray[4],
            // borderRadius: theme.spacing.xs,
          })}
        >
          <div
            style={{
              display: "grid",
              alignContent: "flex-start",
              alignItems: "center",
              height: "100%",
              gridTemplateColumns: "2fr 2fr 2fr",
              // justifyContent: "space-between",
            }}
          >
            {/* logo image */}
            <MediaQuery largerThan="md" styles={{ height: "!7rem" }}>
              <Image
                style={{ justifySelf: "center", gridColumn: "2/2" }}
                src="/logo.jpeg"
                fit={"contain"}
                height={60}
                radius={"md"}
              />
            </MediaQuery>
            {/* on larger devices */}

            <MediaQuery smallerThan={"md"} styles={{ display: "none" }}>
              <Breadcrumbs style={{ justifySelf: "flex-end" }} separator="  ">
                {menuItems.map(menu => (
                  <Anchor href="" key="index">
                    {menu.title}
                  </Anchor>
                ))}
              </Breadcrumbs>
            </MediaQuery>

            {/* on mobile devices */}

            <MediaQuery largerThan="md" styles={{ display: "none" }}>
              <Burger
                style={{
                  justifySelf: "flex-end",
                  // alignSelf: "flex-end",
                }}
                opened={opened}
                onClick={() => setOpened(o => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="md"
              />
            </MediaQuery>

            <MediaQuery largerThan="md" styles={{ display: "none" }}>
              <Drawer
                overlayColor={
                  theme.colorScheme === "dark"
                    ? theme.colors.dark[9]
                    : theme.colors.gray[2]
                }
                overlayOpacity={0.55}
                overlayBlur={3}
                opened={opened}
                position="top"
                size="full"
                // closeButtonLabel="close"
                withCloseButton={false}
                // closeBu
                onClose={() => setOpened(!opened)}
              >
                <Card
                  // height
                  sx={{
                    // height: "3rem",
                    background: theme.colors.gray[2],
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                  }}
                >
                  <Button onClick={e => setOpened(false)} variant="filled">
                    close
                  </Button>
                </Card>
                {/* <Grid> */}
                <Stack
                  sx={theme => ({
                    backgroundColor:
                      theme.colorScheme === "dark"
                        ? theme.colors.dark[8]
                        : theme.colors.gray[0],
                    height: "90%",
                    // scrollBehavior : ''
                    overflow: "scroll",
                    // paddingTop: "2rem",
                    alignItems: "center",
                    justifyContent: "center",
                  })}
                >
                  {menuItems.map(menu => (
                    <Anchor href="" key="index">
                      {menu.title}
                    </Anchor>
                  ))}
                </Stack>
                {/* </Grid> */}
              </Drawer>
            </MediaQuery>
          </div>
        </Header>
      }
      footer={
        <Footer
          // fixed={false}
          height={"fit-content"}
          // p="xs"
          pt="lg"
          style={{
            // width: "100%",
            // height: "200rem",
            // position: "absolute",
            background: theme.colors.gray[4],
            // borderRadius: theme.spacing.xs,
            fontSize: ".8rem",
          }}
        >
          <Card
            sx={{
              // overflow: "scroll",
              display: "flex",
              // alignContent: "flex-end",
              // marginTop: "3rem",
              // paddingTop: "2rem",
              // padding :
              flexDirection: "column",
              gap: "1rem",
              flexWrap: "wrap",
              background: theme.colors.gray[4],
              // borderRadius: theme.spacing.xs,
            }}
          >
            <Text sx={footerFontStylesSx}>@copyrights image_queue_resizer</Text>
            {/* <Text>Contact</Text> */}
            <Text sx={footerFontStylesSx}>mobile : 93000333</Text>
            <Text sx={footerFontStylesSx}>email : email@email.com</Text>
          </Card>
        </Footer>
      }
    >
      {/* <Text>Resize app to see responsive navbar in action</Text>
       */}

      {/* <Card mt={100} style={{ height: "100rem" }}>
        <Text>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
          doloremque deleniti quos fuga tempore aperiam voluptates tempora ab
          repellat, tenetur eligendi asperiores minus voluptatibus. Iste dolor
          modi molestias suscipit cumque.{" "}
        </Text>
      </Card> */}

      <Container mt={100}>{children}</Container>
    </AppShell>
  )
}
