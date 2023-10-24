import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { Profile } from "@/components/Header/Profile";
import { NotificationsNav } from "@/components/Header/NotificationsNav";
import { SearchBox } from "@/components/Header/SearchBox";
import { Logo } from "@/components/Header/Logo";
import { useSidebarDrawer } from "@/context/SidebarDrawerContext";
import { RiMenuLine } from "react-icons/ri";

export function Header() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  const { onOpen } = useSidebarDrawer();

  return (
    <Flex
      as="header"
      w="100%"
      maxW={1480}
      h="20"
      mx="auto"
      mt="4"
      align="center"
      px="6"
    >
      {!isWideVersion && (
        <IconButton
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
        />
      )}

      <Logo />

      {isWideVersion && <SearchBox />}

      <Flex align="center" ml="auto">
        <NotificationsNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
}
