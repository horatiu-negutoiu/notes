# Wordpress / Plugins & APIs

## Basics: Activation, Deactivation and Uninstall Hooks

Activation:
```php
function activation_function() {
    ...
}

register_activation_hook(
	__FILE__,
	'activation_function'
);
```

Deactivation hooks:
```php
function deactivation_function() {
    ...
}

register_deactivation_hook(
	__FILE__,
	'deactivation_function'
);
```

Uninstall hook, clean up after your plugin is deleted using the WordPress Admin, delete all data created by your plugin, such as any options that were added to the `options` table:
```php
function uninstall_function() {
    ...
}

register_uninstall_hook(
	__FILE__,
	'uninstall_function'
);
```

## Custom Hooks

You can add your own, custom hooks with do_action() , which will enable developers to extend your plugin by passing functions through your hooks.

```php

// the callback function that does the work
function example_callback( $arg1, $arg2 ) {
    // (maybe) do something with the args.
}

// the act of registering this action
// 10 is the priority, 2 is the number of accepted arguments
add_action( 'example_action', 'example_callback', 10, 2 );

// trigger the action with the 2 expected arguments
do_action( 'example_action', $arg1, $arg2 );
```

### Removing Hooks

You can also remove hooks but it's not really recommended because it removes functionality kind of like a side-effect. This could cause unforseen behaviours, so testing well is paramount here. With that said, it's done using the `remove_action()` function.

## Wordpress APIs

Wordpress comes with some APIs already built in:
- Options API (most common one) makes it easy to store data in the db
- HTTP API, allows for easy requests
