import { useCallback, useState } from "react";

type CopiedValue = string | null;
type CopyFn = (text: string) => Promise<boolean | undefined>;

export const useCopyToClipboard: () => [CopiedValue, CopyFn] = () => {
  
  const [copiedText, setCopiedText] = useState<CopiedValue>(null);
  
  const copy: CopyFn = useCallback(async text => {
    if (!navigator?.clipboard) {
      console.warn('Clipboard not supported');
      return false;
    }

    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
    } catch (error) {
      console.log('Copy failed', error);
      setCopiedText(null);
      return false;
    }
  }, []);

  return [copiedText, copy];
}