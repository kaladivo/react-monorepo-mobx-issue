# Unable to configure mobx in monorepo (using yarn workspaces)

This repo was created for [this stackowerflow question](https://stackoverflow.com/questions/54482106/unable-to-configure-mobx-in-monorepo-using-yarn-workspaces)

## How to replicate
1. Clone the repo
2. Run `yarn install`
3. For webapp: `yarn run:web`
4. For native app: android: `yarn run:android` or for ios: `yarn run:ios`

## Description of the issue
I am trying to setup a monorepo with react and react native app using a yarn workspaces.

My problem is with mobx (and react-mobx) library. When I use it in the shared package it does not work.

See the `packages/test-component`. It should just render a button and number and increment the number when the text is clicked.

In browser app (react) I get the following error: 

```
Failed to compile

PATH_TO_PROJECT]/monorepo-rn/node_modules/mobx-react/index.module.js
Module not found: Can't resolve 'react-dom' in '[PATH_TO_PROJECT]/monorepo-rn/node_modules/mobx-react'
```

In native app (react-native) I get the following runtime error: 
```
error: bundling failed: Error: Unable to resolve module `react-native` from `PATH_TO_PROJECT]/monorepo-rn/node_modules/mobx-react/native.js`: Module `react-native` does not exist in the Haste module map
```

I think the problem is with packages and linking them. There are couple of things I've tried to fix this issue, none of them worked: 

 - Add `mobx` and `mobx-react` into `workspaces.nohoist`  
 - Move all dependencies of the shared library into `peerDependencies`
 - Make sure to use `mobx@4.x` so it is compatible with react-native

Any help will be highly appreciated!
