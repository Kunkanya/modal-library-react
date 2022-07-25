![Create react app](https://img.shields.io/badge/build_with-create_react_app-09D3AC?style=for-the-badge&logo=Create-React-App)
![NPM](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)

remmer-react-modal-library
This project is to create a modal library for react app project. You can freely install it and use it in to your project. The styles of modal can be customized as you wish. 

# Table of contents #
1. [How to install](#install)
2. [How to use](#usage)
3. [Modal properties](#properties)
4. [Example](#example)


## 1. <a name="install">How to install</a>
```bash 
$ npm install remmer-react-modal-library
```

## 2. <a name="usage">How to use</a>
Simply import Modal modul on the top of your project whereas it needs.

```bash
import { Modal } from 'remmer-react-modal-library
```

## 3. <a name="properties">Modal properties</a>
The following are the properties of the modal that can be customised.


| Required properties       |       Types        |  description |
| :---                     |     :---:         |          :--- |
| show                     |    boolean         | boolean to pass in oder to open the modal. This can be used with useState(). see Example.
| onCloseFunction          |function            | a function to pass in order to close the modal. This can be used with useState(). see Example.

| Optional properties      |       Types        |  description  |
| :---                      |     :---:         |          :--- |
| styleModalWrapper        | string , object    |customized the modal wrapper style ex.backgroundcolor.  React-inline-styling pattern will be used.
| styleModalContainer      | string , object    | customized the modal container style ex.background-color , border-style and etc.   React-inline-styling pattern will be used.|
| styleModalHeader      | string , object    | customized the modal Header style ex.font-family , font-size, font-color etc.   React-inline-styling pattern will be used.|
| styleModalBody      | string , object    | customized the modal container style ex.font-family , font-size, font-color etc.     React-inline-styling pattern will be used.|
| styleModalButton         | string , object    | customized the button style ex.background-color , border-style, font-color, font-family , font-weight, etc.   React-inline-styling pattern will be used.
| modalHeaderContent       | node*              | customized the content of the modal´s header. 
| modalBodyContent         | node*              | customized the content of the modal´s body. 
| buttonContent            | node*              | customized the content of the button.  

##### *node can be string, number , array or elements.


## 4. <a name="example">Example</a>

### 4.1 Defaut style modal.
if you do not wish to change the style od the modal. You can just update your text in `modalBodyContent` and `buttonContent` for optional properties. Then the modal is ready to use. 

![This is a defautl style modal](./src/asset/defaultModal.png)


### 4.2 Customized modal
You can freely customized your modal as you wish like below colorful example!

![This is a customized style modal](./src/asset/customizedModal.png)

```reactJS
import React, { useState } from 'react';
import './App.css';
import logo from './asset/logo.png'

import Modal from 'r2-react-modal-library/dist/components/Modal';


function Home() {
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
                    styleModalWrapper={{ backgroundColor: "pink" }}
                    styleModalContainer={{
                        backgroundColor: "yellow",
                        border: "5px solid green"
                    }}
                    styleModalHeader={{
                        color: "orange",
                        fontSize: "36px",
                        borderBottom: "1px solid gray "
                    }}
                    styleModalBody={{
                        color: "blue",
                        fontSize: "24px",
                        fontWeight: "Bold"
                    }}
                    styleButton={{
                        backgroundColor: "red",
                        fontSize: "20px",
                        fontWeight: "Bold"
                    }}
                    modalHeaderContent={
                        <img style={{ width: '50px', height: '50px' }} src={logo} alt="logo" />
                    }
                    modalBodyContent="MODAL BODY's CONTENT"

                    buttonContent="Button Content as you wish"

                />
                : ""
            }

        </div>
    )

}

export default Home;

```
