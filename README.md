documenting everything ive done here:
-added angular material.
-ng g m user
-ng g m book
-ng g m blog

-ng g c user/pages/profile - simple form will be created inside here
-ng g interface user/models/user - interface to contain attributes
-ng g c user/components/form

-ng g c book/pages/book-list
-ng g interface book/models/book
-ng g c book/components/book-item
-ng g s book/services/book

-ng g c blog/pages/blog-list
-ng g interface blog/models/blog
-ng g c blog/components/blog-item
-ng g s blog/services/blog

~removed all contents of app html and replaced it with: router-outletrouter-outlet
~did this edit to app-routing.module:
const routes: Routes = [
  {
    path: 'book',
    loadChildren: () => import('./book/book.module').then((m) => m.BookModule)
  },
  {
    path: 'blog',
    loadChildren: () => import('./blog/blog.module').then((m) => m.BlogModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./user/user.module').then((m) => UserModule)
  }
];


ng g c shared/components/hader
ng g c shared/components/command-bar