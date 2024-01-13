"use client";

import { Modal } from "@/components/ui/modal";
import { useStoreModal } from "@/hooks/use-store-modal";
import { useEffect } from "react";

/**
 * Component representing the setup page.
 * It utilizes the useStoreModal custom hook to manage modal state.
 * The component triggers the modal to open when it is not already open.
 *
 * @returns {JSX.Element} - JSX element representing the SetupPage component.
 */
const SetupPage = () => {
  // Using the useStoreModal hook to access modal state and functions.
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  // Effect to open the modal when it is not already open.
  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  // Render the SetupPage component with a simple message.
  return <div className="p-4">Root Page</div>;
};
export default SetupPage;
