import { useEffect, useState } from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconSizes } from 'utilities/icons/icons';
import * as regularIcons from "@fortawesome/free-regular-svg-icons";
import * as solidIcons from "@fortawesome/free-solid-svg-icons";

/**
 * CobraDynamicFontAwesomeIcon - Renders FontAwesome icons dynamically by name
 *
 * This component uses FontAwesome Free icons (regular and solid).
 *
 * For prototypes using custom icon kits:
 * You can extend this component by importing your custom kit and adding
 * support for additional icon prefixes.
 *
 * @example
 * // Using regular icons
 * <CobraDynamicFontAwesomeIcon
 *   iconName="fa-regular fa-circle-user"
 *   backgroundColor="#0020c2"
 *   color="#ffffff"
 *   iconSize={IconSizes.Medium}
 * />
 *
 * @example
 * // Using solid icons
 * <CobraDynamicFontAwesomeIcon
 *   iconName="fa-solid fa-plus"
 *   backgroundColor="#008000"
 *   color="#ffffff"
 *   iconSize={IconSizes.Small}
 * />
 */

interface CobraDynamicFontAwesomeIconProps {
  backgroundColor?: string;
  color?: string;
  iconName?: string | null;
  iconSize?: IconSizes;
}

export const CobraDynamicFontAwesomeIcon = ({backgroundColor, color, iconName, iconSize}: CobraDynamicFontAwesomeIconProps) => {
  const [iconDefinition, setIconDefinition] = useState<IconDefinition | null>(null);

  useEffect(() => {
    if (!iconName) {
      setIconDefinition(null);
      return;
    }

    // Support for free-regular icons
    const regularPrefix = "fa-regular fa-";
    // Support for free-solid icons
    const solidPrefix = "fa-solid fa-";

    if (iconName.startsWith(regularPrefix)) {
      const iconNameWithoutPrefix = iconName.substring(regularPrefix.length);
      // Convert kebab-case to camelCase with 'fa' prefix (e.g., "circle-user" -> "faCircleUser")
      const camelCaseName = 'fa' + iconNameWithoutPrefix
        .split('-')
        .map(part => part.charAt(0).toUpperCase() + part.slice(1))
        .join('');
      const iconDef = regularIcons[camelCaseName as keyof typeof regularIcons] as IconDefinition | undefined;
      setIconDefinition(iconDef || null);
    } else if (iconName.startsWith(solidPrefix)) {
      const iconNameWithoutPrefix = iconName.substring(solidPrefix.length);
      // Convert kebab-case to camelCase with 'fa' prefix (e.g., "plus" -> "faPlus")
      const camelCaseName = 'fa' + iconNameWithoutPrefix
        .split('-')
        .map(part => part.charAt(0).toUpperCase() + part.slice(1))
        .join('');
      const iconDef = solidIcons[camelCaseName as keyof typeof solidIcons] as IconDefinition | undefined;
      setIconDefinition(iconDef || null);
    } else {
      // For custom icon kits or other icon libraries, extend this component
      // by adding additional else-if branches with your custom logic
      setIconDefinition(null);
    }
  }, [iconName]);

  const getPadding = () => {
    switch (iconSize) {
      case IconSizes.Large:
        return 10;
      case IconSizes.Medium:
        return 8;
      case IconSizes.Small:
        return 5;
      case IconSizes.Xl:
        return 12;
      default:
        return 5;
    }
  }

  if (backgroundColor && color && iconDefinition) {
    return (
      <FontAwesomeIcon
        color={color}
        icon={iconDefinition as IconDefinition}
        fontSize={(iconSize ?? IconSizes.Small) + 'px'}
        style={{ backgroundColor:backgroundColor, borderRadius:'50%', padding:getPadding() }}
      />
    )
  }
  // For custom implementations (images, SVGs, etc.), extend this component
  // by adding additional rendering logic here
  else {
    return <></>
  }

}
