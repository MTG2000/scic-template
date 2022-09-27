import { ComponentProps, PropsWithChildren } from 'react'
import { BallTriangle } from 'react-loader-spinner'
import { UnionToObjectKeys } from 'src/utils/types/utils'

interface Props {
    size?: 'sm' | 'md' | 'lg'
    color?: 'white' | 'primary'
    fullSize?: boolean
    classes?: {
        containerClasses?: string,
        textClasses?: string
    };
}

const loaderSize: UnionToObjectKeys<Props, 'size', [number, number]> = {
    sm: [24, 24],
    md: [48, 48],
    lg: [96, 96],
}

const textSize: UnionToObjectKeys<Props, 'size'> = {
    sm: 'text-body5 md:text-h6',
    md: 'text-h6 md:text-h5',
    lg: 'text-h4 md:text-h3',
}

const colors: UnionToObjectKeys<Props, 'color'> = {
    white: "#fff",
    primary: "#7B61FF",
}

export default function Loading({ size = 'sm', color = 'primary', classes, fullSize, children }: PropsWithChildren<Props>) {



    return (
        <div className={`
            flex flex-col justify-center items-center 
            ${fullSize && "h-full min-h-[45vh]"}
            ${classes?.containerClasses}
        `}>
            <BallTriangle
                color={colors[color]}
                height={loaderSize[size][0]}
                width={loaderSize[size][1]}
                radius={5}
                ariaLabel="ball-triangle-loading"
                visible={true}
            />
            {children && <p className={`${textSize[size]} font-medium mt-[1.3em] text-gray-600 ${classes?.textClasses}`}>
                {children}
            </p>}
        </div>
    )
}
