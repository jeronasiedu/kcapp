import { VStack } from '@chakra-ui/react'
import { useState } from 'react'
import AuthorMessage from './AuthorMessage'
import CommentBox from './CommentBox'
const MessageBox = ({ message }) => {
  const [isReplyVisible, setIsReplyVisible] = useState(false)
  const toggleReplies = () => setIsReplyVisible(!isReplyVisible)
  const hideReplies = () => setIsReplyVisible(false)
  const viewReplies = () => setIsReplyVisible(true)
  return (
    <VStack maxW="2xl" w="full">
      <AuthorMessage toggleReplies={toggleReplies} message={message} />
      <CommentBox isReplyVisible={isReplyVisible} comments={message.comments} />
    </VStack>
  )
}

export default MessageBox
