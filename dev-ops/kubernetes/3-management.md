# Kubernetes / Management

## Add a Remote Kubernetes Cluster to the Context

https://cloud.google.com/sdk/gcloud/reference/container/clusters/get-credentials
```
gcloud container clusters get-credentials NAME [--internal-ip] [--region=REGION     | --zone=ZONE, -z ZONE] [GCLOUD_WIDE_FLAG …]
```

gcloud container clusters get-credentials iris-gke-prod-us-central1-alpha --region=us-central1


## Other Useful Commands

See kubectl configuration:
```
$ kubectl config view
```

See cluster info:
```
$ kubectl cluster-info
```
