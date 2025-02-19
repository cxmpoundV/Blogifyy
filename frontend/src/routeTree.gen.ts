/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as MyblogsBlogidImport } from './routes/myblogs/$blogid'
import { Route as BlogsBlogidImport } from './routes/blogs/$blogid'

// Create Virtual Routes

const RegisterLazyImport = createFileRoute('/register')()
const NewblogLazyImport = createFileRoute('/newblog')()
const MyBlogLazyImport = createFileRoute('/my-blog')()
const LoginLazyImport = createFileRoute('/login')()
const HomepageLazyImport = createFileRoute('/homepage')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const RegisterLazyRoute = RegisterLazyImport.update({
  id: '/register',
  path: '/register',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/register.lazy').then((d) => d.Route))

const NewblogLazyRoute = NewblogLazyImport.update({
  id: '/newblog',
  path: '/newblog',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/newblog.lazy').then((d) => d.Route))

const MyBlogLazyRoute = MyBlogLazyImport.update({
  id: '/my-blog',
  path: '/my-blog',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/my-blog.lazy').then((d) => d.Route))

const LoginLazyRoute = LoginLazyImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/login.lazy').then((d) => d.Route))

const HomepageLazyRoute = HomepageLazyImport.update({
  id: '/homepage',
  path: '/homepage',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/homepage.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const MyblogsBlogidRoute = MyblogsBlogidImport.update({
  id: '/myblogs/$blogid',
  path: '/myblogs/$blogid',
  getParentRoute: () => rootRoute,
} as any)

const BlogsBlogidRoute = BlogsBlogidImport.update({
  id: '/blogs/$blogid',
  path: '/blogs/$blogid',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/homepage': {
      id: '/homepage'
      path: '/homepage'
      fullPath: '/homepage'
      preLoaderRoute: typeof HomepageLazyImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginLazyImport
      parentRoute: typeof rootRoute
    }
    '/my-blog': {
      id: '/my-blog'
      path: '/my-blog'
      fullPath: '/my-blog'
      preLoaderRoute: typeof MyBlogLazyImport
      parentRoute: typeof rootRoute
    }
    '/newblog': {
      id: '/newblog'
      path: '/newblog'
      fullPath: '/newblog'
      preLoaderRoute: typeof NewblogLazyImport
      parentRoute: typeof rootRoute
    }
    '/register': {
      id: '/register'
      path: '/register'
      fullPath: '/register'
      preLoaderRoute: typeof RegisterLazyImport
      parentRoute: typeof rootRoute
    }
    '/blogs/$blogid': {
      id: '/blogs/$blogid'
      path: '/blogs/$blogid'
      fullPath: '/blogs/$blogid'
      preLoaderRoute: typeof BlogsBlogidImport
      parentRoute: typeof rootRoute
    }
    '/myblogs/$blogid': {
      id: '/myblogs/$blogid'
      path: '/myblogs/$blogid'
      fullPath: '/myblogs/$blogid'
      preLoaderRoute: typeof MyblogsBlogidImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/homepage': typeof HomepageLazyRoute
  '/login': typeof LoginLazyRoute
  '/my-blog': typeof MyBlogLazyRoute
  '/newblog': typeof NewblogLazyRoute
  '/register': typeof RegisterLazyRoute
  '/blogs/$blogid': typeof BlogsBlogidRoute
  '/myblogs/$blogid': typeof MyblogsBlogidRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/homepage': typeof HomepageLazyRoute
  '/login': typeof LoginLazyRoute
  '/my-blog': typeof MyBlogLazyRoute
  '/newblog': typeof NewblogLazyRoute
  '/register': typeof RegisterLazyRoute
  '/blogs/$blogid': typeof BlogsBlogidRoute
  '/myblogs/$blogid': typeof MyblogsBlogidRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/homepage': typeof HomepageLazyRoute
  '/login': typeof LoginLazyRoute
  '/my-blog': typeof MyBlogLazyRoute
  '/newblog': typeof NewblogLazyRoute
  '/register': typeof RegisterLazyRoute
  '/blogs/$blogid': typeof BlogsBlogidRoute
  '/myblogs/$blogid': typeof MyblogsBlogidRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/homepage'
    | '/login'
    | '/my-blog'
    | '/newblog'
    | '/register'
    | '/blogs/$blogid'
    | '/myblogs/$blogid'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/homepage'
    | '/login'
    | '/my-blog'
    | '/newblog'
    | '/register'
    | '/blogs/$blogid'
    | '/myblogs/$blogid'
  id:
    | '__root__'
    | '/'
    | '/homepage'
    | '/login'
    | '/my-blog'
    | '/newblog'
    | '/register'
    | '/blogs/$blogid'
    | '/myblogs/$blogid'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  HomepageLazyRoute: typeof HomepageLazyRoute
  LoginLazyRoute: typeof LoginLazyRoute
  MyBlogLazyRoute: typeof MyBlogLazyRoute
  NewblogLazyRoute: typeof NewblogLazyRoute
  RegisterLazyRoute: typeof RegisterLazyRoute
  BlogsBlogidRoute: typeof BlogsBlogidRoute
  MyblogsBlogidRoute: typeof MyblogsBlogidRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  HomepageLazyRoute: HomepageLazyRoute,
  LoginLazyRoute: LoginLazyRoute,
  MyBlogLazyRoute: MyBlogLazyRoute,
  NewblogLazyRoute: NewblogLazyRoute,
  RegisterLazyRoute: RegisterLazyRoute,
  BlogsBlogidRoute: BlogsBlogidRoute,
  MyblogsBlogidRoute: MyblogsBlogidRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/homepage",
        "/login",
        "/my-blog",
        "/newblog",
        "/register",
        "/blogs/$blogid",
        "/myblogs/$blogid"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/homepage": {
      "filePath": "homepage.lazy.tsx"
    },
    "/login": {
      "filePath": "login.lazy.tsx"
    },
    "/my-blog": {
      "filePath": "my-blog.lazy.tsx"
    },
    "/newblog": {
      "filePath": "newblog.lazy.tsx"
    },
    "/register": {
      "filePath": "register.lazy.tsx"
    },
    "/blogs/$blogid": {
      "filePath": "blogs/$blogid.tsx"
    },
    "/myblogs/$blogid": {
      "filePath": "myblogs/$blogid.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
