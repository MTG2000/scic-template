
import React from "react";
import axios from 'axios'

export function random(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export function randomItem<T>(...args: T[]): T {
  return args[Math.floor(Math.random() * args.length)];
}

export function randomItems(cnt: number, ...args: any[]) {
  return shuffle(args).slice(0, cnt);
}

export function isMobileScreen() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}




export function trimText(text: string | undefined | null, length: number) {
  if (!text) return '';
  return text.slice(0, length) + (text.length > length ? "..." : "")
}

export function generateId() {
  // TODO: Change to proper generator
  return Math.random().toString();
}

export function shuffle<T>(_array: Array<T>) {
  let array = [..._array]
  let currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}


export function generateList(component: React.ReactElement, cnt: number) {
  return Array(cnt).fill(0).map((_, idx) => React.cloneElement(component, { key: idx }))
}

export function toSlug(str: string) {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
  ;
}

export function capitalize(s?: string) {
  return s && s[0].toUpperCase() + s.slice(1);
}

export const withHttp = (url: string) => !/^https?:\/\//i.test(url) ? `http://${url}` : url;

export function getPropertyFromUnknown<Value = string>(obj: unknown, prop: string | number | symbol): Value | null {
  if (typeof obj === 'object' && obj !== null && prop in obj)
    return (obj as any)[prop as any] as Value;
  return null
}



export async function lightningAddressToPR(address: string, amount_in_sat: number) {

  // parse lightning address and return a url that can be
  // used in a request
  function lightningAddressToLnurl(lightning_address: string) {
    const [name, domain] = lightning_address.split("@");
    return `https://${domain}/.well-known/lnurlp/${name}`;
  }

  // when pressing tip or selecting an amount.
  // this is used for caching so the frontend doesnt
  // have to make an additional http request to get
  // the callback url for future visits
  async function getLnurlCallbackUrl(lightning_address: string) {
    return axios.get(lightningAddressToLnurl(lightning_address)).then(
      (response) => {
        return response.data.callback;
      }
    );
  }


  const amount = amount_in_sat * 1000; // msats
  let lnurlCallbackUrl = await getLnurlCallbackUrl(address);
  return axios
    .get(lnurlCallbackUrl, { params: { amount } })
    .then((prResponse) => {
      return prResponse.data.pr as string;
    });
}


export function extractErrorInfo(error: any, options?: Partial<{ defaultMessage: string }>) {

  const {
    defaultMessage = "An Unexpected error happened...",
  } = options ?? {}


  try {
    const data = error.response.data;
    return { title: data.title ?? "UnexpectedError", detail: data.detail ?? defaultMessage }
  } catch (error) {
    return { title: "UnexpectedError", detail: options?.defaultMessage ?? "An Unexpected error happened..." }
  }
}
