import { Icon, Link as ChakraLink, LinkProps, Text } from "@chakra-ui/react";
import Link from "next/link";

interface NavLinkProps extends LinkProps {
  icon: React.ElementType;
  href: string;
  children: string;
}

export function NavLink({ icon, children, href, ...rest }: NavLinkProps) {
  return (
    <ChakraLink display="flex" {...rest}>
      <Link
        href={href}
        style={{ display: "flex", textDecoration: "none", color: "inherit" }}
      >
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {children}
        </Text>
      </Link>
    </ChakraLink>
  );
}
