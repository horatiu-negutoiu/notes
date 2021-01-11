Display configuration
$ microk8s.config

Boot up dashboard
$ microk8s.dashboard-proxy

Cluster manager
$ microk8s.kubectl [flags] [options]

    Display cluster info aka. proxied links:
    $ microk8s.kubectl cluster-info

    Display all systems
    $ microk8s.kubectl get all --all-namespaces

    Expose a service on port 80 using NodePort
    $ microk8s.kubectl expose deployment microbot --type=NodePort --port=80 --name=microbot-service