import type { IconType } from "react-icons";
import {
  FaBars,
  FaCheck,
  FaChevronDown,
  FaEnvelope,
  FaExpandAlt,
  FaFacebookF,
  FaGem,
  FaGift,
  FaHeadset,
  FaInfinity,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaQuoteLeft,
  FaRegCalendarAlt,
  FaRegCircle,
  FaRegClock,
  FaRegGem,
  FaShieldAlt,
  FaSpinner,
  FaStar,
  FaTimes,
} from "react-icons/fa";
import { HiOutlineArrowLongLeft, HiOutlineArrowLongRight } from "react-icons/hi2";
import { PiStarFourFill } from "react-icons/pi";

// Every icon the site can use, by the name templates.json stores. A new icon is added here once.
const icons: Record<string, IconType> = {
  FaBars,
  FaCheck,
  FaChevronDown,
  FaEnvelope,
  FaExpandAlt,
  FaFacebookF,
  FaGem,
  FaGift,
  FaHeadset,
  FaInfinity,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaQuoteLeft,
  FaRegCalendarAlt,
  FaRegClock,
  FaRegGem,
  FaShieldAlt,
  FaSpinner,
  FaStar,
  FaTimes,
  HiOutlineArrowLongLeft,
  HiOutlineArrowLongRight,
  PiStarFourFill,
};

// The long arrows are only given a width: they sit in a 2:1 box, so their height does not move the layout.
const longArrows = new Set(["HiOutlineArrowLongLeft", "HiOutlineArrowLongRight"]);

type Props = {
  name: string;
  className?: string;
};

export const Icon = ({ name, className = "" }: Props) => {
  const Glyph = icons[name];
  if (!Glyph) {
    if (process.env.NODE_ENV !== "production") console.warn(`Icon "${name}" is not in components/ui/Icon.tsx`);
    return <FaRegCircle aria-hidden="true" className={className} />;
  }
  if (longArrows.has(name)) return <Glyph aria-hidden="true" preserveAspectRatio="xMidYMid slice" className={`aspect-[2/1] h-auto ${className}`} />;
  return <Glyph aria-hidden="true" className={className} />;
};
