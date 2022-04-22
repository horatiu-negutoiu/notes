# Kubernetes / Troubleshooting

Get pod logs:
```
$ kubectl logs <pod-name>
```

Get container logs:
```
$ kubectl logs <pod-name> <container-name>
```

Inspect the deployed pod (check image sha, etc):
```
$ kubectl describe pod/<pod-name> [-n <namespace>]
```

Get a shell inside a running container:
```
$ kubectl exec --stdin --tty <pod-name> -- /bin/bash
```

Get a shell inside a running pod with multiple containers:
```
$ kubectl exec --stdin --tty <pod-name> --container <container-name> -- /bin/bash
```
Note: if the particular container is in CrashLoopBackOff, connections to that container are not possible.

To delete a PersistentVolume that as attached and is stuck in "Terminating"
```
# describe the pv and notice that the finalizers are protected
$ kubectl describe pv <pv-name>

# patch the pv
$ kubectl patch pv pv_name -p '{"metadata":{"finalizers":null}}'

# pv should be deleted now
$ kubectl get pv
```
