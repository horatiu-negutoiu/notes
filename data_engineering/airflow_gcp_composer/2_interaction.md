# Airflow, GCP Composer / Interaction

Docs:
https://cloud.google.com/composer/docs/how-to/accessing/airflow-cli

## Trigger DAG

gcloud composer environments run dev --location us-central1 --verbosity debug trigger_dag -- <dag_name> -e '2021-01-11T00:30:00+00:00'
