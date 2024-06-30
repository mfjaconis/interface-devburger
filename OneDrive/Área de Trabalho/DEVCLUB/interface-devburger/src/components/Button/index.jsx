import { ContainerButton } from './styles'
import PorpTypes from 'prop-types'

export function Button({ children }) {
    return (
        <>
            <ContainerButton>{children}</ContainerButton>
        </>
    )
}

Button.propTypes = {
    children: PorpTypes.string
}