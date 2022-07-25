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


| Required properties      |       Types        |  description |
| :---                      |     :---:         |          :--- |
| show                     |    boolean         | boolean to pass in oder to open the modal. This can be used with useState(). see Example.
| onCloseFunction          |function            | a function to pass in order to close the modal. This can be used with useState(). see Example.

| Optional properties      |       Types        |  description  |
| :---                      |     :---:         |          :--- |
| styleModalWrapper        | string , object    |customized the modal wrapper style ex.backgroundcolor.  React-inline-styling pattern will be used.
| styleModalContainer      | string , object    | customized the modal container style ex.background-color , border-style and etc.   React-inline-styling pattern will be used.|
| styleModalButton         | string , object    | customized the button style ex.background-color , border-style, font-color, font-family , font-weight, etc.   React-inline-styling pattern will be used.
| modalHeaderContent       | node*              | customized the content of the modal´s header. 
| modalBodyContent         | node*              | customized the content of the modal´s body. 
| buttonContent            | node*              | customized the content of the button.  

##### *node can be string, number , array or elements.


## 3. <a name="example">Example</a>

```react

```
