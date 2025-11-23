# COBRA Styling Documentation Suite

## Overview

This documentation suite provides everything you need to create prototypes and applications that match COBRA's look and feel. Whether you're a developer building manually or working with AI coding agents, these guides ensure consistency and quality.

---

## 📚 Documentation Files

### 1. **COBRA_STYLING_GUIDE.md** - The Complete Reference
**Purpose**: Comprehensive styling guide covering every aspect of COBRA's design system

**Use this when:**
- Starting a new prototype from scratch
- Looking up specific component usage
- Checking color values or spacing constants
- Learning COBRA patterns for the first time
- Need reference for any styling question

**Key Sections:**
- Complete color palette with hex values
- All 25+ styled components with examples
- Layout architecture and dimensions
- Spacing and padding standards
- Form patterns and validation
- Grid implementation
- Quick start guide

**File Size**: ~900 lines
**Reading Time**: 30-45 minutes (skim), 2 hours (deep read)

---

### 2. **STYLING_COMPLIANCE_ANALYSIS.md** - Working Examples
**Purpose**: Analysis of two reference pages showing COBRA styling in practice

**Use this when:**
- You want to see real-world examples
- Building a similar feature (forms, grids, tabs)
- Checking if your implementation is compliant
- Learning advanced patterns
- Understanding complex component interactions

**Reference Implementations:**
- **Admin Role Form**: Simple two-column form with grids, dropdowns, validation
- **Facilities Form**: Complex multi-section form with tabs, file uploads, maps, dialogs

**Key Patterns Demonstrated:**
- Form validation and error handling
- Dynamic tabs with add/remove
- File upload/download/preview
- Grid cell editors
- Nested dialogs
- Unsaved changes handling
- Permission-based UI

**File Size**: ~450 lines
**Reading Time**: 20-30 minutes

---

### 3. **PROTOTYPE_SETUP_GUIDE.md** - Step-by-Step Implementation
**Purpose**: Practical guide for setting up prototypes with COBRA styling

**Use this when:**
- Setting up a new prototype project
- Need step-by-step installation instructions
- Want to copy the right files
- Working with AI coding agents
- Creating reusable templates

**What's Included:**
- Quick setup checklist
- Detailed installation process
- Files to copy and where
- Common patterns (copy-paste ready)
- Troubleshooting guide
- AI agent strategies
- Best practices checklist

**File Size**: ~650 lines
**Reading Time**: 15 minutes (quick start), 1 hour (complete)

---

### 4. **AI_AGENT_CONTEXT.md** - Quick Reference for AI
**Purpose**: Concise context file designed for AI coding agents

**Use this when:**
- Starting a session with Claude Code, Copilot, or ChatGPT
- Need quick rule reminders
- Want to paste essential context
- Reviewing AI-generated code for compliance
- Teaching AI agents COBRA patterns

**What's Included:**
- Essential rules (do/don't examples)
- Component quick reference
- Color and spacing constants
- Common patterns (copy-paste ready)
- Compliance checklist
- Mistake examples with corrections
- Response templates for AI

**File Size**: ~400 lines
**Reading Time**: 5-10 minutes

---

## 🚀 Quick Start Guide

### For Your First Prototype (30 minutes)

1. **Read**: PROTOTYPE_SETUP_GUIDE.md (Quick Setup Checklist section)
2. **Copy**: Style files using provided commands
3. **Reference**: COBRA_STYLING_GUIDE.md (Quick Start section)
4. **Build**: Create test page from template
5. **Verify**: Check against examples

### For Working with AI Agents

1. **Paste**: AI_AGENT_CONTEXT.md into your AI conversation
2. **Reference**: Point AI to COBRA_STYLING_GUIDE.md sections
3. **Review**: Use compliance checklist from AI_AGENT_CONTEXT.md
4. **Compare**: Check output against STYLING_COMPLIANCE_ANALYSIS.md

### For Building Complex Features

1. **Review**: STYLING_COMPLIANCE_ANALYSIS.md for similar patterns
2. **Reference**: COBRA_STYLING_GUIDE.md component sections
3. **Copy**: Pattern templates from PROTOTYPE_SETUP_GUIDE.md
4. **Adapt**: Customize for your specific needs

---

## 📖 How to Use This Documentation

### Scenario 1: "I'm building a simple list page"

**Path**:
1. Open PROTOTYPE_SETUP_GUIDE.md
2. Go to "Pattern 1: Simple List Page with Create"
3. Copy the template
4. Customize for your needs
5. Reference COBRA_STYLING_GUIDE.md > Data Grids for grid setup

**Expected Time**: 30-60 minutes

---

### Scenario 2: "I'm building a complex form with tabs and file uploads"

**Path**:
1. Open STYLING_COMPLIANCE_ANALYSIS.md
2. Study "Facilities Form Compliance" section
3. Review patterns: tabs, file management, nested dialogs
4. Copy relevant patterns from PROTOTYPE_SETUP_GUIDE.md
5. Reference COBRA_STYLING_GUIDE.md for specific components

**Expected Time**: 2-4 hours

---

### Scenario 3: "I need to check if my code is COBRA-compliant"

**Path**:
1. Open AI_AGENT_CONTEXT.md
2. Use "Validation Checklist for AI Agents"
3. Compare against "Common Mistakes to Avoid"
4. Review STYLING_COMPLIANCE_ANALYSIS.md for similar features
5. Fix any issues found

**Expected Time**: 15-30 minutes

---

### Scenario 4: "What color should I use for this element?"

**Path**:
1. Open COBRA_STYLING_GUIDE.md
2. Go to "Color Palette" section
3. Find the appropriate semantic color
4. Use `theme.palette.*` reference

**Expected Time**: 2-5 minutes

---

### Scenario 5: "How do I work with Claude Code on this project?"

**Path**:
1. Copy AI_AGENT_CONTEXT.md into conversation
2. Tell Claude: "Review COBRA_STYLING_GUIDE.md before generating code"
3. Use prompts from PROTOTYPE_SETUP_GUIDE.md > "AI Agent Prompts Library"
4. Review output using checklist from AI_AGENT_CONTEXT.md

**Expected Time**: Setup 5 minutes, ongoing efficiency boost

---

## 🎯 Documentation Matrix

| Task | Primary Doc | Secondary Doc | Reference Doc |
|------|-------------|---------------|---------------|
| Setup new project | PROTOTYPE_SETUP_GUIDE.md | - | COBRA_STYLING_GUIDE.md |
| Learn COBRA patterns | COBRA_STYLING_GUIDE.md | STYLING_COMPLIANCE_ANALYSIS.md | - |
| Copy-paste patterns | PROTOTYPE_SETUP_GUIDE.md | STYLING_COMPLIANCE_ANALYSIS.md | - |
| Work with AI agent | AI_AGENT_CONTEXT.md | PROTOTYPE_SETUP_GUIDE.md | COBRA_STYLING_GUIDE.md |
| Check compliance | AI_AGENT_CONTEXT.md | STYLING_COMPLIANCE_ANALYSIS.md | - |
| Look up color/spacing | COBRA_STYLING_GUIDE.md | AI_AGENT_CONTEXT.md | - |
| Build complex form | STYLING_COMPLIANCE_ANALYSIS.md | PROTOTYPE_SETUP_GUIDE.md | COBRA_STYLING_GUIDE.md |
| Troubleshoot styling | PROTOTYPE_SETUP_GUIDE.md | COBRA_STYLING_GUIDE.md | - |

---

## 📂 File Organization

### Recommended Structure in Your Prototype

```
my-prototype/
├── src/
│   ├── docs/                              # Documentation
│   │   ├── COBRA_STYLING_GUIDE.md        # Complete reference
│   │   ├── STYLING_COMPLIANCE_ANALYSIS.md # Examples
│   │   ├── PROTOTYPE_SETUP_GUIDE.md      # Setup guide
│   │   └── AI_AGENT_CONTEXT.md           # AI quick reference
│   ├── styles/                            # COBRA styles
│   │   ├── Theme.ts
│   │   ├── CobraStyles.ts
│   │   ├── LayoutStyles.ts
│   │   └── styledComponents/
│   └── ...
└── README.md
```

### In Your COBRA Repo

```
cobra-spa/
├── src/
│   └── styles/
│       └── styledComponents/
├── COBRA_STYLING_GUIDE.md                # Main guide
├── STYLING_COMPLIANCE_ANALYSIS.md        # Examples
├── PROTOTYPE_SETUP_GUIDE.md              # Setup instructions
├── AI_AGENT_CONTEXT.md                   # AI quick reference
└── STYLING_DOCS_README.md                # This file
```

---

## 🔄 Workflow Examples

### Workflow 1: Manual Development (No AI)

```
1. Setup
   └─> Read: PROTOTYPE_SETUP_GUIDE.md (Steps 1-6)
   └─> Copy: Style files

2. Build Feature
   └─> Reference: COBRA_STYLING_GUIDE.md (component sections)
   └─> Copy: Pattern from PROTOTYPE_SETUP_GUIDE.md
   └─> Adapt: For your needs

3. Review
   └─> Compare: Against STYLING_COMPLIANCE_ANALYSIS.md
   └─> Check: Using checklist from AI_AGENT_CONTEXT.md
```

### Workflow 2: AI-Assisted Development

```
1. Setup Session
   └─> Paste: AI_AGENT_CONTEXT.md to AI
   └─> Tell AI: "Reference COBRA_STYLING_GUIDE.md"

2. Generate Code
   └─> Use prompts: From PROTOTYPE_SETUP_GUIDE.md
   └─> AI generates: COBRA-compliant code

3. Review
   └─> AI checks: Using checklist from AI_AGENT_CONTEXT.md
   └─> You compare: Against STYLING_COMPLIANCE_ANALYSIS.md

4. Iterate
   └─> Point AI: To specific sections as needed
   └─> Refine: Based on examples
```

### Workflow 3: Rapid Prototyping (Speed Focus)

```
1. Minimal Setup (15 min)
   └─> Quick checklist: PROTOTYPE_SETUP_GUIDE.md
   └─> Copy: Only essential files

2. Copy-Paste Patterns (30 min)
   └─> Grab patterns: PROTOTYPE_SETUP_GUIDE.md > Common Patterns
   └─> Customize: Variable names and data

3. Polish (15 min)
   └─> Quick check: AI_AGENT_CONTEXT.md > Validation Checklist
   └─> Fix: Any obvious issues
```

---

## 💡 Pro Tips

### For Developers

1. **Bookmark the docs**: Keep them open in browser tabs
2. **Create templates**: Save common patterns as snippets
3. **Use AI agents**: They can reference docs faster than manual lookup
4. **Compare regularly**: Check your work against compliance examples
5. **Contribute back**: Add new patterns you discover to the guides

### For Team Leads

1. **Onboarding**: Have new devs read COBRA_STYLING_GUIDE.md first
2. **Code reviews**: Use AI_AGENT_CONTEXT.md checklist
3. **Templates**: Create project templates with docs pre-copied
4. **Standards**: Reference these docs in your team standards
5. **Updates**: Keep docs in sync when COBRA styles change

### For AI Agents

1. **Context window**: Paste relevant sections, not entire files
2. **Specific references**: Point to exact sections needed
3. **Examples first**: Show AI the pattern from STYLING_COMPLIANCE_ANALYSIS.md
4. **Validation**: Always request compliance check after generation
5. **Iterative**: Build in small pieces, validating each

---

## 🔍 Finding Information Fast

### "What component should I use for...?"

→ COBRA_STYLING_GUIDE.md > Component Library > [category]

### "How do I build...?"

→ PROTOTYPE_SETUP_GUIDE.md > Common Patterns > [search]

### "Is this code compliant?"

→ AI_AGENT_CONTEXT.md > Validation Checklist

### "What color/spacing value...?"

→ COBRA_STYLING_GUIDE.md > Color Palette / Spacing Standards
→ AI_AGENT_CONTEXT.md > Quick Reference sections

### "Show me an example of...?"

→ STYLING_COMPLIANCE_ANALYSIS.md > [Role Form / Facilities Form]

### "How do I set up...?"

→ PROTOTYPE_SETUP_GUIDE.md > Detailed Setup Process

---

## 📝 Document Maintenance

### When to Update

- **Theme.ts changes**: Update color palette sections in all docs
- **New components**: Add to Component Library in COBRA_STYLING_GUIDE.md
- **New patterns discovered**: Add to PROTOTYPE_SETUP_GUIDE.md
- **Common mistakes found**: Add to AI_AGENT_CONTEXT.md

### Version Control

All documentation files include version numbers and dates:
- **Version**: Document version (e.g., 1.0, 1.1)
- **Last Updated**: Date of last modification
- **Change Log**: Track major changes

### Contribution Guidelines

When updating docs:
1. Maintain consistent formatting
2. Add examples for new concepts
3. Update all related sections
4. Test with AI agents to ensure clarity
5. Update version numbers and dates

---

## 🎓 Learning Path

### Beginner (First Prototype)

**Week 1: Setup and Basics**
- Read: PROTOTYPE_SETUP_GUIDE.md (complete)
- Skim: COBRA_STYLING_GUIDE.md (focus on Quick Start)
- Build: Simple test page with a few components
- Practice: Copy patterns from guide

**Week 2: Components**
- Read: COBRA_STYLING_GUIDE.md > Component Library
- Study: STYLING_COMPLIANCE_ANALYSIS.md (one page)
- Build: Simple form page
- Practice: All button types, form controls

**Week 3: Complex Features**
- Study: STYLING_COMPLIANCE_ANALYSIS.md (complete)
- Read: COBRA_STYLING_GUIDE.md > Advanced sections
- Build: Page with grid or tabs
- Practice: Working with AI agent

### Intermediate (Multiple Prototypes)

- Master all component types
- Build complex multi-section forms
- Implement grids with custom renderers
- Create reusable patterns
- Mentor others using these docs

### Advanced (Contributing)

- Identify gaps in documentation
- Create new pattern templates
- Improve AI agent instructions
- Share best practices
- Update docs based on new discoveries

---

## 🤝 Support and Resources

### Questions?

1. **Check the docs first**: Use the matrix above to find right doc
2. **Search**: Use Ctrl+F within each doc
3. **Compare**: Look at examples in STYLING_COMPLIANCE_ANALYSIS.md
4. **Ask AI**: Paste context and ask specific questions

### Found an Issue?

1. **Styling bug**: Check Theme.ts and CobraStyles.ts are latest
2. **Documentation error**: Note file, section, and issue
3. **Missing pattern**: Consider contributing it
4. **AI confusion**: May need clearer examples in AI_AGENT_CONTEXT.md

### Want to Contribute?

1. **New patterns**: Add to PROTOTYPE_SETUP_GUIDE.md
2. **Better examples**: Improve STYLING_COMPLIANCE_ANALYSIS.md
3. **AI improvements**: Enhance AI_AGENT_CONTEXT.md
4. **Corrections**: Fix any errors found

---

## 📊 Success Metrics

You're successfully using this documentation when:

- ✅ New prototypes look like COBRA (consistent styling)
- ✅ Setup time reduced to < 30 minutes
- ✅ AI generates compliant code on first try
- ✅ Code reviews find minimal styling issues
- ✅ Team members reference docs regularly
- ✅ Prototypes impress stakeholders

---

## 🎯 Summary

### Four Documents, One Purpose

1. **COBRA_STYLING_GUIDE.md**: Complete reference (read once, refer often)
2. **STYLING_COMPLIANCE_ANALYSIS.md**: Real examples (study when building similar)
3. **PROTOTYPE_SETUP_GUIDE.md**: Setup & patterns (use for every project)
4. **AI_AGENT_CONTEXT.md**: Quick reference (paste to AI agents)

### Remember

- **Start with setup guide** for new projects
- **Reference styling guide** for specifics
- **Study examples** for complex features
- **Use AI context** for AI-assisted development
- **Check compliance** before sharing

### Next Steps

1. **Bookmark this README** for quick navigation
2. **Set up your first prototype** following PROTOTYPE_SETUP_GUIDE.md
3. **Try with an AI agent** using AI_AGENT_CONTEXT.md
4. **Build something complex** referencing STYLING_COMPLIANCE_ANALYSIS.md
5. **Share your experience** and contribute improvements

---

**Happy prototyping! 🚀**

---

**Document**: Main README for COBRA Styling Documentation Suite
**Version**: 1.0
**Last Updated**: 2025-11-21
**Maintained By**: COBRA Development Team
