"use client";

import { Modal } from "@/components/ui/modal";
import { useStoreModal } from "@/hooks/use-store-modal";
import * as z from "zod";

/**
 * Component representing a modal for creating a new store.
 * It utilizes the useStoreModal custom hook to manage modal state.
 */

const formSchema = z;
export const StoreModal = () => {
  // Using the useStoreModal hook to access modal state and functions.
  const storeModal = useStoreModal();

  return (
    // Modal component for creating a new store.
    <Modal
      title="Create Store"
      description="Add a new Store to Start Business"
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    ></Modal>
  );
};

109;
