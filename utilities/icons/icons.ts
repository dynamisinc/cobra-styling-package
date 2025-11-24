import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

/**
 * Icon size constants for COBRA styling package
 *
 * Use these for consistent icon sizing throughout your application
 */

export const smallIconSize = 16;
export const mediumIconSize = 24;
export const largeIconSize = 32;
export const xlIconSize = 48;

export enum IconSizes {
  Small = 16,
  Medium = 24,
  Large = 32,
  Xl = 48
}

/**
 * Converts a FontAwesome IconDefinition to an SVG string
 * Useful for AG Grid cell renderers and other contexts where you need SVG markup
 *
 * @param icon - FontAwesome IconDefinition
 * @param size - Icon size from IconSizes enum
 * @param color - Optional color (defaults to currentColor)
 * @returns SVG markup as string
 *
 * @example
 * import { faEdit } from '@fortawesome/sharp-light-svg-icons';
 *
 * const editIcon = getFontAwesomeIconSvg(faEdit, IconSizes.Small, '#0020c2');
 *
 * // Use in AG Grid column definition
 * {
 *   headerName: '',
 *   cellRenderer: () => editIcon
 * }
 */
export const getFontAwesomeIconSvg = (icon: IconDefinition, size: IconSizes, color?: string): string => {
  const iconWidth = size * 1.25;
  if (!color) {
    color = "currentColor";
  }

  // FontAwesome icon structure indices
  const viewBoxWidthIndex = 0;
  const viewBoxHeightIndex = 1;
  const svgPathDataIndex = 4;

  return `<svg height="${size}" width="${iconWidth}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${icon.icon[viewBoxWidthIndex]} ${icon.icon[viewBoxHeightIndex]}" style="overflow:visible;box-sizing:content-box"><path fill="${color}" d="${icon.icon[svgPathDataIndex]}"></path></svg>`;
};
