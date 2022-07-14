import { Box, VStack } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'
import Comment from './Comment'
import { messages } from '../data/dummy'
const CommentBox = ({}) => {
  const replyVariant = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
    exit: {
      opacity: 0,
    },
  }
  const { query } = useRouter()
  const message = messages?.find((message) => message.id === +query.id)
  const comments = message?.comments
  return (
    <AnimatePresence>
      <VStack
        as={motion.article}
        variants={replyVariant}
        initial="initial"
        animate="animate"
        exit="exit"
        _before={{
          pos: 'absolute',
          content: "''",
          left: 5,
          top: 0,
          h: '100%',
          w: '1.5px',
          bg: 'gray.400',
          rounded: 'md',
        }}
        _after={{
          pos: 'absolute',
          content: "''",
          left: 5,
          top: 0,
          transform: 'translate(-50%)',
          w: 2.5,
          h: 2.5,
          rounded: 'full',
          bg: 'blue.500',
        }}
        pos="relative"
        spacing={3}
      >
        <Box
          pos="absolute"
          left={5}
          bottom={0}
          w={2.5}
          h={2.5}
          bg="blue.500"
          rounded="full"
          transform="translate(-50%)"
        />

        {comments?.map((comment, index) => (
          <Comment key={index} {...comment} />
        ))}
      </VStack>
    </AnimatePresence>
  )
}

export default CommentBox
