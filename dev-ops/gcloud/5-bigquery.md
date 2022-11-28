# GCloud / BigQuery

When instantiating the bq.client() in python, the project=<proj> parameter has to match the project where the service account has BigQuery Job User permissions, or else you'll get a 403 error.
