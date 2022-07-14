import { VStack } from '@chakra-ui/react'
import CommentBox from '../../components/CommentBox'
import MessageInfo from '../../components/MessageInfo'

const PostDetails = () => {
  return (
    <>
      <VStack maxW="2xl" w="full" mx="auto" pb={10} px={4}>
        <MessageInfo />
        <CommentBox />
      </VStack>
    </>
  )
}

export default PostDetails
