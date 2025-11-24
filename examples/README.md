# COBRA Styling Package - Examples

This directory contains working examples demonstrating the COBRA styling package with **license-free dependencies**.

## Available Examples

### 1. Simple Prototype

A complete React + TypeScript application demonstrating:
- ✅ FontAwesome FREE icons (no Pro license)
- ✅ AG Grid Community Edition (no Enterprise license)
- ✅ All COBRA styled components
- ✅ Common patterns (dashboard, list, form, dialogs)

**Location**: `./simple-prototype/`

**Quick Start**:
```bash
cd simple-prototype

# Windows PowerShell
.\setup-cobra-styles.ps1
npm install
npm start

# Mac/Linux
bash setup-cobra-styles.sh
npm install
npm start
```

See [simple-prototype/README.md](simple-prototype/README.md) for details.

---

## Purpose of Examples

These examples serve multiple purposes:

1. **Validation**: Prove the package works with free dependencies
2. **Templates**: Start new prototypes by cloning an example
3. **Learning**: See COBRA patterns in action
4. **Testing**: Validate changes to the styling package
5. **Documentation**: Live code examples for engineers

---

## Creating New Examples

To create a new example:

1. Create a directory: `mkdir my-example`
2. Set up React + TypeScript project
3. Copy COBRA styling files (use simple-prototype scripts as template)
4. Create `README.md` documenting what the example demonstrates
5. Add entry to this README

### Example Template Structure

```
my-example/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── shared/
│   │       └── Grid/
│   ├── pages/
│   ├── styles/
│   │   ├── Theme.ts
│   │   ├── CobraStyles.ts
│   │   ├── LayoutStyles.ts
│   │   ├── CustomStylesProvider.tsx
│   │   └── styledComponents/
│   ├── utilities/
│   │   └── icons/
│   ├── App.tsx
│   ├── index.tsx
│   └── index.css
├── package.json
├── tsconfig.json
├── setup-cobra-styles.sh
├── setup-cobra-styles.ps1
└── README.md
```

---

## Testing Examples

Before committing changes to the styling package, test examples:

```bash
# Test simple-prototype
cd simple-prototype
npm install
npm run build  # Should succeed
npm test       # Should pass
npm start      # Should render correctly
```

---

## Contributing Examples

Good examples to add:

- **Dashboard Example**: Charts, cards, stats
- **Data Entry**: Complex forms with validation
- **Admin Interface**: User management, settings
- **Reporting**: Tables, exports, filters
- **Mobile Responsive**: Optimized for mobile devices

---

## Documentation

For complete COBRA styling documentation:
- [COBRA_STYLING_GUIDE.md](../docs/COBRA_STYLING_GUIDE.md)
- [PROTOTYPE_SETUP_GUIDE.md](../docs/PROTOTYPE_SETUP_GUIDE.md)
- [AI_AGENT_CONTEXT.md](../docs/AI_AGENT_CONTEXT.md)
- [PROTOTYPE_TO_COBRA_MIGRATION_GUIDE.md](../docs/PROTOTYPE_TO_COBRA_MIGRATION_GUIDE.md)

---

**Version**: 1.0.0
**Last Updated**: 2025-11-24
**Purpose**: Working examples of license-free COBRA styling
