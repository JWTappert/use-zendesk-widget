import { useEffect } from 'react';

export default function useAdminZendeskWidget(key, options) {
  useEffect(() => {
    const zendeskInitScript = document.createElement('script');
    zendeskInitScript.id = 'ze-snippet';
    zendeskInitScript.src = `https://static.zdassets.com/ekr/snippet.js?key=${key}`;
    zendeskInitScript.async = true;
    document.body.appendChild(zendeskInitScript);
    window.zESettings = {...options};
    return () => {
      document.body.removeChild(zendeskInitScript);
    };
  }, []);
}

const canUseDOM = () => {
  return !(typeof window === 'undefined' || !window.document || !window.document.createElement);
}

export const ZendeskWidget = (...args) => {
  if (canUseDOM && window.zE) {
    window.zE.apply(null, args)
  } else {
    console.warn("Zendesk has not finished booting");
  }
}