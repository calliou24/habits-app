import React from 'react'


type ModalPropsType = {
    children: React.ReactNode,
    styles: React.CSSProperties,

}

function Modal({
                   children,
                   styles
               }: ModalPropsType) {
    return <section style={{...styles}}>
        {children}
    </section>
}


export default Modal