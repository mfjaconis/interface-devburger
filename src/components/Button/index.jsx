import { ContainerButton } from './styles'
import PorpTypes from 'prop-types'

export function Button({ children, ...props }) {

    return (
        <>
            <ContainerButton {...props}>{children}</ContainerButton>
        </>
    )
}

Button.propTypes = {
    children: PorpTypes.string
}