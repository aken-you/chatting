import { ICON_NAME } from '@constants/index';

import { ReactComponent as Chatting } from '@assets/chatting.svg';
import { ReactComponent as ChevronDown } from '@assets/chevronDown.svg';
import { ReactComponent as ChevronLeft } from '@assets/chevronLeft.svg';
import { ReactComponent as Home } from '@assets/home.svg';
import { ReactComponent as Moon } from '@assets/moon.svg';
import { ReactComponent as Plus } from '@assets/plus.svg';
import { ReactComponent as Search } from '@assets/search.svg';
import { ReactComponent as Sun } from '@assets/sun.svg';

const ICONS: Record<string, React.FunctionComponent<React.SVGProps<SVGSVGElement>>> = {
  [ICON_NAME.CHATTING]: Chatting,
  [ICON_NAME.CHEVRON_DOWN]: ChevronDown,
  [ICON_NAME.CHEVRON_LEFT]: ChevronLeft,
  [ICON_NAME.HOME]: Home,
  [ICON_NAME.MOON]: Moon,
  [ICON_NAME.PLUS]: Plus,
  [ICON_NAME.SEARCH]: Search,
  [ICON_NAME.SUN]: Sun,
};

type Name = (typeof ICON_NAME)[keyof typeof ICON_NAME];

interface Props {
  name: Name;
  width?: number;
  height?: number;
  fill?: string;
}

const Icon = ({ name, width = 32, height = 32, fill }: Props) => {
  const Icon = ICONS[name];

  return <Icon width={width} height={height} fill={fill} />;
};

export default Icon;
