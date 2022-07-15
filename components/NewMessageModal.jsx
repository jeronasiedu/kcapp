import useStore from '../context/store'
import Rodal from 'rodal'
import {
  Heading,
  HStack,
  VStack,
  CloseButton,
  Divider,
  Textarea,
  Button,
} from '@chakra-ui/react'
function NewMessageModal() {
  const isOpen = useStore((state) => state.isModalOpen)
  const onClose = useStore((state) => state.closeModal)
  return (
    <>
      <Rodal
        visible={isOpen}
        onClose={onClose}
        closeOnEsc={true}
        showCloseButton={false}
        animation="door"
        customMaskStyles={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(0,0,0,0.6)',
        }}
        id="modal-container"
        className="modal-parent"
      >
        <VStack h="full">
          <HStack w="full" justifyContent="space-between">
            <Heading size="md" fontWeight="400">
              Create Post
            </Heading>
            <CloseButton onClick={onClose} />
          </HStack>
          <Divider />
          <Textarea
            placeholder="Don't be afraid to share"
            resize="none"
            h="full"
          />
          <Button
            textTransform="uppercase"
            w="full"
            colorScheme="blue"
            flexShrink="0"
          >
            post
          </Button>
        </VStack>
      </Rodal>
    </>
  )
}
export default NewMessageModal
