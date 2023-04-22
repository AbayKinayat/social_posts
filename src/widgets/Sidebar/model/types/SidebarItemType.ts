import { SVGProps, VFC } from 'react';

export interface SiderbarItemType {
  text: string,
  Icon: VFC<SVGProps<SVGSVGElement>>,
  path: string,
  authOnly?: boolean
}
