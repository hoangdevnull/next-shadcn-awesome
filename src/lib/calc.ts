/**
 * ! Use this when you need to calculate anything in blockchain.
 * TODO: Make any type to better type but from now it acceptable.
 * @author hoang.pham
 */

import bigDecimal from 'js-big-decimal';
import numeral from 'numeral';

type ReturnType<T> = T extends true | undefined ? string : bigDecimal;

type Parameter = boolean | undefined;

const parseInput = (a: any, b: any) => {
  let firstNum = null;
  let secondNum = null;

  if (a instanceof bigDecimal) {
    firstNum = a;
  } else {
    firstNum = new bigDecimal(a);
  }

  if (b instanceof bigDecimal) {
    secondNum = b;
  } else {
    secondNum = new bigDecimal(b);
  }

  return [firstNum, secondNum] as const;
};

export const multiply = <T extends Parameter>(a: any, b: any, pretty = false as T): ReturnType<T> => {
  const [firstNum, secondNum] = parseInput(a, b);
  const result = firstNum.multiply(secondNum);
  if (pretty) return result.getPrettyValue(undefined, undefined) as ReturnType<T>;
  return result as ReturnType<T>;
};

export const div = <T extends Parameter>(a: any, b: any, pretty = false as T): ReturnType<T> => {
  const [firstNum, secondNum] = parseInput(a, b);

  const result = firstNum.divide(secondNum, undefined);
  if (pretty) return result.getPrettyValue(undefined, undefined) as ReturnType<T>;
  return result as ReturnType<T>;
};

export const plus = <T extends Parameter>(a: any, b: any, pretty = false as T): ReturnType<T> => {
  const [firstNum, secondNum] = parseInput(a, b);

  const result = firstNum.add(secondNum);
  if (pretty) return result.getPrettyValue(undefined, undefined) as ReturnType<T>;
  return result as ReturnType<T>;
};

export const subtract = <T extends Parameter>(a: any, b: any, pretty = false as T): ReturnType<T> => {
  const [firstNum, secondNum] = parseInput(a, b);

  const result = firstNum.subtract(secondNum);
  if (pretty) return result.getPrettyValue(undefined, undefined) as ReturnType<T>;
  return result as ReturnType<T>;
};

export const fixed = (str: any, scale = 2) => {
  if (String(str).includes('.')) {
    const parts = str.split('.');
    return `${parts[0]}.${parts[1].slice(0, scale)}`;
  }
  return str;
};

export const prettyNumber = (a: any) => new bigDecimal(a).getPrettyValue(undefined, undefined);

export const big = (a: any) => new bigDecimal(a);

export const nFormat = (num: any) => numeral(num).format('0[a]');

export const formatString = (str: string): string => str?.toLowerCase();

export const calculateFileSize = (size: number) => {
  const fileSizeInBytes = Math.ceil(size);
  const fileSizeInKilobytes = Math.ceil(fileSizeInBytes / 1024);
  const fileSizeInMegabytes = Math.ceil(fileSizeInKilobytes / 1024);

  return {
    bytes: fileSizeInBytes,
    kilobytes: fileSizeInKilobytes,
    megabytes: fileSizeInMegabytes,
  };
};
