import {
  HomeIcon,
  HamburgerMenuIcon,
  PaperPlaneIcon,
  ExclamationTriangleIcon,
  ArrowLeftIcon,
  LayersIcon,
  PlusIcon,
  MinusIcon,
  StarIcon,
  HeartIcon,
  HeartFilledIcon,
  DashboardIcon,
  GearIcon,
  ExitIcon,
  TrashIcon,
  VideoIcon,
} from "@radix-ui/react-icons";
import BurmeseFlag from "@/assets/myanmar-flag.png";
import EnglishFlag from "@/assets/english-flag.png";

export type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  logo: (props: IconProps) => (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3 9C3 6.5 4.5 4.25 7.5 1.5C10.5 4.25 12 6.5 12 9C12 11.4853 9.98528 13.5 7.5 13.5C5.01472 13.5 3 11.4853 3 9ZM10.9524 8.30307C9.67347 7.82121 8.2879 8.46208 6.98956 9.06259C5.9327 9.55142 4.93365 10.0135 4.09695 9.82153C4.03357 9.55804 4 9.28294 4 9C4 7.11203 5.02686 5.27195 7.5 2.87357C9.66837 4.97639 10.725 6.65004 10.9524 8.30307Z"
        fill="currentColor"
        fill-rule="evenodd"
        clip-rule="evenodd"
      ></path>
    </svg>
  ),
  cart: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      {...props}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
      />
    </svg>
  ),
  BurmeseFlag: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img
      src={BurmeseFlag}
      className="object-cover w-full"
      alt="Burmese_Flag"
      {...props}
    />
  ),
  EnglishFlag: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img
      src={EnglishFlag}
      className="object-cover rounded-full"
      alt="USA_Flag"
      {...props}
    />
  ),
  home: HomeIcon,
  menu: HamburgerMenuIcon,
  paperPlane: PaperPlaneIcon,
  exclamation: ExclamationTriangleIcon,
  arrowLeft: ArrowLeftIcon,
  layers: LayersIcon,
  plus: PlusIcon,
  minus: MinusIcon,
  star: StarIcon,
  heart: HeartIcon,
  heartFill: HeartFilledIcon,
  dashboard: DashboardIcon,
  gear: GearIcon,
  exit: ExitIcon,
  trash: TrashIcon,
  Video: VideoIcon,
};
