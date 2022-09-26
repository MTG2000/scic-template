import React from "react";

export const useModalState = (initialState: boolean = false) => {
    const [isOpen, setIsOpen] = React.useState(initialState);
    const open = () => setIsOpen(true);
    const onClose = () => setIsOpen(false);

    return { isOpen, open, onClose }
}
