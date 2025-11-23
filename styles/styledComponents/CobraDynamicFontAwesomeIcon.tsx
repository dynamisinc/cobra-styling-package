import { useEffect, useState } from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconSizes } from 'utilities/icons/icons';
import { fasl } from "@fortawesome/sharp-light-svg-icons";
import { fak } from '@awesome.me/kit-909045e8fc/icons';

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

    const sharpLightPrefix = "fa-sharp fa-light fa-";
    const kitPrefix = "fa-kit fa-";

    if (iconName.startsWith(sharpLightPrefix)) {
      const iconNameWithoutPrefix = iconName.substring(sharpLightPrefix.length);
      const iconDef = Object.values(fasl).find(icon => icon.iconName === iconNameWithoutPrefix);
      setIconDefinition(iconDef || null);
    } else if (iconName.startsWith(kitPrefix)) {
      const iconNameWithoutPrefix = iconName.substring(kitPrefix.length);
      const iconDef = Object.values(fak).find(icon => icon.iconName === iconNameWithoutPrefix);
      setIconDefinition(iconDef || null);
    } else {
      //TODO: update when alternates to fontawesome sharp-light and kit become a thing
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
  // else if () {
  //   This block will be when we allow custom icons for event categories beyond font awesome
  // }
  else {
    return <></>
  }
  
}