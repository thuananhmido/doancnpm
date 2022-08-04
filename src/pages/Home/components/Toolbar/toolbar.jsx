import React from 'react'
import {useState} from 'react'
import Header from '../Header/header';
import Modal from '../Modal/modal';
import NavbarMobile from '../NavbarMobile/navbarmobile';
export default function ToolBar() {

    const [openMenu, setOpenMenu] = useState(false);
    const [open,setOpen] = useState(false);

    const handleOpenMenu = (() => {
        setOpenMenu(true)
    })
    const handleCloseMenu = (() => {
        setOpenMenu(false)
    })
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };
  return (
    <div className="handle-toolbar">
        <div className="toolbar">
            <a href="#" 
               className="handle-toolbar-item"
               onClick={handleOpen}>
            <span className="toolbar-icon">
                <i className="bi bi-person" />
            </span>
            <span className="toolbar-label">Account</span>
            </a>
            {openMenu ? (
                <a href="#" 
                    className="handle-toolbar-item"
                    onClick={handleCloseMenu}>
                        <span className="toolbar-icon">
                            <i className="bi bi-list" />
                        </span>
                    <span className="toolbar-label">Menu</span>
                </a>
            ) : (
                <a href="#" 
                className="handle-toolbar-item"
                onClick={handleOpenMenu}>
                    <span className="toolbar-icon">
                        <i className="bi bi-list" />
                    </span>
                    <span className="toolbar-label">Menu</span>
                </a>
            )}
            
            <a href="#" className="handle-toolbar-item">
            <span className="toolbar-icon">
                <i className="bi bi-cart" />
                <span className="badge bg-danger rounded-pill ms-1">2</span>
            </span>
            <span className="toolbar-label">24$</span>
            </a>
        </div>
        {openMenu && (
            <NavbarMobile handleOpenMenu = {handleOpenMenu} />
        )}
        {open && (
        <Modal  handleClose = {handleClose} handleOpen = {handleOpen}/>
        )}
    </div>
  )
}
