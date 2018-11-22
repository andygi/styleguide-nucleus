# styleguide-nucleus
Styleguide based on Sass annotations

## installation
Go to in Gruntfile.js directory

### Mac/Linux users
Simply run the `./install.sh`

### Win users
run the follows commands:

```
npm install grunt --save-dev
npm install grunt-sass --save-dev
npm install node-sass grunt-sass --save-dev
npm install grunt-contrib-watch --save-dev
npm install grunt-contrib-clean --save-dev
npm install grunt-run --save-dev
npm install nucleus-styleguide --save-dev
```

## Run Styleguide

### General stuff

In order to run the all stuffs for production version:

`grunt prod`

or for develop

`grunt`

### Style guide only

If you need to update the styleguide only run

`grunt run:tool`
