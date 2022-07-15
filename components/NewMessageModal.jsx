import useStore from '../context/store'
import { Modal, Textarea } from '@mantine/core'
import { Button } from '@chakra-ui/react'
function NewMessageModal() {
  const isOpen = useStore((state) => state.isModalOpen)
  const onClose = useStore((state) => state.closeModal)
  return (
    <>
      <Modal
        opened={isOpen}
        onClose={onClose}
        title="Create a Post"
        centered
        size="lg"
        transition="rotate-left"
        overlayBlur={2}
      >
        <Textarea
          placeholder="Feel free, pour everything you have in your mind"
          label="Express yourself"
          required
          autosize
          minRows={4}
          maxRows={10}
          mb={10}
        />
        <Button w="full" colorScheme="blue">
          Submit
        </Button>
      </Modal>
    </>
  )
}
export default NewMessageModal
