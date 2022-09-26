
import { Link, } from 'react-router-dom'
import Button from 'src/Components/Button/Button'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useMutation, } from "react-query";
import Card from '../Components/Card/Card';
interface Form {
    email: string;
    password: string
}

const schema = yup.object({
    email: yup.string().trim().email().required(),
    password: yup.string().trim().min(4).required(),
}).required();

export default function Login() {


    const { register, handleSubmit, formState: { errors }, watch } = useForm<Form>({
        resolver: yupResolver(schema),
        defaultValues: {
            email: '',
            password: ''
        },
        mode: "onSubmit",
    });
    const emailValue = watch('email')

    const { data: res } = useMutation({

    })





    const onSubmit = handleSubmit(data => {
        // loginMutation.mutate(data)
    })



    return (
        <div className="page-container">
            <Card className='w-full max-w-[400px] mx-auto'>
                <form onSubmit={onSubmit} className=" relative ">
                    <h2 className="text-primary-600 text-h3 font-bolder mb-32 text-center">
                        Login
                    </h2>
                    < p className="text-body5 mt-16 font-medium" >
                        Your website
                    </p >
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
                            Password
                        </p >
                        <div className="input-wrapper mt-8 relative">
                            <input
                                type='password'
                                className="input-text"
                                placeholder="XXXXXX"
                                {...register("password")}
                            />
                        </div>
                        <p className='input-error'>{errors.password?.message}</p>
                    </div>




                    <div className="flex justify-center mt-24">

                        <Button fullWidth key={2} color='primary'   >
                            Login
                        </Button>
                    </div>


                    <div className="relative">

                        <hr className="my-32" />
                        <span className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border text-gray-500 text-body5 p-4'>
                            OR
                        </span>
                    </div>

                    <p className=' text-body5 text-gray-500 text-center'>
                        <span> Need an account ? </span>
                        <Link to='/auth/signup' className=' underline' state={{ email: emailValue }}>
                            Sign Up
                        </Link>
                    </p>
                </form>
            </Card>
        </div>
    )
}
