import propTypes from 'prop-types';

function Button ({ 
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    rounded,
    outline,
}) {

    return (
        <button>{children}</button>
    )
};

Button.propTypes = {
    checkVariationValue: (primary, secondary, success, warning, danger) => {
        const count = 
        Number(!!primary) +
        Number(!!secondary) +
        Number(!!warning) +
        Number(!!success) +
        Number(!!danger);

    if (count > 1) {
        return new Error(
            'Only one of primary, seconday, success, warning, danger can be true'
            )
        }
    }
};

export default Button;