import React from 'react';
import PropTypes from 'prop-types';
import {Variant} from "./types";
import {ReactComponent as IconGen48} from '../media/icons/duotune/general/gen048.svg';

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: Variant
    show?: boolean
    onClose?: (a: any, b: any) => void
    title?: string
}

const AlertHeading = () => {

};

const AlertLink = () => {

};

const propTypes = {
    /**
     * The Alert visual variant
     *
     * @type {'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light'}
     */
    variant: PropTypes.string,
};

const defaultProps = {
    variant: 'primary',
};

/*const Alert = React.forwardRef<HTMLDivElement, AlertProps>( (uncontrolledProps: AlertProps, ref) => {

});*/

const Alert: React.FC<AlertProps> = ({children, title}) => {
    const icon = (
        <span className="svg-icon svg-icon-2hx svg-icon-danger me-4">
            <IconGen48 />
        </span>
    );

    return (
        <div className="alert alert-danger d-flex align-items-center p-5 mb-10">
            {icon}
            <div className="d-flex flex-column">
                {title ? (<h4 className="mb-1 text-danger">{title}</h4>) : ''}
                {children}
            </div>
        </div>
    );
};

Alert.displayName = 'Alert';
Alert.defaultProps = defaultProps;
Alert.propTypes = propTypes;

export default Object.assign(Alert, {
    Link: AlertLink,
    Heading: AlertHeading,
});
