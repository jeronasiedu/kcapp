import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  CloseButton,
  Heading,
  HStack,
  IconButton,
  Text,
  VStack,
} from '@chakra-ui/react'
import { ActionIcon, Textarea } from '@mantine/core'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { BiMailSend } from 'react-icons/bi'
import { BsHeart, BsReply } from 'react-icons/bs'
const Comment = ({ author, text, upvote }) => {
  const [isReplyVisible, setIsReplyVisible] = useState(false)
  const toggleReplyVisibility = () => setIsReplyVisible(!isReplyVisible)
  return (
    <VStack w="85%" ml="auto" alignSelf="flex-end">
      <VStack
        bg="white"
        as={motion.article}
        initial={{
          y: -20,
        }}
        animate={{
          y: 0,
        }}
        exit={{
          opacity: 0,
        }}
        p={3}
        rounded="md"
        alignItems="flex-start"
        spacing={3}
        boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px"
      >
        <HStack w="full" justifyContent="space-between">
          <HStack>
            <Avatar
              src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
              alt="user avatar"
              size="sm"
            />
            <Heading size="sm" fontWeight={400}>
              {author}
            </Heading>
            <Text fontSize="sm" color="GrayText">
              . 12h
            </Text>
          </HStack>
          <CloseButton />
        </HStack>

        <Text color="gray.600" noOfLines={[4, 5, 6]}>
          {text}
        </Text>
        <HStack w="full" justifyContent="space-between">
          <HStack spacing={6}>
            <ButtonGroup isAttached variant="outline" size="sm">
              <IconButton icon={<BsHeart />} />
              <Button cursor="default">{upvote}</Button>
            </ButtonGroup>
          </HStack>
          <IconButton
            variant="outline"
            icon={<BsReply />}
            size="sm"
            onClick={toggleReplyVisibility}
          />
        </HStack>
      </VStack>
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
              placeholder={`Reply ${author}`}
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
    </VStack>
  )
}

export default Comment
