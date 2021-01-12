# Kubernetes / nginx Forwarding

Docs:
https://zepworks.com/posts/access-minikube-remotely-kvm/#3b-reverse-proxy-via-nginx

https://stackoverflow.com/questions/40767164/expose-port-in-minikube

https://kubernetes.io/docs/tasks/access-application-cluster/port-forward-access-application-cluster/

https://minikube.sigs.k8s.io/docs/handbook/accessing/

https://stackoverflow.com/questions/39864385/how-to-access-expose-kubernetes-dashboard-service-outside-of-a-cluster


Install `nginx`:
```
$ sudo apt update
$ sudo apt install nginx
```

Get `minikube` host IP $
`Ex: 192.168.1.121`

Gather a list of IP/ports:


Setup a reverse proxy for each ip/port set:
```
stream {
  server {
      listen $MINIKUBE_HOST:51999;
      #TCP traffic will be forwarded to the specified server
      proxy_pass 192.168.39.131:8443;       
  }
}
```
