import {
  Box,
  HStack,
  IconButton,
  Link as ChakraLink,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Show,
  Spacer,
} from '@chakra-ui/react'
import Link from 'next/link'
import { BiHomeSmile, BiMenu } from 'react-icons/bi'
import { BsChatSquareText } from 'react-icons/bs'
import { VscTelescope } from 'react-icons/vsc'

const navLinks = [
  {
    name: 'Home',
    url: '',
    icon: <BiHomeSmile size={18} />,
  },
  {
    name: 'Explore Topics',
    url: '',
    icon: <VscTelescope size={20} />,
  },
  {
    name: 'My Answers',
    url: '',
    icon: <BsChatSquareText size={18} />,
  },
]
const Navigation = () => {
  return (
    <Box shadow="sm" bg="white">
      <HStack p={3} w="full" mb={4} px={5} maxW="container.lg" mx="auto">
        <Link href="/" passHref>
          <ChakraLink fontSize="lg">KC APP</ChakraLink>
        </Link>
        <Spacer />
        <Show above="md">
          <HStack spacing={10}>
            {navLinks.map((item, index) => (
              <Link href="/" key={index} passHref>
                <ChakraLink color="gray.600">{item.name}</ChakraLink>
              </Link>
            ))}
          </HStack>
          <Spacer />
        </Show>
        <Show below="md">
          <MobileMenu />
        </Show>
      </HStack>
    </Box>
  )
}

export default Navigation

const MobileMenu = () => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<BiMenu />}
        variant="outline"
      />
      <MenuList>
        {navLinks.map((item, index) => (
          <MenuItem icon={item.icon} key={index}>
            {item.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}
