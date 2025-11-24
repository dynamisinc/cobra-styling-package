# Changelog

All notable changes to the COBRA Styling Package will be documented in this file.

## [1.0.1] - 2025-11-21

### Added
- **CustomStylesProvider.tsx** - Simplified RTL (Right-to-Left) support utility
  - Provides `useCustomStyles()` hook for RTL/LTR direction handling
  - Includes `getLtrRtlStyle()` helper for automatic style flipping
  - No external dependencies (removed LocalForage/i18n requirements)
  - Works standalone in prototype projects

- **utilities/icons/icons.ts** - Icon utility functions
  - Icon size constants (`smallIconSize`, `mediumIconSize`, etc.)
  - `IconSizes` enum for consistent sizing
  - `getFontAwesomeIconSvg()` function for converting icons to SVG markup
  - Useful for AG Grid cell renderers and other contexts

### Changed
- Updated `install.sh` to copy utilities folder
- Updated `install.ps1` to copy utilities folder
- Updated GitHub workflow to verify new files

### Fixed
- Fixed missing dependency errors in components that import `CustomStylesProvider`
- Fixed missing dependency errors in components that import `utilities/icons/icons`
- Made `install.sh` executable for GitHub Actions

## [1.0.0] - 2025-11-21

### Added
- Initial release of COBRA Styling Package
- Complete COBRA theme and styling files
- 25+ styled React components
- 5 comprehensive documentation files (2,400+ lines)
- Bash and PowerShell installer scripts
- GitHub Actions verification workflow
- Issue and PR templates
- MIT License

### Package Contents
- **styles/** - Theme, CobraStyles, LayoutStyles, and 25+ styled components
- **components/shared/Grid/** - AG Grid components with COBRA styling
- **docs/** - Complete documentation suite
- **install.sh** and **install.ps1** - Automated installation scripts

---

## Understanding Version Numbers

We follow [Semantic Versioning](https://semver.org/):
- **MAJOR.MINOR.PATCH** (e.g., 1.0.1)
- **MAJOR** - Breaking changes
- **MINOR** - New features (backwards compatible)
- **PATCH** - Bug fixes (backwards compatible)

---

## Migration Guides

### From 1.0.0 to 1.0.1

No breaking changes. Simply pull the latest version:

```bash
# Re-run installer in your project
cd my-project
git clone https://github.com/dynamisinc/cobra-styling-package.git temp
bash temp/install.sh
rm -rf temp
```

The new files will be automatically copied:
- `src/styles/CustomStylesProvider.tsx`
- `src/utilities/icons/icons.ts`

---

## What Changed and Why

### CustomStylesProvider.tsx

**Previous Issue**: Components imported `CustomStylesProvider` from COBRA's main codebase, which had dependencies on LocalForage and i18n utilities.

**Solution**: Created a standalone version that:
- Works without external COBRA dependencies
- Provides same API (`useCustomStyles()` hook)
- Defaults to LTR (Left-to-Right) for most prototypes
- Supports RTL when needed

**Usage Example**:
```typescript
import { useCustomStyles } from './styles/CustomStylesProvider';

const MyComponent = () => {
  const { getLtrRtlStyle, isRtl } = useCustomStyles();

  return (
    <div style={getLtrRtlStyle({ paddingLeft: 10 })}>
      {isRtl() ? 'RTL Mode' : 'LTR Mode'}
    </div>
  );
};
```

### utilities/icons/icons.ts

**Previous Issue**: Components like `CobraSaveButton` imported icon utilities from COBRA's codebase.

**Solution**: Extracted the essential icon utilities:
- Size constants and enums
- SVG conversion function for AG Grid and other uses

**Usage Example**:
```typescript
import { IconSizes, getFontAwesomeIconSvg } from './utilities/icons/icons';
import { faEdit } from '@fortawesome/sharp-light-svg-icons';

// Use in AG Grid
const editIconSvg = getFontAwesomeIconSvg(faEdit, IconSizes.Small, '#0020c2');
```

---

## Future Plans

### Upcoming Features (v1.1.0)
- [ ] Additional form components
- [ ] More grid utilities
- [ ] Enhanced documentation with video tutorials
- [ ] TypeScript strict mode compatibility

### Under Consideration
- [ ] Storybook integration
- [ ] Component playground
- [ ] Theme customization guide
- [ ] Dark mode support

---

## Contributing

Found a bug or have a suggestion? Please [open an issue](https://github.com/dynamisinc/cobra-styling-package/issues).

Want to contribute? See our [Pull Request Guidelines](.github/PULL_REQUEST_TEMPLATE.md).

---

**Repository**: https://github.com/dynamisinc/cobra-styling-package
**Documentation**: See `docs/` directory after installation
