import { Dialog, Transition } from '@headlessui/react'
import { Fragment, PropsWithChildren, } from 'react'

interface Props {
    isOpen?: boolean;
    onClose?: () => void;
    title?: string
    maxWidth?: number
}

export default function Modal({
    isOpen,
    maxWidth = 652,
    onClose = () => { },
    children }: PropsWithChildren<Props>) {


    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={() => {
                onClose()
            }} >
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel
                                className="transform overflow-hidden transition-all"
                                style={{
                                    width: `min(100vw - var(--padding,16px),${maxWidth}px)`
                                }}>
                                {children}
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}
