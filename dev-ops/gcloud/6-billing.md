# GCP / Billing

Some sample queries to help with understanding where the fees go to:

select SUM(cost)
from `<projectId>.<datasetId>.<tableId>`   # this is where the billing is set to export the data
cross join unnest(labels) as labels_value
where project.id = "<projectId>"
and service.description = "Cloud Dataflow"
and DATE(_PARTITIONTIME) >= DATE('2022-05-01')
and DATE(_PARTITIONTIME) < DATE('2022-06-01')
and value in ('<jobId1>',
  '<jobId2>')

possible services could be:
```
Cloud Pub/Sub
Compute Engine
Cloud Storage
Cloud Logging
Cloud Dataflow
Stackdriver Monitoring
Kubernetes Engine
Secret Manager
Cloud Functions
BigQuery
```
