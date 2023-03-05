import { classNames } from 'shared/lib/classNames/classNames';
import './Loader.scss';

interface LoaderProps {
    className? : string
}

const Loader = ({ className }: LoaderProps) => (
    <div className={classNames('loader', {}, [className])} />
);

export default Loader;
