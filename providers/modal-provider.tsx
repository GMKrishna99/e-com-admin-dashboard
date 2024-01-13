"use client";

import { useEffect, useState } from "react";

import { StoreModal } from "@/components/modals/store-modal";

/**
 * Component responsible for providing modal functionality.
 * It ensures that the modal-related components are mounted properly.
 *
 * @returns {JSX.Element | null} - JSX element representing the ModalProvider component or null if not mounted.
 */
export const ModalProvider = () => {
  // State to track whether the component is mounted.
  const [isMounted, setIsMounted] = useState(false);

  // Effect to set isMounted to true when the component mounts.
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // If the component is not mounted yet, return null.
  if (!isMounted) {
    return null;
  }

  // Otherwise, render the StoreModal component.
  return (
    <>
      <StoreModal />
    </>
  );
};
