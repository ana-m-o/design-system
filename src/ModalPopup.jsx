// Core
import React from 'react';
// Amtd
import { Modal } from 'antd';
// Ant Design Draggable Modal
import { DraggableModal, DraggableModalProvider } from 'ant-design-draggable-modal';

// Utils
import PropTypes from 'prop-types';
function ModalPopup(props) {
    return (
        <>
            <style>
                {`.ant-modal.draggable-modal-sizes {
                    min-width: ${props.minWidth};
                    min-height: ${props.minHeight};
                }`}
            </style>

            { props.isDraggable ? (
                <DraggableModalProvider>
                    <DraggableModal {...props} className="dx-modal-wizard draggable-modal-sizes">
                        {props.children}
                    </DraggableModal>
                </DraggableModalProvider>
            ) : (
                <Modal {...props} />
            )}
        </>
    );
}

ModalPopup.propTypes = {
    isDraggable: PropTypes.bool,
    minWidth   : PropTypes.string,
    minHeight  : PropTypes.string,
};

ModalPopup.defaultProps = {
    isDraggable : false,
    minWidth    : '600px',
    minHeight   : '400px',
    mask        : true,
    maskClosable: false,
};

export default ModalPopup;
