# Airflow / Installation

Ensure Kubernetes is deployed/installed and the `kubectl` command points to the cluster.

Create an Airflow deployment:
```
$ kubectl create deployment airflow-depl --image=puckel/docker-airflow
```

https://hub.docker.com/r/puckel/docker-airflow

https://medium.com/@ipeluffo/running-apache-airflow-locally-on-kubernetes-minikube-31f308e3247a
