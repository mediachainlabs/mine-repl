# mine-repl
repl that preloads connections to main db and redis, requires heroku surrogate

```
% npm install
% heroku plugins:install https://github.com/tpope/heroku-surrogate.git
% npm run staging

> mine-repl@1.0.0 staging /Users/arkadiy/mine/mine-repl
> heroku surrogate -a mine-relay-staging node-repl index.js

> var _ = knex('users').count('*').then(c => console.log(c[0]));
undefined
> { count: 9 }
```
