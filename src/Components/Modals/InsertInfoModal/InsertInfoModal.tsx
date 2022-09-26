import { Fragment, useState } from 'react'
import Button from 'src/Components/Button/Button'
import Modal from '../Modal/Modal'
import { FaPlus } from 'react-icons/fa'
import { Dialog } from '@headlessui/react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Card from 'src/Components/Card/Card'

interface IForm {
    email: string;
    name: string
    age: number;
}

const schema = yup.object({
    email: yup.string().trim().email().required(),
    name: yup.string().trim().min(4).required(),
    age: yup.number().positive().min(18).max(150).required(),
}).required();

export default function InsertInfoModal() {

    const { register, handleSubmit, formState: { errors }, } = useForm<IForm>({
        resolver: yupResolver(schema),
        defaultValues: {
            email: "",
            name: "",
            age: 20,
        },
    });

    const onSubmit = handleSubmit(data => {
        console.log(data);
    })


    return (
        <Card >
            <form onSubmit={onSubmit} className=" relative ">
                <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                >
                    Insert Info
                </Dialog.Title>
                <p className="text-body5 mt-16 font-medium" >
                    Your website
                </p>
                <div className="input-wrapper mt-8 relative">
                    <input
                        type='text'
                        className="input-text"
                        placeholder="john@google.com"
                        {...register("email")}
                    />
                </div>
                {
                    errors.email && <p className="input-error">
                        {errors.email.message}
                    </p>
                }

                <div>
                    < p className="text-body5 mt-16 font-medium" >
                        Name
                    </p >
                    <div className="input-wrapper mt-8 relative">
                        <input
                            className="input-text"
                            placeholder="John Doe"
                            {...register("name")}
                        />
                    </div>
                    <p className='input-error'>{errors.name?.message}</p>
                </div>

                <div>
                    < p className="text-body5 mt-16 font-medium" >
                        Age
                    </p >
                    <div className="input-wrapper mt-8 relative">
                        <input
                            className="input-text"
                            placeholder="John Doe"
                            {...register("age")}
                        />
                    </div>
                    <p className='input-error'>{errors.age?.message}</p>
                </div>




                <div className="flex justify-center mt-24">
                    <Button type='submit' fullWidth color='primary' >
                        Submit
                    </Button>
                </div>


            </form>
        </Card>
    )
}
