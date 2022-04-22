# Terraform / Best Practices

- split infrastructure by modules and environments
- import modules in environments
- expose variables

## Install Auto-fmt on Save

1. Open VSCode extensions.
2. Search for `terraform`.
3. Install the Hashicorp one and reload VSCode.
4. Open Settings (Code > Preferences > Settings).
5. Browse to Extensions > Terraform.
6. Click the `Edit in settings.json` link.
7. Check that the following block is in the settings already:
   ```
   "[terraform]": {
       "editor.formatOnSave": true
   },
   ```
8. Test by modifying an existing `.tf` file, save and the extension should automatically modify the file to match correct formatting.
