import create from 'zustand'
const useStore = create((set) => ({
  isModalOpen: false,
  openModal: () => set((state) => ({ isModalOpen: true })),
  closeModal: () => set((state) => ({ isModalOpen: false })),
}))

export default useStore
