## Just another boilerplate...

---

The idea is to have the model, routes, controller of a resource (entity like 'user', 'fruit', 'car' etc.) together. Each resource should have its own tests inside of its `__tests__`. They may have sub resource, but don't do that unless you don't have any other good option.

There is no resource in the `resources` directory other than default one at the moment. When you add more resource like maybe 'fruit', then you will create a new directory inside of `resources` as `fruit`. Inside `fruit` you will have `fruit.controller.ts`, `fruit.model.ts`, `fruit.router.ts` and `__tests__`. `__tests__` will contain test cases for its model, controller, router respectively.

To start development server,

```
yarn start:dev
```

Customize Jest options however you like in `package.json`, read jest docs to understand further.

To test everything,

```
yarn test
```

To test just the controllers,

```
yarn test:controller
```

To test just the routers,

```
yarn test:router
```

In case of a model, you already understand how the test pattern will be. Just add a script in the `package.json` targeting the model. And then test like `test:model`.

To build code,

```
yarn build
```

To start production server (this will build and start app),

```
yarn start
```

The project includes `dotenv` as dependency already(not needed yet). So, if you need, you can add your custom environment variables in a `.env` and use them where you need. It is better if all configuration are done inside `config` directory. It is a good place for environment-wise config based.

PS: Set custom port to `PORT` if 3000 is busy.

Also, its not like I use this exact code to create app/service from. So, let me know if I forgot something.
