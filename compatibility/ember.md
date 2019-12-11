# Ember
Sourcemaps in Ember are possible using [ember-cli-sass
](https://github.com/simonexmachina/ember-cli-sass). The source code position maps correctly but the source code path has problems. For example, what should be 

```
/Users/admin/Desktop/my-project/app/styles/app.scss
```
is displayed as:

```
/Users/admin/Desktop/my-project/out-182-broccoli_merge_trees_full_application/app/styles/app.scss
```
where the `out-182-broccoli_merge_trees_full_application/` is mistakenly added.