# ADDING NEW ICONS

## Download Icon

1. use this link to download icon SVG's:
https://fonts.google.com/icons?selected=Material+Icons

2. add the svg on this folder `./src/assets/svg`
3. on the `Components/` directory, run this command:
```shell script
$ npm run generate-icons
```
4. get the generated ts for the icon located in `/src/app/svg`

------
## Adding the .ts to the library

1. open `./sp-components/src/app/svg`
2. drop the icon in the selected subdirectory (select Misc for general icons)
3. update the index.ts for the selected subdirectory to export the icon
4. re-deploy library
