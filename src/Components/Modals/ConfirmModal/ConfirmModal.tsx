import React, { ComponentProps } from 'react'
import Button from 'src/Components/Button/Button';
import Card from 'src/Components/Card/Card'

interface Props {
    title?: string
    content?: string;
    actionName?: string
    onCancel?: () => void;
    onConfirm?: () => void
    btnColor?: ComponentProps<typeof Button>['color']
}


export default function ConfirmModal(props: Props) {

    const title = props.title ?? "Confirm Action";
    const content = props.content ?? "Confirm Action";
    const actionName = props.actionName ?? "Confirm"
    return (
        <Card>
            <h3 className="text-h3 font-bold">{title}</h3>
            <p className="text-body4 mt-16 text-gray-400">
                {content}
            </p>
            <div className="flex justify-end gap-12 mt-32">
                <Button onClick={props.onCancel}>Cancel</Button>
                <Button color={props.btnColor ?? 'black'} onClick={props.onConfirm}>{actionName}</Button>
            </div>
        </Card>
    )
}
