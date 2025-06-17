# GCP / Google Cloud Logging

> ### Warning
> The python Google Logging module adds about 1.5 seconds of execution time when instantiating.
> 
> Also, it requires Flask to be in `threaded_mode=True` otherwise GRPC errors may start being issued, as gcp logging module tunnels don't play nice with Flask's.
