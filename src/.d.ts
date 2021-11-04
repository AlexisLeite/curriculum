declare module '*.module.sass';
declare module '*.jpg';
declare module '*/translations';
declare module '*/translate' {
  export default function getTranslations(name: string): any;
  export function translate(name: string): string;
}
