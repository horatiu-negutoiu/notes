# GCP Artifact Registry / Configuration

After setting up docker and gcloud, every registry that is being pushed to needs to be registered:
```
gcloud auth configure-docker <registry-name>
```
Ex:
```
gcloud auth configure-docker northamerica-northeast2-docker.pkg.dev
```
