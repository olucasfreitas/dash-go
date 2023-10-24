import { Icon, Link, LinkProps, Text } from "@chakra-ui/react";

interface NavLinkProps extends LinkProps {
  icon: React.ElementType;
  children: string;
}

export function NavLink({ icon, children, ...rest }: NavLinkProps) {
  return (
    <Link display="flex" {...rest}>
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">
        {children}
      </Text>
    </Link>
  );
}