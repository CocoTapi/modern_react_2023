import classNames from 'classnames';
import useNavigation from '../hooks/use-navigation';

function Link ({ to, children }) {
    const { navigate } = useNavigation();

    const classes = classNames('text-blue-500');

    const handleClick = (event) => {
        if (event.ctrlKey || event.metaKey) {
            return;
        };

        event.preventDefault();

        navigate(to);
    };
    
    return (
        <a className={classes} href={to} onClick={handleClick}>
            {children}
        </a>
    )
}

export default Link;