# Setting up styled components with MUI

Adding in some thoughts here as I come across any snags with the styled components

1. Need an interface added in to the component so it recognizes any extra props you want to add in
   - Note here I'm extending `PaperProps` so the styled component gets treated like whatever we're extending
   - But please add in interfaces wherever possible :)
2. Need this if you're adding in custom props, without it we get a warning that react doesn't recognize the prop on the element
3. I _strongly_ recommend using the theme wherever possible if we're coloring anything. This way it'll play nicely with matching the current theme
4. Easy to add in CSS selectors, just throw them in quotes

```typescript
import { styled } from '@mui/material/styles';
import { Paper, PaperProps } from '@mui/material';

// [1]
interface IStyledComponent extends PaperProps {
  isHovering: boolean;
}

const StyledComponent = styled(Paper, {
  shouldForwardProp: (prop) => typeof prop === 'string' && isPropValid(prop), // [2]
})<IStyledComponent>(({ theme, isHovering }) => ({
  position: 'absolute',
  borderRadius: '4px',
  backgroundColor: theme.palette.background.default, // [3]
  opacity: isHovering ? '1' : '0.6',
  '.some-class': {
    // [4]
    borderBottom: '1px solid #ccc',
  },
}));
```

```typescript
import React, { FC, useState } from 'react';
import { StyledComponent } from './StyledComponent';

const App: FC = () => {
  const [isHovering, setisHovering] = useState(false);

  return (
    <div>
      <StyledComponent isHovering={isHovering}>//child elements etc.</StyledComponent>
    </div>
  );
};

export default App;
```
