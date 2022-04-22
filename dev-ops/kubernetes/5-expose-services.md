# Kubernetes / Expose Services

## Prologue

```
# list the services
kubectl get services

NAME                                           TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)                      AGE
<service-name>                                 ClusterIP   10.15.246.29    <none>        80/TCP                      21d

# there is no external IP, so the service is not available
```

## Port-forward an Existing Service

```
$ kubectl port-forward svc/<service-name> <port you type in your browser>:<port running the service in the cluster>
Forwarding from 127.0.0.1:8080 -> 3000
Forwarding from [::1]:8080 -> 3000

# this will only be available from http://localhost:<from port>
# aka. kubectl acts as a proxy, ssh-ing and thus tunneling into the cluster
```

## Create a Service

```
$ kubectl expose deployment <deployment-name> --type ClusterIP --protocol TCP --port 80 --target-port 8080

# where "port" is the port the application inside the pod is exposing
# and "target-port" is the port used to connect into the container
```
