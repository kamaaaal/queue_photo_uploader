import { Drawer, useMantineTheme, MediaQuery } from "@mantine/core"

function Demo() {
  const theme = useMantineTheme()

  return (
    <MediaQuery>
      <Drawer
        overlayColor={
          theme.colorScheme === "dark"
            ? theme.colors.dark[9]
            : theme.colors.gray[2]
        }
        overlayOpacity={0.55}
        overlayBlur={3}
      >
        content
      </Drawer>
    </MediaQuery>
  )
}
