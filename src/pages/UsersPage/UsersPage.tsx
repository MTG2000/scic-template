import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { getAllUsers, User, } from 'src/api'
import DataRow from 'src/Components/DataRow/DataRow'
import ErrorMessage from 'src/Components/ErrorMessage/ErrorMessage'
import Loading from 'src/Components/Loading/Loading'
import ConfirmModal from 'src/Components/Modals/ConfirmModal/ConfirmModal'
import InsertInfoModal from 'src/Components/Modals/InsertInfoModal/InsertInfoModal'
import Modal from 'src/Components/Modals/Modal/Modal'
import { useModalState } from 'src/utils/hooks'


export default function UsersPage() {

    const query = useQuery('users', getAllUsers);

    const [selectedUser, setSelectedUser] = useState<User | null>(null)

    const deleteModal = useModalState();
    const editModal = useModalState();

    if (query.isLoading)
        return <Loading size='lg' >
            Loading Users...
        </Loading>

    if (query.error)
        return <ErrorMessage />

    const onDelete = (user: User) => {
        setSelectedUser(user);
        deleteModal.open();
    }


    const onEdit = (user: User) => {
        setSelectedUser(user);
        editModal.open();
    }

    return (
        <div>
            <h1 className='text-h1'>Users Page</h1>
            {query.data?.map((u, idx) => <DataRow
                key={u.id}
                className={idx % 2 === 0 ? "bg-gray-100" : "bg-white"}
                onDelete={() => onDelete(u)}
                onEdit={() => onEdit(u)}
            >
                <div className="flex flex-col gap-12">
                    <p className="text-body3 text-gray-900">{u.name}</p>
                    <p className="text-body4 text-gray-600">{u.email}</p>
                    <p className="text-body4 text-gray-600">{u.age} years old</p>
                </div>
            </DataRow>)}
            <Modal {...editModal} maxWidth={667}>
                <InsertInfoModal initValue={selectedUser!} />
            </Modal>

            <Modal {...deleteModal} maxWidth={667}>
                <ConfirmModal
                    title='Delete User'
                    content='Are you sure you want to delete this user??'
                    actionName='Delete'
                    onCancel={deleteModal.onClose}
                    btnColor='red'
                    onConfirm={() => alert(`Delete user ${selectedUser?.id}`)}
                />
            </Modal>
        </div>
    )
}
