import { SVGProps, VFC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Icon.module.scss';

interface IconProps {
  className?: string,
  Svg: VFC<SVGProps<SVGSVGElement>>
}

export const Icon = memo<IconProps>(({ Svg, className }) => <Svg className={classNames(classes.Icon, className)} />);
