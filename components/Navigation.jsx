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
import { BiHomeSmile, BiMenu, BiArrowBack } from 'react-icons/bi'
import { BsChatSquareText } from 'react-icons/bs'
import { VscTelescope } from 'react-icons/vsc'
import { useRouter } from 'next/router'
const Navigation = () => {
  const navLinks = [
    {
      name: 'Home',
      url: '/',
      icon: <BiHomeSmile size={18} />,
    },
    {
      name: 'Explore Topics',
      url: '/',
      icon: <VscTelescope size={20} />,
    },
    {
      name: 'My Answers',
      url: '/',
      icon: <BsChatSquareText size={18} />,
    },
  ]
  const { pathname, back } = useRouter()
  const handleBackRouting = () => {
    back()
  }
  return (
    <Box shadow="sm" bg="white">
      <HStack p={3} w="full" mb={4} px={5} maxW="container.lg" mx="auto">
        <Show above="md">
          <Link href="/" passHref>
            <ChakraLink fontSize="lg">KC APP</ChakraLink>
          </Link>
        </Show>
        <Show below="md">
          {pathname === '/' ? (
            <Link href="/" passHref>
              <ChakraLink fontSize="lg">KC APP</ChakraLink>
            </Link>
          ) : (
            <IconButton
              icon={<BiArrowBack />}
              variant="outline"
              onClick={handleBackRouting}
            />
          )}
        </Show>

        <Spacer />
        <Show above="md">
          <HStack spacing={10}>
            {navLinks.map((item, index) => (
              <Link href={item.url} key={index} passHref>
                <ChakraLink color="gray.600">{item.name}</ChakraLink>
              </Link>
            ))}
          </HStack>
          <Spacer />
        </Show>
        <Show below="md">
          <MobileMenu navLinks={navLinks} />
        </Show>
      </HStack>
    </Box>
  )
}

export default Navigation

const MobileMenu = ({ navLinks }) => {
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
            <Link href={item.url} passHref>
              <ChakraLink href="/">{item.name}</ChakraLink>
            </Link>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}
