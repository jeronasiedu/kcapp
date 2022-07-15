import {
  Avatar,
  Button,
  ButtonGroup,
  CloseButton,
  Heading,
  HStack,
  IconButton,
  Text,
  VStack,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { BsHeart, BsReply } from 'react-icons/bs'
import { VscCommentDiscussion } from 'react-icons/vsc'
const AuthorMessage = ({ message }) => {
  const router = useRouter()
  const handleRouting = () => {
    router.push(`/post/${message.id}`)
  }
  return (
    <VStack
      w="full"
      bg="white"
      p={3}
      rounded="md"
      shadow="sm"
      alignItems="flex-start"
      spacing={3}
      boxShadow="rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px"
    >
      <HStack w="full" justifyContent="space-between">
        <HStack>
          <Avatar src={message.profile} alt="user avatar" size="sm" />
          <Heading size="sm" fontWeight={400}>
            {message.author}
          </Heading>
          <Text fontSize="sm" color="GrayText">
            . {message.time}
          </Text>
        </HStack>
        <CloseButton />
      </HStack>
      <Heading size="md">{message.headline}</Heading>
      <Text color="gray.600" noOfLines={[4, 5, 6]}>
        {message.text}
      </Text>
      <HStack w="full" justifyContent="space-between">
        <HStack spacing={6}>
          <ButtonGroup isAttached variant="outline" size="sm">
            <IconButton icon={<BsHeart />} />
            <Button color="gray.600">{message.upvote}</Button>
          </ButtonGroup>
        </HStack>
        <ButtonGroup
          isAttached
          variant="outline"
          size="sm"
          onClick={handleRouting}
        >
          <IconButton icon={<VscCommentDiscussion />} variant="outline" />
          <Button color="gray.600">18</Button>
        </ButtonGroup>
      </HStack>
    </VStack>
  )
}

export default AuthorMessage
