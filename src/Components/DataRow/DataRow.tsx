import React, { PropsWithChildren } from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa';
import IconButton from '../IconButton/IconButton';

interface Props {
    onDelete?: () => void;
    onEdit?: () => void;
    className?: string
}

export default function DataRow(props: PropsWithChildren<Props>) {
    return (
        <div className={`p-16 flex flex-wrap items-start ${props.className}`}>
            <div className="grow">
                {props.children}
            </div>
            <div className="shrink-0">
                {props.onEdit && <IconButton onClick={props.onEdit}><FaEdit className='text-blue-600' /></IconButton>}
                {props.onDelete && <IconButton onClick={props.onDelete}><FaTrash className='text-red-500' /></IconButton>}
            </div>
        </div>
    )
}
