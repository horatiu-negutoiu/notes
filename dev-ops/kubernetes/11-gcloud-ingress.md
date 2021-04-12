# Kubernetes / GCloud Ingress Service

This will set up an ingress service on an existing GKE cluster.

## Prerequisites

Select the target cluster and namespace:
```
$ kubectx <target-cluster>
$ kubens <target-namespace>
```

Also note down:
- The `region` where the cluster is (ex: `us-central1`)

## Instructions

Create an IP address in the same region:
```
$ gcloud compute addresses create dap-mlflow-ip --region us-central1
```

Create an ingress service:

