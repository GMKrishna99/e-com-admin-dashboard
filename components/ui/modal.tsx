"use client";

import {
  Dialog,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogContent,
} from "@/components/ui/dialog";

/**
 * Interface representing the properties expected by a modal component.
 */
interface ModalProp {
  //  The title to be displayed in the modal.
  title: string;
  //   The description or content to be displayed in the modal.
  description: string;
  //   A boolean flag indicating whether the modal is currently open or closed.
  isOpen: boolean;
  /**
   * A function to be called when the modal is closed.
   * Typically used to update the state in the parent component or trigger additional actions.
   */
  onClose: () => void;
  /**
   * Optional children to be rendered within the modal.
   * This allows for flexibility in the content of the modal.
   */
  children?: React.ReactNode;
}

export const Modal: React.FC<ModalProp> = ({
  title,
  description,
  isOpen,
  onClose,
  children,
}) => {
  /**
   * Handles the change event triggered when the state of a component, represented by the 'open' parameter,
   * is modified. If the component is closed (open=false), the 'onClose' function is invoked.
   * @param {boolean} open - The state indicating whether the component is open or closed.
   */
  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  return (
    // shadCn Dialog Component
    <Dialog open={isOpen} onOpenChange={onChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div>{children}</div>
      </DialogContent>
    </Dialog>
  );
};
