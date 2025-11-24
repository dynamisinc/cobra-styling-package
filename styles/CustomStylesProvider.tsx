import React, { createContext, PropsWithChildren, useContext, useState } from 'react';

/**
 * Simplified CustomStylesProvider for COBRA styling package
 * Provides RTL (Right-to-Left) support for internationalization
 *
 * For prototypes, defaults to LTR (Left-to-Right).
 * To enable RTL, wrap your app with CustomStylesProvider and call setDir('rtl')
 */

const context = createContext<PossibleStyleSettings>({} as PossibleStyleSettings);

export const CustomStylesProvider = ({ children }: PropsWithChildren): React.ReactElement => {
  // Default to LTR for most prototypes
  const [dir, setDir] = useState<string>('ltr');

  // Update document body direction when dir changes
  React.useEffect(() => {
    document.body.dir = dir;
  }, [dir]);

  const isRtl = () => {
    return dir === "rtl";
  }

  /**
   * Helper function to flip left/right styles for RTL support
   * Usage: style={getLtrRtlStyle({ paddingLeft: 10, paddingRight: 20 })}
   */
  const getLtrRtlStyle = (style: React.CSSProperties): React.CSSProperties => {
    if (isRtl()) {
      const flippedStyle = { ...style };

      // Swap padding
      if (style.paddingLeft !== undefined || style.paddingRight !== undefined) {
        const tempPaddingLeft = flippedStyle.paddingLeft;
        flippedStyle.paddingLeft = flippedStyle.paddingRight;
        flippedStyle.paddingRight = tempPaddingLeft;
      }

      // Swap margin
      if (style.marginLeft !== undefined || style.marginRight !== undefined) {
        const tempMarginLeft = flippedStyle.marginLeft;
        flippedStyle.marginLeft = flippedStyle.marginRight;
        flippedStyle.marginRight = tempMarginLeft;
      }

      // Swap left/right positioning
      if (style.left !== undefined || style.right !== undefined) {
        const tempLeft = flippedStyle.left;
        flippedStyle.left = flippedStyle.right;
        flippedStyle.right = tempLeft;
      }

      return flippedStyle;
    }
    return style;
  }

  return (
    <context.Provider value={{ dir, setDir, getLtrRtlStyle, isRtl }}>
      {children}
    </context.Provider>
  );
};

/**
 * Hook to access styling utilities
 *
 * @example
 * const { dir, isRtl, getLtrRtlStyle } = useCustomStyles();
 *
 * // Conditional rendering
 * if (isRtl()) { ... }
 *
 * // Style flipping
 * <div style={getLtrRtlStyle({ paddingLeft: 10 })} />
 */
export const useCustomStyles = (): PossibleStyleSettings => {
  const ret = useContext(context);
  if (!ret || !ret.dir) {
    // Return default values if not within provider (for backwards compatibility)
    return {
      dir: 'ltr',
      setDir: () => {},
      getLtrRtlStyle: (style) => style,
      isRtl: () => false
    };
  }
  return ret;
};

export type PossibleStyleSettings = {
  dir: string;
  setDir: (newdir: string) => void;
  getLtrRtlStyle: (style: React.CSSProperties) => React.CSSProperties;
  isRtl: () => boolean;
};
