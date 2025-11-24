import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { Badge, Menu, MenuItem, Tab, TabProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useCustomStyles } from 'styles/CustomStylesProvider';

const StyledTab = styled(Tab)(({ theme }) => ({
  textTransform: 'none',
  color: theme.palette.primary.contrastText,
  '&:hover': {
    background: theme.palette.primary.light
  },
  '&.MuiButtonBase-root': {
    minWidth: 0,
    paddingBottom:5,
    paddingTop:5,
    paddingLeft: 5,
    paddingRight: 5
  },
  '&.Mui-selected': {
    color: theme.palette.primary.contrastText
  },
}));

const StyledActionsIcon = styled(FontAwesomeIcon)(({ theme }) => ({
  '&:hover': {
    background: theme.palette.primary.main,
    borderRadius: '50%'
  },
  padding: 2
})); 

interface CobraTabProps extends TabProps {
  badgeMessage?: string;
  deleteMenuItemText?: string;
  deleteMenuItemIcon?: IconDefinition;
  key?: string;
  onDelete?: (value: string) => void;
  onEdit?: (value: string) => void;
  vertical?: boolean;
}

export const CobraTab = ({
  badgeMessage,
  deleteMenuItemText,
  deleteMenuItemIcon,
  key,
  onDelete,
  onEdit,
  label,
  vertical,
  ...props
}: CobraTabProps) => {

  const {t: translate} = useTranslation();
  const {getLtrRtlStyle} = useCustomStyles();

  const [tabMenuAnchorElement, setTabMenuAnchorElement] = useState<null | HTMLElement | SVGElement>(null);
  const isTabMenuOpen = Boolean(tabMenuAnchorElement);

  const closeMenu = () => {
    setTabMenuAnchorElement(null);
  }

  return (
    <StyledTab
      disableRipple
      key={key}
      {...props}
      icon={vertical ? <div style={getLtrRtlStyle({paddingLeft: 10})}>{props.icon}</div> : props.icon}
      label={
        <div style={ vertical ? { display: 'flex', alignItems: 'center', lineHeight: 'normal', fontSize: '1rem' } : { display: 'flex', alignItems: 'center', lineHeight: 'normal' }}>
          {badgeMessage &&
            <Badge badgeContent={badgeMessage} color="error">
              {label}
            </Badge>
          }
          {!badgeMessage &&
            <span>{label}</span>
          }
          
          {(onDelete || onEdit) && (
            <>
            <StyledActionsIcon
              data-testid={label + "actionsIcon"}
              fontSize={16}
              icon={faEllipsisVertical}
              onClick={(event) => {
                event.stopPropagation();
                if (onDelete || onEdit) {
                  setTabMenuAnchorElement(event.currentTarget);
                }
              }}
            />
            <Menu
              anchorEl={tabMenuAnchorElement}
              open={isTabMenuOpen}
              onClose={closeMenu}
              MenuListProps={{
                'aria-labelledby': 'basic-button'
              }}
            >
              {onEdit && 
                <MenuItem
                  data-testid={label + "actionsMenuItemEdit"}
                  dense
                  onClick={(event) => {
                    closeMenu();
                    event.stopPropagation();
                    onEdit(props.value)
                  }}
                >
                  <FontAwesomeIcon icon={faPenToSquare} style={getLtrRtlStyle({ paddingRight: 5 })} />
                  {translate("Edit")}
                </MenuItem>
              }

              {onDelete && deleteMenuItemIcon != null && deleteMenuItemText != null &&
                <MenuItem
                  data-testid={label + "actionsMenuItemDelete"}
                  dense
                  onClick={(event) => {
                    closeMenu();
                    event.stopPropagation();
                    onDelete(props.value)}
                  }
                >
                  <FontAwesomeIcon icon={deleteMenuItemIcon} style={getLtrRtlStyle({ paddingRight: 5 })} />
                  {deleteMenuItemText}
                </MenuItem>
              }

            </Menu>
            </>
          )}
        </div>
      }
      style={{ minHeight: 48, height: 48}}
    />
  );
};


