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

Port-forward into pods
```
$ kubectl port-forward pods/<pod-name> <container-port>:<from-the-outside-port>
```

Troubleshooting the cluster as a whole
```
$ kubectl cluster-info dump
```

Print kubernetes version:
```bash
# after the instructions above:
$ kubeadm version
&version.Info{Major:"1", Minor:"25", GitVersion:"v1.25.4"

$ kubectl version
Client Version: v1.25.4
Kustomize Version: v4.5.7
```

Delete kubernetes cluster:
```bash
$ kubeadm reset
```

View kubelet logs:
```bash
$ journalctl -u kubelet.service
```

Uninstall Kubernetes
```bash
$ sudo apt-get purge kubeadm kubectl kubelet kubernetes-cni kube*   
$ sudo apt-get autoremove  
$ sudo rm -rf ~/.kube
# then restart the computer.
```

