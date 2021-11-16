import PropTypes from 'prop-types';
import * as React from 'react';
import {useCallback, useMemo, useRef, useState} from 'react';
import BaseModal, {ModalProps as BaseModalProps} from '@restart/ui/Modal';

export interface ModalProps extends Omit<BaseModalProps,
    | 'role'
    | 'renderBackdrop'
    | 'renderDialog'
    | 'transition'
    | 'backdropTransition'
    | 'children'> {
    size?: 'sm' | 'lg' | 'xl';
    fullscreen?:
        | true
        | 'sm-down'
        | 'md-down'
        | 'lg-down'
        | 'xl-down'
        | 'xxl-down';
    dialogClassName?: string;
    contentClassName?: string;
}

const propTypes = {
    /**
     * Render a large, extra large or small modal.
     * When not provided, the modal is rendered with medium (default) size.
     * @type ('sm'|'lg'|'xl')
     */
    size: PropTypes.string,

    /**
     * Renders a fullscreen modal. Specifying a breakpoint will render the modal
     * as fullscreen __below__ the breakpoint size.
     *
     * @type (true|'sm-down'|'md-down'|'lg-down'|'xl-down'|'xxl-down')
     */
    fullscreen: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
}
