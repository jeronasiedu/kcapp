import { Box, VStack } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'
import Comment from './Comment'

const CommentBox = ({ isReplyVisible, comments }) => {
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

  return (
    <AnimatePresence>
      {isReplyVisible && (
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

          {comments.map((item, index) => (
            <Comment key={index} {...item} {...comments} />
          ))}
        </VStack>
      )}
    </AnimatePresence>
  )
}

export default CommentBox
