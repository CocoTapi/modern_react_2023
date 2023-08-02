import className from 'classnames';

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
    const classes = className('flex items-center px-3 py-1.5 border', {
        'border-blue-400 bg-blue-400 text-white': primary,
        'border-gray-900 bg-gray-900 text-white': secondary,
        'border-green-400 bg-green-400 text-white': success,
        'border-yellow-400 bg-yellow-400 text-white': warning,
        'border-red-300 bg-red-300 text-white': danger,
        'rounded-full': rounded,
        'bg-white': outline,
        'text-blue-400': outline && primary,
        'text-gray-900': outline && secondary,
        'text-green-400': outline && success,
        'text-yellow-400': outline && warning,
        'text-red-300': outline && danger,
    });

    return (
        <button className={classes}>{children}</button>
    )
};

Button.propTypes = {
    checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
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