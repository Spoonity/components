# Components

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.25.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## sp-components

All components for the library should go inside the `Components/sp-component` directory. Components are classified by wither Atoms, Molecules, or Organisms.

# Deploying the project
1. go to the working branch for the library 'angular-library-v2' and make sure new changes are in there.
2. make sure that your working tree is clean when you do `git status`. Commit your changes or stash/checkout any unwanted changes.
3. run `npm run deploy`. This should now run the deployment process and build the library

# ADDING NEW ICONS

## Download Icon

1. use this link to download icon SVG's:
   https://fonts.google.com/icons?selected=Material+Icons

2. add the svg on this folder `Components/src/assets/svg`
3. make sure you name this icon properly: `<icon_name>.svg`. This is important as to how it will get called with `<spt-icon>`
4. on the `Components/` directory, run this command:
```shell script
$ npm run generate-icons
```
5. get the generated ts for the icon located in `Components/src/app/svg`

------
# Adding the .ts to the library

1. open `./sp-components/src/app/svg`
2. drop the icon in the selected subdirectory (select Misc for general icons)
3. update the index.ts for the selected subdirectory to export the icon
4. re-deploy library
