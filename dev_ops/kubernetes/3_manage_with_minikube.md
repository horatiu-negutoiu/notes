## Managing Kubernetes with Minikube

See kubectl configuration:
```
$ kubectl config view
```

See cluster info:
```
$ kubectl cluster-info
```

Ssh into the Minikube VM:
```
$ minikube ssh
```

Stop single node cluster:
```
$ minikube stop
```

Check minikube status:
```
$ minikube status
```

Check minikube addons list:
```
$ minikube addons list
```

Access Minikube dashboard:
```
$ minikube dashboard
```

## Namespaces

https://kubernetes.io/docs/tasks/administer-cluster/namespaces-walkthrough/

Tips:
- [get credentials](https://cloud.google.com/kubernetes-engine/docs/how-to/cluster-access-for-kubectl#generate_kubeconfig_entry) to use the cluster
- create the namespace
- use `kubens` to switch to the new namespace
- cloud environments will use some sort of sidecar pattern to provide authentication (ex: [GCP's Cloud SQL Proxy](https://cloud.google.com/sql/docs/mysql/sql-proxy#invocations))
- apply yaml files
- cross-namespace communication can be achieved (ex: [link](https://stackoverflow.com/questions/58009551/kubernetes-how-to-allow-two-pods-running-in-same-different-namespace-communicat), [link](https://kubernetes.io/docs/concepts/services-networking/service/), [link](https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/#services))
