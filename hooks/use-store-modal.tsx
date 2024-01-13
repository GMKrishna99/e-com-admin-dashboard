import { create } from "zustand";

/**
 * Interface representing the shape of the store for managing modal state.
 */
interface useStoreModalStore {
  /**
   * A boolean flag indicating whether the modal is currently open or closed.
   */
  isOpen: boolean;

  /**
   * Function to be called to open the modal. Updates the 'isOpen' state to true.
   */
  onOpen: () => void;

  /**
   * Function to be called to close the modal. Updates the 'isOpen' state to false.
   */
  onClose: () => void;
}

/**
 * Custom hook for managing modal state using Zustand.
 * It provides functions to open and close the modal, as well as the current state of the modal.
 *
 * @returns {useStoreModalStore} An object representing the modal store with isOpen, onOpen, and onClose properties.
 */
export const useStoreModal = create<useStoreModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
