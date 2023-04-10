# Wordpress / Troubleshooting

Ensure you have the following wordpress env vars set in `wp-config.php`:
```
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
define('WP_DEBUG_DISPLAY', false);
```

Check the site logs directly:
```
<site_root>/wp-content/debug.log
```
