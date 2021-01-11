# Google Cloud CLI / Authentication

Log into GCP account:
```
$ gcloud auth login
```

## Working with Service Accounts

Interfacing with a Google Cloud service using one of their third-party SDK libraries (e.g. Go, Python)? Use the `GOOGLE_APPLICATION_CREDENTIALS` environment variable.
```
$ export GOOGLE_APPLICATION_CREDENTIALS=my_downloaded_credentials_key_file.json
```

Making calls to a Google-provided tool, such as gcloud or gsutil? Use the tool's provided mechanism for authenticating with the remote service. For gcloud, this is the gcloud auth activate-service-account command.

```
$ gcloud auth activate-service-account --key-file=path/to/key_file.json
```

The `GOOGLE_APPLICATION_CREDENTIALS` environment variable provides a mechanism for user-written applications using a Google Cloud SDK to easily import credentials if they are not otherwise accessible in their environment. These credentials are loaded according to the order of precedence defined in the [ADC docs](https://cloud.google.com/docs/authentication/production).

Other applications provided by Google have their own well-established mechanisms for importing credentials to authenticate to Google. This mechanism should be used where these applications are used. For common tools:

- `gcloud`: use `gcloud auth activate-service-account`. Be aware that this [may litter your disk with authentication credentials](https://serverfault.com/questions/848580/how-to-use-google-application-credentials-with-gcloud-on-a-server/849910#849910) which persist, so for security reasons you may wish to configure the environment to ensure these are erased after use.
- `gsutil`: if running standalone, use `gsutil config -e` to set up the service account. However, most installations will sit alongside the `gcloud` tool from the Google Cloud SDK, so should use the approach described above for `gcloud`.

