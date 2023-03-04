import {
  addMinutes,
  addSeconds,
  format,
  formatDistanceToNowStrict,
  getTime,
  getUnixTime,
  parse,
  parseISO,
  subDays
} from 'date-fns';
import zhCN from 'date-fns/locale/zh-CN';

const DAY_FORMAT = 'YYYY-MM-DD';
const DAY_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss';

/**
 * 阻塞等待 单位毫秒
 * @param ms
 */
export async function sleep(ms: number) {
  return new Promise<void>((resolve) => setTimeout(() => resolve(), ms));
}

/**
 * 获取当前秒时间戳
 */
export function timestamp4second(date: Date = new Date()) {
  return getUnixTime(date);
}

/**
 * 获取当前毫秒
 */
export function timestamp4millisecond(date: number | Date = new Date()): number {
  if (!date) {
    return getTime(new Date());
  } else {
    if (date instanceof Date) {
      return getTime(date);
    } else {
      if (date.toString().length === 10) {
        return getTime(date * 1000);
      } else {
        return date;
      }
    }
  }
}

/**
 * 时间戳转时间 2021-09-30 20:55:37
 * @param date
 */
export function timestamp2time(date = new Date()) {
  return format(date, DAY_TIME_FORMAT);
}

// 时间转时间戳
export function time2timestamp(date: string | Date = new Date(), formatStr = 'yyyy-MM-dd HH:mm') {
  // 判断是否是带时区的时间
  if (date.toString().indexOf('T') > -1) {
    return Math.floor(parseISO(date.toString()).getTime() / 1000);
  } else if (typeof date === 'string') {
    return parse(date, formatStr, new Date()).getTime() / 1000;
  } else {
    return date.getTime() / 1000;
  }
}

// 日期格式化 2021-09-30
export function formatToDay(date = new Date()) {
  return format(date, DAY_FORMAT);
}
// 09-30
export function formatToDayNoYear(date = new Date()) {
  return format(date, 'MM-DD');
}

// 2021-09-30 00:00:00
export function formatToDayStart(date = new Date()) {
  return format(date, 'YYYY-MM-DD 00:00:00');
}

// 2021-09-30 23:59:59
export function formatToDayEnd(date = new Date()) {
  return format(date, 'YYYY-MM-DD 23:59:59');
}

// 多少秒后的时间戳
export function formatToSecond(second = 0) {
  const time = addSeconds(new Date(), second);
  return getTime(time) / 1000;
}

// 多少分钟后
export function formatToMinute(minute = 0) {
  const time = addMinutes(new Date(), minute);
  return format(time, DAY_TIME_FORMAT);
}

// 多少天前
export function formatToDayBefore(day = 0, formatStr = DAY_FORMAT) {
  const time = subDays(new Date(), day);
  return format(time, formatStr);
}

// 人性化时间
export function formatToHumanTime(date = new Date()) {
  return formatDistanceToNowStrict(date, { addSuffix: true, locale: zhCN });
}

// 时间戳转带时区的时间
export function time2timezone(timestamp = 0) {
  return format(new Date(timestamp * 1000), 'yyyy-MM-ddTHH:mm:ss.SSSxxx');
}
