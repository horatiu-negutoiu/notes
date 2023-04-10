# Web / PHP-Wordpress / Guide

Wp development means having a good understanding of:
- basics of WP API
- WP template hierarchy
- WP action and filter hooks

## Actions

Actions are the hooks that the WordPress core launches at specific points during execution, or when specific events occur. Plugins can specify that one or more of its PHP functions are executed at these points, using the Action API.

```php
add_action() // hooks a custom function
do_actions() // executes the custom function
```

The lower the priority of the function, the earlier it gets executed.

## Filters

WordPress offers filter hooks to allow plugins to modify various types of internal data at runtime, by binding a callback to a filter hook.

```php
add_filter() // hooks a custom filter function
apply_filters() // executes the custom filter function
```
