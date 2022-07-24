import React from 'react'
import PropTypes from 'prop-types'
import './Modal.css'

/**
 * 
 * @param {Boolean} show
 * @param {funcion} onCloseFunction
 * @param {object, string} styleModalWrapper //Style for Inline react CSS can be string or set of style objects.
 * @param {object, string} styleModalContainer //Style for Inline react CSS can be string or set of style objects.
 * @param {object, string} styleModalButton //Style for Inline react CSS can be string or set of style objects.
 * @param {node} modalHeaderContent //Anything that can be rendered: numbers, strings, elements or an array
 * @param {node} modalBodyContent //Anything that can be rendered: numbers, strings, elements or an array
 * @param {string} buttonContent 
 * @returns HTMLElement
 */

const Modal = ({
    show,
    onCloseFunction,

    styleModalWrapper,
    styleModalContainer,
    styleButton,

    modalHeaderContent,
    modalBodyContent,

    buttonContent

}) => {

    return (
        <>
            {show ?
                <div style={styleModalWrapper}
                    className="modalWrapper"
                    onClick={onCloseFunction} >
                    <div className='modalContainer'
                        style={styleModalContainer}
                        onClick={(e) => e.stopPropagation()}>
                        <section className='modalHeader'>
                            {modalHeaderContent}
                        </section>
                        <section className='modalBody'>
                            {modalBodyContent}
                        </section>
                        <section className='modalFooter'>
                            <button style={styleButton}
                                className="button"
                                onClick={onCloseFunction}>
                                {buttonContent}
                            </button>
                        </section>
                    </div>
                </div>
                : ""
            }
        </>
    )
}

Modal.propTypes = {
    show: PropTypes.bool.isRequired,
    onCloseFunction: PropTypes.func.isRequired,

    styleModalWrapper : PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.object
    ]),
    styleModalContainer : PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
]),
    styleButton:  PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
]),

    modalHeaderContent:PropTypes.node,
    modalBodyContent: PropTypes.node,

    buttonContent: PropTypes.string
}

export default Modal
