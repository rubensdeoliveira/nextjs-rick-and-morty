import React, { useState, useEffect } from 'react'

import ReactModal from 'react-modal'

interface ModalProps {
  children: any
  isOpen: boolean
  maxWidth: string
  setIsOpen: () => void
}

export function Modal({ children, isOpen, maxWidth, setIsOpen }: ModalProps) {
  const [modalStatus, setModalStatus] = useState(isOpen)

  useEffect(() => {
    setModalStatus(isOpen)
  }, [isOpen])

  return (
    <ReactModal
      shouldCloseOnOverlayClick={!false}
      onRequestClose={setIsOpen}
      isOpen={modalStatus}
      ariaHideApp={false}
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          background: 'transparent',
          // background: 'var(--black)',
          // color: 'var(--white)',
          borderRadius: '0px',
          width: '85%',
          maxWidth,
          border: 'none',
          padding: 0,
          // height: '800px',
          overflow: 'hidden',
        },
        overlay: {
          backgroundColor: '#121214e6',
        },
      }}
    >
      {children}
    </ReactModal>
  )
}
