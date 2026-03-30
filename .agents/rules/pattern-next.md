---
trigger: model_decision
description: A pattern of structure for NextJS
---

```
src/
  app/
    (auth)/                        # Auth feature route group
      login/
        page.tsx                   # /login route
        _components/               # Private: login-specific components
          login-form.tsx
      register/
        page.tsx                   # /register route
        _components/               # Private: register-specific components
          register-form.tsx
      _components/                 # Private: shared auth components
        social-login.tsx           # Used by both login and register
      _hooks/                      # Private: auth hooks
        use-auth.ts
      _actions/                    # Private: auth server actions
        auth-actions.ts
      _types.ts                    # Private: auth types
      _utils.ts                    # Private: auth utilities
      layout.tsx                   # Auth layout
    (dashboard)/                   # Dashboard feature route group
      dashboard/
        page.tsx                   # /dashboard route
        loading.tsx                # Loading UI
        error.tsx                  # Error UI
        _components/               # Private: dashboard-specific components
          stats-card.tsx
          dashboard-grid.tsx
      profile/
        page.tsx                   # /profile route
        _components/               # Private: profile-specific components
          profile-form.tsx
          avatar-upload.tsx
      _hooks/                      # Private: dashboard hooks
        use-dashboard.ts
        use-profile.ts
      _actions/                    # Private: dashboard server actions
        profile-actions.ts
      _types.ts                    # Private: dashboard types
      layout.tsx                   # Dashboard layout
    (shop)/                        # Shop feature route group
      shop/
        page.tsx                   # /shop route
        _components/               # Private: shop-specific components
          product-list.tsx
          product-filter.tsx
      cart/
        page.tsx                   # /cart route
        _components/               # Private: cart-specific components
          cart-item.tsx
          cart-summary.tsx
      wishlist/
        page.tsx                   # /wishlist route
        _components/               # Private: wishlist-specific components
          wishlist-item.tsx
          wishlist-grid.tsx
      _hooks/                      # Private: shop hooks
        use-products.ts
        use-cart.ts
        use-wishlist.ts
      _actions/                    # Private: shop server actions
        product-actions.ts
        cart-actions.ts
        wishlist-actions.ts
      _types.ts                    # Private: shop types
      layout.tsx                   # Shop layout
    api/                           # API routes
      auth/
        route.ts                   # Uses (auth)/_actions/auth-actions.ts
      products/
        route.ts                   # Uses (shop)/_actions/product-actions.ts
      cart/
        route.ts                   # Uses (shop)/_actions/cart-actions.ts
    page.tsx                       # Home page
    layout.tsx                     # Root layout
    loading.tsx                    # Global loading
    error.tsx                      # Global error
    not-found.tsx                  # 404 page
    globals.css                    # Global styles
  shared/                          # ONLY for 2+ route group usage
    components/
      ui/                          # Reusable UI components
        button.tsx
        card.tsx
        input.tsx
      product-card.tsx             # Used across shop, cart, wishlist routes
      cart-widget.tsx              # Used in multiple route groups
    hooks/                         # Global custom hooks
      use-local-storage.ts
      use-debounce.ts
    actions/                       # Shared Server Actions
    types/                         # Global TypeScript types
      api.ts
  lib/                             # Framework specific utilities
    auth.ts                        # Auth configuration
    utils.ts                       # UI utility functions
  core/                            # DDD Backend Domain Logic
    domain/                        # Core Entities, Aggregates, Repo Interfaces
      user/
        user.entity.ts
        user.repository.ts
    application/                   # Use Cases / Application Services
      auth/
        login.use-case.ts
    infrastructure/                # Data adapters (Prisma, Stripe, etc.)
      persistence/
        prisma-user.repository.ts
  validations/                     # SHARED Zod schemas (FE/BE)
    auth.schema.ts
  styles/                          # Additional styles
    components.css
```
