import { useTheme } from '@mui/material';
import { CSSProperties, PropsWithChildren } from 'react';

interface CobraFieldsetProps extends PropsWithChildren {
  legend: string;
  style?: CSSProperties;
}
export const CobraFieldset = ({children, legend, style}: CobraFieldsetProps) => {

  const theme = useTheme();

  const defaultStyle: CSSProperties = {
      borderColor: theme.palette.border.main,
      borderRadius: 4,
      borderStyle: 'solid',
      borderWidth: 1,
      marginTop: -11,
      paddingBlockStart: 0,
      paddingBlockEnd: 2,
      paddingInlineStart: 12,
      paddingInlineEnd: 12
    }

  return (
    <fieldset style={{...defaultStyle, ...style }}>
      <legend>
        <span style={{ color: theme.palette.primary.dark, fontSize: 12 }}>{legend}</span>
      </legend>
      {children}
    </fieldset>
  )
}