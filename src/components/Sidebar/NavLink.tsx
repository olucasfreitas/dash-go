import { Icon, Link as ChakraLink, LinkProps, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

interface NavLinkProps extends LinkProps {
  icon: React.ElementType;
  href: string;
  children: string;
}

export function NavLink({ icon, children, href, ...rest }: NavLinkProps) {
  const { asPath } = useRouter();

  const isActive = asPath.includes(href);

  return (
    <Link href={href} style={{ display: "flex", color: "inherit" }} passHref>
      <Icon
        as={icon}
        fontSize="20"
        color={{
          base: isActive ? "pink.400" : "white",
        }}
      />
      <Text
        ml="4"
        fontWeight="medium"
        color={{
          base: isActive ? "pink.400" : "white",
        }}
      >
        {children}
      </Text>
    </Link>
  );
}
