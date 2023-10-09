import ListIcon from 'shared/assets/icons/bi_list.svg';
import TileIcon from 'shared/assets/icons/fe_tiled.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import Icon from 'shared/ui/Icon/Icon';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { ArticleView } from 'entities/Article/model/types/article';
import cls from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
    className?: string,
    currentView?: ArticleView,
    onSetView?: (value: ArticleView) => void
}

const viewTypes = [
    {
        view: ArticleView.LIST,
        icon: ListIcon,
    },
    {
        view: ArticleView.TILE,
        icon: TileIcon,
    },
];

const ArticleViewSelector = (props : ArticleViewSelectorProps) => {
    const { className, currentView, onSetView } = props;

    return (
        <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
            {viewTypes.map((viewType) => (
                <Button
                    theme={ThemeButton.CLEAR}
                    onClick={() => onSetView?.(viewType.view)}
                    key={viewType.view}
                >
                    <Icon
                        Svg={viewType.icon}
                        className={classNames('', { [cls.selected]: currentView === viewType.view }, [])}
                    />
                </Button>
            ))}
        </div>
    );
};

export default ArticleViewSelector;
