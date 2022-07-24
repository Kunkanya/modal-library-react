import Modal from "./lib/components/Modal/Modal";

import React, { useState } from 'react'

const App = () => {
    const [isShow, setIsShow] = useState(false)
    const showModal = () => {
        setIsShow(true)
    }
    return (
        <div>
            <button onClick={showModal}>
                ShowModal
            </button>
            {isShow ? 
                <Modal
                show={isShow}
                onCloseFunction={() => { setIsShow(false) }}
                modalHeaderContent={"Modal Header!"}
                modalBodyContent="Succesfully created new employee!!!" 
                buttonContent="Close"
                buttonOnclickFn={()=>{ setIsShow(false)}}
                />
                : ""
            }
        </div>
    )
}

export default App
