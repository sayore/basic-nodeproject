# Node Project Template

This is a template project to eaasily setup a new Project with ES6, Pug and sass compiler. This setup is used so often by me that i decided to just template it.

The codebase is completly empty. Except for a basic pug-html5 Template in the views directory. 👍

## Steps to use

1. Clone or Download this Repo and extract it into the project directory.
2. Run `npm install` in the directory. And install gulp globally if you do not have already installed it. (`npm i gulp -g`)
3. Let Gulp watch the files (just use `gulp` command in the directory)
4. Enjoy the compiled files in dist.

## Important Notes

- The files are all in the same directory tree as in the original directory tree is laid out.
  - The expection here is that all public files go into a subdirectory of dist called **rendered**.
- Sass, Pug, JS files go into public => The result will be in dist/rendered.
- NodeJS files go into src => The result will be in dist.
