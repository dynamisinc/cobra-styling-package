// Stub for CustomStylesProvider - used by CobraPaginatedGrid and CobraDialog
// In a full COBRA application, this would handle RTL (right-to-left) language support

import { CSSProperties } from 'react';

export const useCustomStyles = () => {
  return {
    isRtl: false, // Default to LTR (left-to-right)
    getLtrRtlStyle: (style: CSSProperties) => style // Pass through styles unchanged for LTR
  };
};
