import { memo } from 'react';
import { Button } from 'shared/ui';
import ListIcon from 'shared/assets/icons/list-24-24.svg';
import TiledIcon from 'shared/assets/icons/tiled-24-24.svg';
import { ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './ArticleViewSelect.module.scss';

interface ArticleViewSelectProps {
  view: 'small' | 'big',
  onSelect: (view: 'small' | 'big') => void
}

const viewTypes = [
  {
    view: 'small',
    icon: ListIcon,
  },
  {
    view: 'big',
    icon: TiledIcon,
  },
];

export const ArticleViewSelect = memo<ArticleViewSelectProps>(({ view, onSelect }) => {
  const selectViewHandler = (value: 'small' | 'big') => () => {
    onSelect(value);
  };

  return (
    <div>
      {
        viewTypes.map((type) => (
          <Button
            key={type.view}
            theme={ButtonTheme.CLEAR}
            onClick={selectViewHandler(type.view as 'small' | 'big')}
          >
            <Icon
              className={classNames(classes.icon, {
                [classes.active]: view === type.view,
              })}
              Svg={type.icon}
            />
          </Button>
        ))
      }
    </div>
  );
});
