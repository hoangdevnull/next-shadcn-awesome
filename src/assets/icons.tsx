import type { LucideIcon } from 'lucide-react';
import {
  Camera,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Copy,
  HelpCircle,
  Loader2,
  LogOut,
  User,
} from 'lucide-react';

import angleDown from '@/assets/svg/angle-down-solid.svg';
import arrowDown from '@/assets/svg/arrow-down.svg';
import arrowLeft from '@/assets/svg/arrow-left.svg';
import bell from '@/assets/svg/bell.svg';
import bookmark from '@/assets/svg/bookmark.svg';
import calendar from '@/assets/svg/calendar.svg';
import check from '@/assets/svg/check.svg';
import checkCircle from '@/assets/svg/check-circle.svg';
import checkCircleXs from '@/assets/svg/check-circle-xs.svg';
import close from '@/assets/svg/close.svg';
import closeCircle from '@/assets/svg/close-circle.svg';
import discord from '@/assets/svg/discord.svg';
import dollar from '@/assets/svg/dollar.svg';
import edit from '@/assets/svg/edit.svg';
import eye from '@/assets/svg/eye.svg';
import eyeHidden from '@/assets/svg/eye-hidden.svg';
import facebook from '@/assets/svg/facebook.svg';
import facebookCircle from '@/assets/svg/facebook_circle.svg';
import google from '@/assets/svg/google.svg';
import insecurity from '@/assets/svg/insecurity.svg';
import link from '@/assets/svg/link.svg';
import location from '@/assets/svg/location.svg';
import menu from '@/assets/svg/menu.svg';
import message from '@/assets/svg/message.svg';
import metamask from '@/assets/svg/metamask.svg';
import moneyBag from '@/assets/svg/money-bag.svg';
import playSolid from '@/assets/svg/play-solid.svg';
import plus from '@/assets/svg/plus.svg';
import plusCircle from '@/assets/svg/plus-circle.svg';
import reload from '@/assets/svg/reload.svg';
import search from '@/assets/svg/search.svg';
import security from '@/assets/svg/security.svg';
import star from '@/assets/svg/star.svg';
import trash from '@/assets/svg/trash.svg';
import twitter from '@/assets/svg/twitter.svg';
import twitterFill from '@/assets/svg/twitter-fill.svg';
import unlink from '@/assets/svg/unlink.svg';
import upload from '@/assets/svg/upload.svg';
import warning from '@/assets/svg/warning.svg';
import X from '@/assets/svg/X.svg';
import youtube from '@/assets/svg/youtube.svg';

export type Icon = LucideIcon;

const IconList = {
  user: User,
  edit,
  check,
  playSolid,
  angleDown,
  warning,
  eyeHidden,
  insecurity,
  arrowLeft,
  unlink,
  X,
  facebookCircle,
  twitter,
  eye,
  camera: Camera,
  link,
  bookmark,
  search,
  closeCircle,
  reload,
  checkCircle,
  upload,
  metamask,
  trash,
  plusCircle,
  security,
  star,
  plus,
  location,
  moneyBag,
  message,
  bell,
  spinner: Loader2,
  arrowDown,
  dollar,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  copy: Copy,
  logout: LogOut,
  helpCircle: HelpCircle,
  google,
  facebook,
  twitterFill,
  discord,
  youtube,
  menu,
  close,
  calendar,
  checkCircleXs,
  chevronDown: ChevronDown,
  chevronUp: ChevronUp,
};

export const Icons = IconList as Record<keyof typeof IconList, Icon>;
