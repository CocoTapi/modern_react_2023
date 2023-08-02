import className from 'classnames';

const finalClassName = className('px-1.5', {
    'bg-blue-400': true,

})

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
        <button className='px-3 py-1.5 border border-blue-600 bg-blue-400 text-white'>{children}</button>
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