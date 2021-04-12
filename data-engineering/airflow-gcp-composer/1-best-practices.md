# Airflow, GCP Composer / Best Practices

- DAGs should not carry computational load. Their job should be focused on booting up workers to do it.

## Composer

- `KubernetesPodOperator` vs `GKEPodOperator`
  - Given, an Airflow controller + x workers...
  - `KubernetesPodOperator` boots up a pod on one of the workers. This is fine in the beginning, when there aren't a lot of pipelines and a simpler setup is preferred. However, as the number of pipelines increases, so does the need to scale workers up or down.
  - `GKEPodOperator` allows the Airflow controller to communicate with another GKE cluster and boot up a pod there. This GKE cluster is hypothetically configured to auto scale up and down as needed. This is ultimately preferred over a Kubernetes Pod Operator because it takes the load off the fixed Airflow cluster, while offering a cost-conscious solution.
