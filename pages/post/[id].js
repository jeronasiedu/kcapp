import { Box, VStack } from '@chakra-ui/react'
import CommentBox from '../../components/CommentBox'
import MessageInfo from '../../components/MessageInfo'
import { Textarea, ActionIcon } from '@mantine/core'
import { BiMailSend } from 'react-icons/bi'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
const PostDetails = () => {
  const [isReplyVisible, setIsReplyVisible] = useState(false)
  const toggleReplyVisibility = () => setIsReplyVisible(!isReplyVisible)

  return (
    <>
      <VStack maxW="2xl" w="full" mx="auto" pb={10} px={4}>
        <MessageInfo toggleReplyVisibility={toggleReplyVisibility} />
        <AnimatePresence>
          {isReplyVisible && (
            <Box
              w="full"
              as={motion.div}
              initial={{
                y: -10,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
            >
              <Textarea
                placeholder="Write a public comment..."
                required
                autosize
                minRows={1}
                rightSection={
                  <ActionIcon variant="light">
                    <BiMailSend size={18} />
                  </ActionIcon>
                }
                maxRows={5}
                mb={10}
              />
            </Box>
          )}
        </AnimatePresence>
        <CommentBox />
      </VStack>
    </>
  )
}

export default PostDetails
