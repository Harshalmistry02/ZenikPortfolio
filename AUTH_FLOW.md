# Authentication Flow - Complete Wiring

## ✅ Backend API Routes

### 1. `/api/auth/csrf` (GET)
- **File**: `src/app/api/auth/csrf/route.ts`
- **Purpose**: Generate CSRF token for form submissions
- **Returns**: `{ csrfToken: string }`
- **Sets Cookie**: `csrfToken` (httpOnly: false, accessible by JS)

### 2. `/api/auth/register` (POST)
- **File**: `src/app/api/auth/register/route.ts`
- **Purpose**: Create new user account
- **Requires**: CSRF token in header (`X-CSRF-Token`)
- **Body**: `{ email, username, password, firstName, lastName? }`
- **Returns**: `{ message, user }`
- **Validation**: Zod schema validation
- **Rate Limit**: 5 attempts per 15 minutes per IP

### 3. `/api/auth/login` (POST)
- **File**: `src/app/api/auth/login/route.ts`
- **Purpose**: Authenticate user and create session
- **Requires**: CSRF token in header (`X-CSRF-Token`)
- **Body**: `{ email, password }`
- **Returns**: `{ message, user, accessToken, refreshToken }`
- **Sets Cookies**: 
  - `accessToken` (httpOnly: true, 15 min)
  - `refreshToken` (httpOnly: true, 7 days)
- **Creates**: Session and RefreshToken in database
- **Rate Limit**: 5 failed attempts per email

### 4. `/api/auth/me` (GET)
- **File**: `src/app/api/auth/me/route.ts`
- **Purpose**: Check authentication status
- **Requires**: Valid `accessToken` cookie
- **Returns**: `{ user: { id, email, username, firstName, lastName } }`

### 5. `/api/auth/logout` (POST)
- **File**: `src/app/api/auth/logout/route.ts`
- **Purpose**: End user session
- **Deletes**: Session and RefreshToken from database
- **Clears Cookies**: `accessToken`, `refreshToken`

## ✅ Frontend Components

### 1. Auth Provider (`src/app/providers.tsx`)
- **Context**: `AuthContext`
- **State**: `user: { email: string, isLoggedIn: boolean }`
- **Methods**:
  - `login(email)`: Updates user state
  - `logout()`: Calls `/api/auth/logout` and clears state
- **Initialization**: Calls `/api/auth/me` on mount to restore session

### 2. Login Page (`src/app/login/page.tsx`)
- **Component**: Uses `Login` from `page-components/Login.tsx`
- **Props**: `user`, `onLogin`, `onLogout` from `useAuth()`
- **Flow**:
  1. Fetch CSRF token from `/api/auth/csrf`
  2. Submit credentials to `/api/auth/login`
  3. On success: Call `onLogin(email)` and redirect to `/`
  4. On error: Display error message

### 3. SignUp Page (`src/app/signup/page.tsx`)
- **Component**: Uses `SignUp` from `page-components/SignUp.tsx`
- **Props**: `user`, `onLogin` from `useAuth()`
- **Flow**:
  1. Fetch CSRF token from `/api/auth/csrf`
  2. Parse name into firstName/lastName
  3. Generate username from email
  4. Submit to `/api/auth/register`
  5. On success: Call `onLogin(email)` and redirect to `/`
  6. On error: Display validation errors

### 4. Navbar (`src/components/Navbar.tsx`)
- **Props**: `user`, `onLogout` from `useAuth()`
- **Display**:
  - If logged in: Show username and Logout button
  - If not logged in: Show "Sign in" link
- **Logout**: Calls `onLogout()` which triggers `/api/auth/logout`

### 5. App Shell (`src/app/app-shell.tsx`)
- **Purpose**: Layout wrapper
- **Uses**: `useAuth()` to get user state
- **Passes**: `user` and `logout` to Navbar
- **Hides**: Navbar and Footer on `/login` and `/signup` pages

## ✅ Security Features

### CSRF Protection
- **File**: `src/middleware/csrf.ts`
- **Method**: Double-submit cookie pattern
- **Token Generation**: Web Crypto API (Edge Runtime compatible)
- **Verification**: Compares header token with cookie token

### Password Security
- **Hashing**: bcrypt with 12 rounds
- **Validation**: Minimum 8 characters (frontend enforces complexity)

### Rate Limiting
- **Registration**: 5 attempts per IP per 15 minutes
- **Login**: 5 failed attempts per email, then lockout

### JWT Tokens
- **Access Token**: 15 minutes expiry
- **Refresh Token**: 7 days expiry
- **Storage**: HTTP-only cookies (not accessible by JavaScript)
- **Verification**: JWT signature validation

## ✅ Database Models (Prisma)

### User
- id, email, username, password (hashed)
- firstName, lastName
- isActive, createdAt, updatedAt

### Session
- id, userId, token (access token)
- ipAddress, userAgent
- expiresAt, createdAt

### RefreshToken
- id, userId, token
- expiresAt, createdAt

### LoginAttempt
- id, userId?, email, ipAddress, userAgent
- success, createdAt

## 🔄 Complete Authentication Flow

### Registration Flow:
1. User fills signup form
2. Frontend fetches CSRF token
3. Frontend submits to `/api/auth/register` with CSRF token
4. Backend validates data, checks for existing user
5. Backend hashes password and creates user
6. Frontend calls `onLogin(email)` to update context
7. User redirected to home page

### Login Flow:
1. User fills login form
2. Frontend fetches CSRF token
3. Frontend submits to `/api/auth/login` with CSRF token
4. Backend verifies credentials
5. Backend creates session and refresh token
6. Backend sets HTTP-only cookies
7. Frontend calls `onLogin(email)` to update context
8. User redirected to home page

### Session Restoration:
1. App loads, AuthProvider mounts
2. AuthProvider calls `/api/auth/me`
3. Backend verifies `accessToken` cookie
4. If valid: Returns user data, frontend updates state
5. If invalid: User remains logged out

### Logout Flow:
1. User clicks Logout button
2. Frontend calls `logout()` from context
3. Context calls `/api/auth/logout`
4. Backend deletes session and refresh token
5. Backend clears cookies
6. Frontend updates state to logged out

## ✅ All Wiring Complete

- ✅ CSRF protection working (Web Crypto API)
- ✅ Registration endpoint functional
- ✅ Login endpoint functional
- ✅ Session verification endpoint created
- ✅ Logout endpoint created
- ✅ Auth context using cookies (not localStorage)
- ✅ Frontend components properly connected
- ✅ Navbar shows user state correctly
- ✅ Rate limiting implemented
- ✅ JWT tokens properly generated and verified
- ✅ Database models in place
