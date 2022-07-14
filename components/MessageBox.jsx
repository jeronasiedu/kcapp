import { VStack } from '@chakra-ui/react'
import AuthorMessage from './AuthorMessage'
import CommentBox from './CommentBox'
const MessageBox = ({ message }) => {
  return (
    <VStack maxW="2xl" w="full">
      <AuthorMessage message={message} />
      <CommentBox comments={message.comments} />
    </VStack>
  )
}

export default MessageBox
