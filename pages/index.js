import { Button, IconButton, Show, VStack } from '@chakra-ui/react'
import { Player } from '@lottiefiles/react-lottie-player'
import Head from 'next/head'
import AuthorMessage from '../components/AuthorMessage'
import NewMessageModal from '../components/NewMessageModal'
import useStore from '../context/store'
import { messages } from '../data/dummy'
export default function Home() {
  const openModal = useStore((state) => state.openModal)
  return (
    <>
      <Head>
        <title>KC APP</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <VStack spacing={5} maxW="2xl" mx="auto" px={4} pb={24} pos="relative">
        <Show above="md">
          <Button
            rounded="full"
            colorScheme="blue"
            w={2 / 3}
            onClick={openModal}
          >
            What&apos;s on your mind
          </Button>
        </Show>
        {messages.map((message, index) => (
          <AuthorMessage message={message} key={index} />
        ))}
        <Show below="md">
          <IconButton
            icon={
              <Player
                src="/chat.json"
                autoplay
                loop
                style={{
                  width: '1.8rem',
                }}
              />
            }
            size="lg"
            isRound
            colorScheme="blue"
            pos="fixed"
            right="6"
            bottom="5"
            boxShadow="rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px"
            onClick={openModal}
          />
        </Show>

        <NewMessageModal />
      </VStack>
    </>
  )
}
