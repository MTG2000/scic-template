import React from 'react'
import Button from 'src/Components/Button/Button';
import BasicModal from 'src/Components/Modals/BasicModal/BasicModal'
import InsertInfoModal from 'src/Components/Modals/InsertInfoModal/InsertInfoModal'
import Modal from 'src/Components/Modals/Modal/Modal';
import { useModalState } from 'src/utils/hooks'

export default function HomePage() {

    const insertInfoModal = useModalState(false);
    const basicModal = useModalState(false);

    return (
        <div  >
            <div className="flex gap-16">
                <Button onClick={basicModal.open}>Open Basic Modal</Button>
                <Button onClick={insertInfoModal.open}>Open Insert Info Modal</Button>
            </div>
            <Modal {...basicModal} maxWidth={440}>
                <BasicModal />
            </Modal>
            <Modal {...insertInfoModal} maxWidth={667}>
                <InsertInfoModal />
            </Modal>
        </div>
    )
}
