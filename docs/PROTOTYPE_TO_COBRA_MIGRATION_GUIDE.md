# Prototype to COBRA Migration Guide

## Overview

This guide helps you migrate a standalone prototype built with the COBRA styling package into the full COBRA 5 application ecosystem. It covers styling adjustments, integration patterns, logging, events, authentication, and other core COBRA features.

**Target Audience**: COBRA engineers and AI coding agents assisting with prototype integration.

---

## Table of Contents

1. [Before You Start](#before-you-start)
2. [Styling Migration](#styling-migration)
3. [Routing Integration](#routing-integration)
4. [Authentication & Authorization](#authentication--authorization)
5. [API Integration](#api-integration)
6. [Logging & Monitoring](#logging--monitoring)
7. [Event System](#event-system)
8. [State Management](#state-management)
9. [Localization (i18n)](#localization-i18n)
10. [Testing Integration](#testing-integration)
11. [Migration Checklist](#migration-checklist)
12. [Common Pitfalls](#common-pitfalls)

---

## Before You Start

### Assessment Questions

Before migrating, answer these questions:

- [ ] Does your prototype use only COBRA styled components?
- [ ] What external APIs does your prototype call?
- [ ] Does your prototype need role-based access control?
- [ ] What data does your prototype need to persist?
- [ ] Does your prototype integrate with existing COBRA entities (facilities, users, etc.)?
- [ ] What user actions need to be logged as events?

### Prerequisites

- Access to COBRA 5 repository
- Understanding of COBRA's architecture (API, services, stores)
- Familiarity with MobX for state management
- Knowledge of COBRA's event logging system
- Understanding of COBRA's permission model

---

## Styling Migration

### What Stays the Same

✅ **No changes needed** if you used:
- COBRA styled components from `styles/styledComponents`
- `CobraStyles` constants for spacing/padding
- Theme colors via `theme.palette.*`
- `CobraPaginatedGrid` for data tables

### What Changes

#### 1. FontAwesome Icons

**Prototype (Free)** → **COBRA (Pro + Custom Kit)**

```typescript
// ❌ In Prototype
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';

// ✅ In COBRA
import { faEdit } from '@fortawesome/sharp-light-svg-icons';
```

**Icon Migration Map:**
| Prototype (Free) | COBRA (Pro) |
|-----------------|-------------|
| `faPenToSquare` | `faEdit` |
| `faEllipsisVertical` | `faEllipsisV` |
| `faXmark` | `faClose` |
| `faSpinner` | `faSpinnerThird` |

**Note**: COBRA also uses a custom FontAwesome kit for domain-specific icons (e.g., facility icons, equipment icons).

#### 2. Update Dependencies

```bash
# Remove prototype (free) packages
npm uninstall @fortawesome/free-regular-svg-icons @fortawesome/free-solid-svg-icons

# Add COBRA (pro) packages
npm install @fortawesome/sharp-light-svg-icons @fortawesome/sharp-solid-svg-icons
npm install @awesome.me/kit-909045e8fc
```

#### 3. AG Grid Enterprise

If your prototype uses AG Grid, upgrade to enterprise:

```bash
npm install ag-grid-enterprise
```

Add license key in your grid setup:
```typescript
import { LicenseManager } from 'ag-grid-enterprise';

// Add to app initialization
LicenseManager.setLicenseKey(process.env.REACT_APP_AG_GRID_LICENSE_KEY);
```

#### 4. Dynamic Icons (CobraDynamicFontAwesomeIcon)

If you extended `CobraDynamicFontAwesomeIcon`, update it to use COBRA's icon libraries:

```typescript
// Update imports to include COBRA's custom kit
import { fasl } from "@fortawesome/sharp-light-svg-icons";
import { fak } from '@awesome.me/kit-909045e8fc/icons';

// Add support for kit icons
if (iconName.startsWith(kitPrefix)) {
  const iconNameWithoutPrefix = iconName.substring(kitPrefix.length);
  const iconDef = Object.values(fak).find(icon => icon.iconName === iconNameWithoutPrefix);
  setIconDefinition(iconDef || null);
}
```

---

## Routing Integration

### COBRA Route Structure

COBRA uses React Router with a specific structure:

```
/cobra
  /facilities
  /logbooks
  /admin
    /roles
    /users
  /your-new-feature  ← Your prototype goes here
```

### Integration Steps

#### 1. Define Your Routes

Create a routes file in your feature folder:

```typescript
// src/features/yourFeature/routes.tsx
import { Route } from 'react-router-dom';
import { YourFeatureListPage } from './pages/YourFeatureListPage';
import { YourFeatureDetailPage } from './pages/YourFeatureDetailPage';

export const yourFeatureRoutes = (
  <>
    <Route path="/your-feature" element={<YourFeatureListPage />} />
    <Route path="/your-feature/:id" element={<YourFeatureDetailPage />} />
  </>
);
```

#### 2. Register Routes in Main App

```typescript
// src/App.tsx or src/routes/index.tsx
import { yourFeatureRoutes } from 'features/yourFeature/routes';

// Add to main router
<Routes>
  {/* Existing COBRA routes */}
  {yourFeatureRoutes}
</Routes>
```

#### 3. Add Navigation Menu Item

```typescript
// src/components/navigation/MainNav.tsx or similar
import { faYourIcon } from '@fortawesome/sharp-light-svg-icons';

const navigationItems = [
  // ... existing items
  {
    label: 'Your Feature',
    path: '/your-feature',
    icon: faYourIcon,
    permission: 'YOUR_FEATURE_VIEW' // See Authorization section
  }
];
```

#### 4. Breadcrumb Integration

COBRA uses breadcrumbs for navigation context:

```typescript
// In your page component
import { useBreadcrumbs } from 'hooks/useBreadcrumbs';

export const YourFeatureDetailPage = () => {
  const { setBreadcrumbs } = useBreadcrumbs();

  useEffect(() => {
    setBreadcrumbs([
      { label: 'Home', path: '/' },
      { label: 'Your Feature', path: '/your-feature' },
      { label: 'Detail', path: `/your-feature/${id}` }
    ]);
  }, []);

  // ... rest of component
};
```

---

## Authentication & Authorization

### Authentication

COBRA uses JWT-based authentication. Users are authenticated before accessing the app.

#### Access User Context

```typescript
import { useAuth } from 'contexts/AuthContext';

export const YourComponent = () => {
  const { user, isAuthenticated, logout } = useAuth();

  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <p>Welcome, {user.displayName}!</p>
      {/* Your content */}
    </div>
  );
};
```

### Authorization (Permissions)

COBRA uses a role-based permission system.

#### 1. Define Your Permissions

Add to permission constants:

```typescript
// src/constants/permissions.ts
export const Permissions = {
  // ... existing permissions
  YOUR_FEATURE_VIEW: 'YOUR_FEATURE_VIEW',
  YOUR_FEATURE_CREATE: 'YOUR_FEATURE_CREATE',
  YOUR_FEATURE_EDIT: 'YOUR_FEATURE_EDIT',
  YOUR_FEATURE_DELETE: 'YOUR_FEATURE_DELETE',
};
```

#### 2. Check Permissions in Components

```typescript
import { usePermissions } from 'hooks/usePermissions';
import { Permissions } from 'constants/permissions';

export const YourFeaturePage = () => {
  const { hasPermission } = usePermissions();

  const canCreate = hasPermission(Permissions.YOUR_FEATURE_CREATE);
  const canEdit = hasPermission(Permissions.YOUR_FEATURE_EDIT);
  const canDelete = hasPermission(Permissions.YOUR_FEATURE_DELETE);

  return (
    <Stack spacing={2}>
      <Stack direction="row" justifyContent="space-between">
        <span>Your Feature</span>
        {canCreate && (
          <CobraNewButton onClick={handleCreate}>
            Create New
          </CobraNewButton>
        )}
      </Stack>
      {/* Content */}
    </Stack>
  );
};
```

#### 3. Protect Routes

```typescript
import { ProtectedRoute } from 'components/routing/ProtectedRoute';
import { Permissions } from 'constants/permissions';

export const yourFeatureRoutes = (
  <>
    <Route
      path="/your-feature"
      element={
        <ProtectedRoute permission={Permissions.YOUR_FEATURE_VIEW}>
          <YourFeatureListPage />
        </ProtectedRoute>
      }
    />
  </>
);
```

#### 4. Add Permissions to Admin Roles

Update the Admin > Roles page to include your new permissions in the permission management UI.

---

## API Integration

### COBRA API Architecture

COBRA uses a RESTful API with consistent patterns.

#### 1. Create API Service

```typescript
// src/services/yourFeatureApi.ts
import { apiClient } from 'services/apiClient';
import { YourFeatureDto, CreateYourFeatureDto, UpdateYourFeatureDto } from 'types/yourFeature';

export class YourFeatureApi {
  private static baseUrl = '/api/your-feature';

  static async getAll(): Promise<YourFeatureDto[]> {
    const response = await apiClient.get<YourFeatureDto[]>(this.baseUrl);
    return response.data;
  }

  static async getById(id: string): Promise<YourFeatureDto> {
    const response = await apiClient.get<YourFeatureDto>(`${this.baseUrl}/${id}`);
    return response.data;
  }

  static async create(data: CreateYourFeatureDto): Promise<YourFeatureDto> {
    const response = await apiClient.post<YourFeatureDto>(this.baseUrl, data);
    return response.data;
  }

  static async update(id: string, data: UpdateYourFeatureDto): Promise<YourFeatureDto> {
    const response = await apiClient.put<YourFeatureDto>(`${this.baseUrl}/${id}`, data);
    return response.data;
  }

  static async delete(id: string): Promise<void> {
    await apiClient.delete(`${this.baseUrl}/${id}`);
  }
}
```

#### 2. Error Handling

COBRA has centralized error handling:

```typescript
import { handleApiError } from 'utils/errorHandling';

try {
  const result = await YourFeatureApi.create(data);
  // Handle success
} catch (error) {
  handleApiError(error, {
    context: 'Creating your feature',
    showNotification: true,
    logEvent: true
  });
}
```

#### 3. Loading States

Use COBRA's loading pattern:

```typescript
import { useLoading } from 'hooks/useLoading';

export const YourComponent = () => {
  const { isLoading, startLoading, stopLoading } = useLoading();

  const handleSave = async () => {
    startLoading();
    try {
      await YourFeatureApi.create(data);
      // Handle success
    } catch (error) {
      handleApiError(error);
    } finally {
      stopLoading();
    }
  };

  return (
    <CobraSaveButton onClick={handleSave} isSaving={isLoading}>
      Save
    </CobraSaveButton>
  );
};
```

---

## Logging & Monitoring

### COBRA Logging System

COBRA uses a centralized logging service that captures application events, errors, and user actions.

#### 1. Import Logger

```typescript
import { Logger } from 'services/logger';
```

#### 2. Log Levels

```typescript
// Information - general app flow
Logger.info('User viewed your feature list', { userId: user.id });

// Warning - something unexpected but not critical
Logger.warn('Feature data incomplete', { featureId, missingFields });

// Error - something went wrong
Logger.error('Failed to save feature', { error, featureData });

// Debug - detailed diagnostic info (development only)
Logger.debug('Feature validation result', { validationResult });
```

#### 3. Structured Logging

Always include context:

```typescript
Logger.info('Feature created', {
  featureId: newFeature.id,
  userId: user.id,
  facilityId: currentFacility.id,
  timestamp: new Date().toISOString(),
  metadata: {
    source: 'YourFeatureCreateForm',
    action: 'CREATE'
  }
});
```

#### 4. Error Logging

Log errors with full context:

```typescript
try {
  await YourFeatureApi.update(id, data);
} catch (error) {
  Logger.error('Failed to update feature', {
    error: error.message,
    stack: error.stack,
    featureId: id,
    userId: user.id,
    attemptedData: data,
    context: 'YourFeatureEditForm'
  });

  // Re-throw or handle appropriately
  throw error;
}
```

#### 5. Performance Logging

Track performance-critical operations:

```typescript
const startTime = performance.now();

const data = await YourFeatureApi.getAll();

const duration = performance.now() - startTime;

Logger.info('Feature list loaded', {
  duration: `${duration.toFixed(2)}ms`,
  recordCount: data.length,
  userId: user.id
});
```

---

## Event System

### COBRA Event Architecture

COBRA maintains an audit trail of all user actions through its event system. Events are displayed in various places throughout the application (dashboards, timelines, activity feeds).

#### 1. Event Types

Define your event types:

```typescript
// src/types/events.ts
export enum YourFeatureEventType {
  CREATED = 'YOUR_FEATURE_CREATED',
  UPDATED = 'YOUR_FEATURE_UPDATED',
  DELETED = 'YOUR_FEATURE_DELETED',
  VIEWED = 'YOUR_FEATURE_VIEWED',
  EXPORTED = 'YOUR_FEATURE_EXPORTED',
  SHARED = 'YOUR_FEATURE_SHARED'
}
```

#### 2. Create Events

```typescript
import { EventService } from 'services/eventService';
import { YourFeatureEventType } from 'types/events';

// When creating a new feature
await EventService.createEvent({
  eventType: YourFeatureEventType.CREATED,
  entityId: newFeature.id,
  entityType: 'YourFeature',
  description: `Created feature: ${newFeature.name}`,
  userId: user.id,
  facilityId: currentFacility?.id,
  metadata: {
    featureName: newFeature.name,
    createdBy: user.displayName,
    additionalInfo: { /* any relevant data */ }
  }
});
```

#### 3. Common Event Patterns

**Create Event:**
```typescript
const handleCreate = async (data: CreateYourFeatureDto) => {
  try {
    const newFeature = await YourFeatureApi.create(data);

    // Log event
    await EventService.createEvent({
      eventType: YourFeatureEventType.CREATED,
      entityId: newFeature.id,
      entityType: 'YourFeature',
      description: `Created feature: ${newFeature.name}`,
      userId: user.id,
      facilityId: currentFacility?.id,
      metadata: { featureName: newFeature.name }
    });

    // Log for monitoring
    Logger.info('Feature created', { featureId: newFeature.id });

    return newFeature;
  } catch (error) {
    Logger.error('Failed to create feature', { error });
    throw error;
  }
};
```

**Update Event:**
```typescript
const handleUpdate = async (id: string, data: UpdateYourFeatureDto) => {
  const originalFeature = await YourFeatureApi.getById(id);
  const updatedFeature = await YourFeatureApi.update(id, data);

  await EventService.createEvent({
    eventType: YourFeatureEventType.UPDATED,
    entityId: id,
    entityType: 'YourFeature',
    description: `Updated feature: ${updatedFeature.name}`,
    userId: user.id,
    metadata: {
      changes: detectChanges(originalFeature, updatedFeature),
      updatedBy: user.displayName
    }
  });
};
```

**Delete Event:**
```typescript
const handleDelete = async (id: string) => {
  const feature = await YourFeatureApi.getById(id);

  await YourFeatureApi.delete(id);

  await EventService.createEvent({
    eventType: YourFeatureEventType.DELETED,
    entityId: id,
    entityType: 'YourFeature',
    description: `Deleted feature: ${feature.name}`,
    userId: user.id,
    metadata: {
      deletedFeatureName: feature.name,
      deletedBy: user.displayName,
      deletionReason: reason // if applicable
    }
  });
};
```

#### 4. Event Display Configuration

Register your events for display in COBRA's event components:

```typescript
// src/config/eventConfig.ts
import { YourFeatureEventType } from 'types/events';

export const eventDisplayConfig = {
  // ... existing events
  [YourFeatureEventType.CREATED]: {
    icon: faPlus,
    color: '#4caf50', // green
    displayName: 'Feature Created',
    formatDescription: (event) => `${event.metadata.createdBy} created feature "${event.metadata.featureName}"`
  },
  [YourFeatureEventType.UPDATED]: {
    icon: faEdit,
    color: '#2196f3', // blue
    displayName: 'Feature Updated',
    formatDescription: (event) => `${event.metadata.updatedBy} updated feature`
  },
  [YourFeatureEventType.DELETED]: {
    icon: faTrashCan,
    color: '#f44336', // red
    displayName: 'Feature Deleted',
    formatDescription: (event) => `${event.metadata.deletedBy} deleted feature "${event.metadata.deletedFeatureName}"`
  }
};
```

#### 5. Query Events

Display events related to your feature:

```typescript
import { EventService } from 'services/eventService';

const YourFeatureHistory = ({ featureId }: { featureId: string }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const loadEvents = async () => {
      const featureEvents = await EventService.getEventsByEntity({
        entityType: 'YourFeature',
        entityId: featureId,
        limit: 50,
        sortOrder: 'desc'
      });
      setEvents(featureEvents);
    };
    loadEvents();
  }, [featureId]);

  return (
    <Stack spacing={1}>
      {events.map(event => (
        <EventDisplay key={event.id} event={event} />
      ))}
    </Stack>
  );
};
```

---

## State Management

### COBRA Uses MobX

COBRA uses MobX stores for state management. Prototypes typically use React state, which needs migration.

#### 1. Create a Store

```typescript
// src/stores/YourFeatureStore.ts
import { makeAutoObservable, runInAction } from 'mobx';
import { YourFeatureApi } from 'services/yourFeatureApi';
import { YourFeatureDto } from 'types/yourFeature';

export class YourFeatureStore {
  items: YourFeatureDto[] = [];
  selectedItem: YourFeatureDto | null = null;
  isLoading: boolean = false;
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  async loadItems() {
    this.isLoading = true;
    this.error = null;

    try {
      const items = await YourFeatureApi.getAll();
      runInAction(() => {
        this.items = items;
        this.isLoading = false;
      });
    } catch (error) {
      runInAction(() => {
        this.error = error.message;
        this.isLoading = false;
      });
      Logger.error('Failed to load items', { error });
    }
  }

  async createItem(data: CreateYourFeatureDto) {
    try {
      const newItem = await YourFeatureApi.create(data);
      runInAction(() => {
        this.items.push(newItem);
      });
      return newItem;
    } catch (error) {
      Logger.error('Failed to create item', { error });
      throw error;
    }
  }

  selectItem(id: string) {
    this.selectedItem = this.items.find(item => item.id === id) || null;
  }

  clearSelection() {
    this.selectedItem = null;
  }
}

// Create singleton instance
export const yourFeatureStore = new YourFeatureStore();
```

#### 2. Register Store in Root Store

```typescript
// src/stores/RootStore.ts
import { yourFeatureStore } from './YourFeatureStore';

export class RootStore {
  // ... existing stores
  yourFeatureStore = yourFeatureStore;
}
```

#### 3. Use Store in Components

```typescript
import { observer } from 'mobx-react-lite';
import { useStore } from 'hooks/useStore';

export const YourFeatureListPage = observer(() => {
  const { yourFeatureStore } = useStore();

  useEffect(() => {
    yourFeatureStore.loadItems();
  }, []);

  return (
    <Stack spacing={2}>
      {yourFeatureStore.isLoading && <CircularProgress />}

      {yourFeatureStore.error && (
        <Alert severity="error">{yourFeatureStore.error}</Alert>
      )}

      {yourFeatureStore.items.map(item => (
        <YourFeatureCard key={item.id} item={item} />
      ))}
    </Stack>
  );
});
```

#### 4. Migration from useState

**Before (Prototype):**
```typescript
const [items, setItems] = useState([]);
const [loading, setLoading] = useState(false);

useEffect(() => {
  const loadData = async () => {
    setLoading(true);
    const data = await YourFeatureApi.getAll();
    setItems(data);
    setLoading(false);
  };
  loadData();
}, []);
```

**After (COBRA):**
```typescript
import { observer } from 'mobx-react-lite';
const { yourFeatureStore } = useStore();

useEffect(() => {
  yourFeatureStore.loadItems();
}, []);

// Access data from store
const { items, isLoading } = yourFeatureStore;
```

---

## Localization (i18n)

### COBRA's Internationalization

COBRA supports multiple languages using react-i18next.

#### 1. Add Translation Keys

```typescript
// public/locales/en/translation.json
{
  "yourFeature": {
    "title": "Your Feature",
    "create": "Create New Feature",
    "edit": "Edit Feature",
    "delete": "Delete Feature",
    "confirmDelete": "Are you sure you want to delete this feature?",
    "fields": {
      "name": "Name",
      "description": "Description",
      "status": "Status"
    },
    "messages": {
      "createSuccess": "Feature created successfully",
      "updateSuccess": "Feature updated successfully",
      "deleteSuccess": "Feature deleted successfully",
      "loadError": "Failed to load features"
    }
  }
}
```

#### 2. Use Translations in Components

```typescript
import { useTranslation } from 'react-i18next';

export const YourFeatureForm = () => {
  const { t } = useTranslation();

  return (
    <Stack spacing={2}>
      <Typography variant="h5">
        {t('yourFeature.title')}
      </Typography>

      <CobraTextField
        label={t('yourFeature.fields.name')}
        fullWidth
      />

      <CobraTextField
        label={t('yourFeature.fields.description')}
        fullWidth
        multiline
        rows={4}
      />

      <CobraSaveButton type="submit">
        {t('common.save')}
      </CobraSaveButton>
    </Stack>
  );
};
```

#### 3. Dynamic Translations

```typescript
// With interpolation
t('yourFeature.messages.itemCount', { count: items.length })
// Translation: "Showing {{count}} features"

// With HTML
<span dangerouslySetInnerHTML={{ __html: t('yourFeature.help') }} />
```

#### 4. Pluralization

```json
{
  "yourFeature": {
    "itemCount_zero": "No features",
    "itemCount_one": "1 feature",
    "itemCount_other": "{{count}} features"
  }
}
```

---

## Testing Integration

### COBRA Testing Standards

COBRA requires comprehensive testing for all features.

#### 1. Unit Tests

```typescript
// src/features/yourFeature/__tests__/YourFeatureStore.test.ts
import { YourFeatureStore } from '../stores/YourFeatureStore';
import { YourFeatureApi } from '../services/yourFeatureApi';

jest.mock('../services/yourFeatureApi');

describe('YourFeatureStore', () => {
  let store: YourFeatureStore;

  beforeEach(() => {
    store = new YourFeatureStore();
  });

  it('should load items successfully', async () => {
    const mockItems = [{ id: '1', name: 'Test Feature' }];
    YourFeatureApi.getAll = jest.fn().mockResolvedValue(mockItems);

    await store.loadItems();

    expect(store.items).toEqual(mockItems);
    expect(store.isLoading).toBe(false);
  });

  it('should handle load error', async () => {
    YourFeatureApi.getAll = jest.fn().mockRejectedValue(new Error('API Error'));

    await store.loadItems();

    expect(store.error).toBe('API Error');
    expect(store.isLoading).toBe(false);
  });
});
```

#### 2. Component Tests

```typescript
// src/features/yourFeature/__tests__/YourFeatureListPage.test.tsx
import { render, screen, waitFor } from '@testing-library/react';
import { YourFeatureListPage } from '../pages/YourFeatureListPage';
import { yourFeatureStore } from '../stores/YourFeatureStore';

describe('YourFeatureListPage', () => {
  it('should render items', async () => {
    yourFeatureStore.items = [
      { id: '1', name: 'Feature 1' },
      { id: '2', name: 'Feature 2' }
    ];

    render(<YourFeatureListPage />);

    await waitFor(() => {
      expect(screen.getByText('Feature 1')).toBeInTheDocument();
      expect(screen.getByText('Feature 2')).toBeInTheDocument();
    });
  });

  it('should show loading state', () => {
    yourFeatureStore.isLoading = true;

    render(<YourFeatureListPage />);

    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });
});
```

#### 3. Integration Tests

```typescript
// src/features/yourFeature/__tests__/YourFeatureFlow.integration.test.tsx
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { YourFeatureApp } from '../YourFeatureApp';

describe('YourFeature Integration', () => {
  it('should complete create-edit-delete flow', async () => {
    render(<YourFeatureApp />);

    // Click create button
    const createButton = screen.getByText('Create New Feature');
    fireEvent.click(createButton);

    // Fill form
    const nameInput = screen.getByLabelText('Name');
    await userEvent.type(nameInput, 'Test Feature');

    // Submit
    const saveButton = screen.getByText('Save');
    fireEvent.click(saveButton);

    // Verify created
    await waitFor(() => {
      expect(screen.getByText('Test Feature')).toBeInTheDocument();
    });

    // Edit
    const editButton = screen.getByLabelText('Edit');
    fireEvent.click(editButton);

    // ... continue flow
  });
});
```

#### 4. E2E Tests (Playwright)

```typescript
// e2e/yourFeature.spec.ts
import { test, expect } from '@playwright/test';

test.describe('YourFeature E2E', () => {
  test('should create and view feature', async ({ page }) => {
    await page.goto('/your-feature');

    // Create
    await page.click('text=Create New Feature');
    await page.fill('[name="name"]', 'E2E Test Feature');
    await page.click('text=Save');

    // Verify
    await expect(page.locator('text=E2E Test Feature')).toBeVisible();
  });
});
```

---

## Migration Checklist

Use this checklist to track your migration progress:

### Preparation
- [ ] Review prototype code for COBRA compliance
- [ ] Identify external dependencies
- [ ] Document API endpoints needed
- [ ] List required permissions
- [ ] Identify event types to log

### Styling & UI
- [ ] Replace FontAwesome Free icons with Pro icons
- [ ] Install AG Grid Enterprise (if applicable)
- [ ] Update CobraDynamicFontAwesomeIcon (if used)
- [ ] Verify all COBRA components used correctly
- [ ] Test responsive design

### Architecture
- [ ] Create feature folder structure
- [ ] Set up MobX store(s)
- [ ] Migrate React state to MobX
- [ ] Create API service layer
- [ ] Implement error handling

### Integration
- [ ] Define and register routes
- [ ] Add navigation menu items
- [ ] Implement breadcrumbs
- [ ] Set up permission checks
- [ ] Add ProtectedRoute wrappers

### Functionality
- [ ] Integrate authentication context
- [ ] Implement authorization checks
- [ ] Add logging statements
- [ ] Create event handlers
- [ ] Configure event display

### Data & API
- [ ] Create DTOs/types
- [ ] Implement API client methods
- [ ] Add error handling
- [ ] Implement loading states
- [ ] Test API integration

### Localization
- [ ] Add translation keys
- [ ] Replace hardcoded strings
- [ ] Test in multiple languages
- [ ] Handle pluralization

### Testing
- [ ] Write unit tests for stores
- [ ] Write unit tests for components
- [ ] Write integration tests
- [ ] Write E2E tests
- [ ] Achieve required code coverage

### Documentation
- [ ] Document new permissions
- [ ] Update API documentation
- [ ] Add feature to user guide
- [ ] Document event types
- [ ] Update admin configuration guide

### Deployment
- [ ] Test in development environment
- [ ] Conduct code review
- [ ] Test in staging environment
- [ ] Create deployment plan
- [ ] Deploy to production
- [ ] Monitor logs and events

---

## Common Pitfalls

### 1. Forgetting to Wrap with `observer`

**Problem:**
```typescript
// ❌ Component won't react to store changes
export const YourComponent = () => {
  const { yourFeatureStore } = useStore();
  return <div>{yourFeatureStore.items.length}</div>;
};
```

**Solution:**
```typescript
// ✅ Component reacts to store changes
export const YourComponent = observer(() => {
  const { yourFeatureStore } = useStore();
  return <div>{yourFeatureStore.items.length}</div>;
});
```

### 2. Not Using `runInAction` in Async Code

**Problem:**
```typescript
// ❌ MobX warning about modifying state outside actions
async loadItems() {
  const items = await YourFeatureApi.getAll();
  this.items = items; // Warning!
}
```

**Solution:**
```typescript
// ✅ Wrap state changes in runInAction
async loadItems() {
  const items = await YourFeatureApi.getAll();
  runInAction(() => {
    this.items = items;
  });
}
```

### 3. Missing Permission Checks

**Problem:**
```typescript
// ❌ Anyone can delete
<CobraDeleteButton onClick={handleDelete}>
  Delete
</CobraDeleteButton>
```

**Solution:**
```typescript
// ✅ Only users with permission can delete
const { hasPermission } = usePermissions();
const canDelete = hasPermission(Permissions.YOUR_FEATURE_DELETE);

{canDelete && (
  <CobraDeleteButton onClick={handleDelete}>
    Delete
  </CobraDeleteButton>
)}
```

### 4. Not Logging Events

**Problem:**
```typescript
// ❌ No audit trail
const handleCreate = async (data) => {
  const newItem = await YourFeatureApi.create(data);
  return newItem;
};
```

**Solution:**
```typescript
// ✅ Event logged for audit trail
const handleCreate = async (data) => {
  const newItem = await YourFeatureApi.create(data);

  await EventService.createEvent({
    eventType: YourFeatureEventType.CREATED,
    entityId: newItem.id,
    entityType: 'YourFeature',
    description: `Created feature: ${newItem.name}`,
    userId: user.id
  });

  Logger.info('Feature created', { featureId: newItem.id });

  return newItem;
};
```

### 5. Hardcoded Strings

**Problem:**
```typescript
// ❌ Not translatable
<Button>Create New Feature</Button>
```

**Solution:**
```typescript
// ✅ Translatable
const { t } = useTranslation();
<Button>{t('yourFeature.create')}</Button>
```

### 6. Missing Error Handling

**Problem:**
```typescript
// ❌ Errors not handled
const handleSave = async () => {
  await YourFeatureApi.create(data);
  navigate('/your-feature');
};
```

**Solution:**
```typescript
// ✅ Comprehensive error handling
const handleSave = async () => {
  try {
    await YourFeatureApi.create(data);
    showNotification(t('yourFeature.messages.createSuccess'), 'success');
    navigate('/your-feature');
  } catch (error) {
    handleApiError(error, {
      context: 'Creating feature',
      showNotification: true
    });
    Logger.error('Failed to create feature', { error, data });
  }
};
```

### 7. Not Cleaning Up Subscriptions

**Problem:**
```typescript
// ❌ Memory leak
useEffect(() => {
  const subscription = yourFeatureStore.subscribe(handleUpdate);
  // Missing cleanup!
}, []);
```

**Solution:**
```typescript
// ✅ Proper cleanup
useEffect(() => {
  const subscription = yourFeatureStore.subscribe(handleUpdate);
  return () => subscription.unsubscribe();
}, []);
```

### 8. Direct Store Mutation

**Problem:**
```typescript
// ❌ Mutating store directly
yourFeatureStore.items.push(newItem);
```

**Solution:**
```typescript
// ✅ Use store method
yourFeatureStore.addItem(newItem);
```

---

## Additional Resources

### COBRA Documentation
- Architecture Overview: `/docs/ARCHITECTURE.md`
- API Reference: `/docs/API.md`
- Permission System: `/docs/PERMISSIONS.md`
- Event System: `/docs/EVENTS.md`
- Style Guide: `/docs/STYLE_GUIDE.md`

### Code Examples
- Reference Implementation: `/src/features/facilities`
- Logbooks Feature: `/src/features/logbooks`
- Admin Roles: `/src/features/admin/roles`

### Getting Help
- Team Chat: #cobra-development
- Code Reviews: Create PR and tag @cobra-architects
- Architecture Questions: Ask in #cobra-architecture
- Weekly Sync: Fridays 2pm EST

---

## AI Agent Instructions

When assisting with prototype migration, follow these priorities:

1. **Preserve Functionality**: Ensure all prototype features work in COBRA
2. **Follow COBRA Patterns**: Use MobX stores, event logging, permission checks
3. **Maintain Code Quality**: Write tests, use TypeScript properly, handle errors
4. **Document Changes**: Update relevant documentation
5. **Log Appropriately**: Add logging and event tracking
6. **Test Thoroughly**: Verify functionality in development before deployment

### AI Agent Prompt Template

```
I'm migrating a prototype feature into COBRA 5.

PROTOTYPE CONTEXT:
- Feature: [Description]
- Current state: [Standalone React app / Component library]
- Dependencies: [List]

MIGRATION REQUIREMENTS:
1. Convert React state to MobX stores
2. Add permission checks for: [list actions]
3. Implement event logging for: [list events]
4. Replace FontAwesome Free with Pro icons
5. Integrate with COBRA routing and navigation

Please help me:
[Specific task, e.g., "create the MobX store" or "add event logging"]

Follow the PROTOTYPE_TO_COBRA_MIGRATION_GUIDE.md patterns.
```

---

**Document Version**: 1.0
**Last Updated**: 2025-11-24
**Maintained By**: COBRA Development Team
**Related Docs**:
- [COBRA_STYLING_GUIDE.md](COBRA_STYLING_GUIDE.md)
- [PROTOTYPE_SETUP_GUIDE.md](PROTOTYPE_SETUP_GUIDE.md)
- [AI_AGENT_CONTEXT.md](AI_AGENT_CONTEXT.md)
