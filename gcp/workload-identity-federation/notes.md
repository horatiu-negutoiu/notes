# GCP / Workload Identity Federation

## Overview

Two important parts to this:
- `Workload`: The actual work being done (application, service, software running on a compute environment, etc).
- `Identity Federation`: Trusting and _external_ identity provider (eg. Github) to authenticate and verify identities instead of managing them in the cloud environment.

Essentially, while you would normally do this with SA (Service Account) keys:
```
SA + IAM --> SA Key --> k8s secret --> written/pointed as GOOGLE_APPLICATION_CREDENTIALS --> authentication by Client() --> [do_work()]
```

You now do this:
```
SA + IAM --> Identity Pool --> External Identity (eg Github) --> k8s SA --> authentication --> [do_work()]
                                 ^--- uses OAuth to link to GCP's identity pool 
```
- create the service account with IAM permissions
- create a "Workload Identity Pool" in GCP
- connect the external identity provider (ex: Github) to the GCP identity pool
- connect the k8s' SA to the GCP SA as usual
- this allows for "external" workloads to authenticate and do_work()

This works because GCP and the "external entity" (eg Github) have OIDC endpoints and verify identity through those.

### What happens if there's no endpoint (eg. local jobs)?

In that case, you can use "OIDC JSON Web Key Sets" - manually generated tokens that are inserted into the (GCP) pool.

## Workload Identity Pools

A Workload Identity Pool is the "entity" that lets you manage external identities.
- best to have one pool per external entity

### Tokens

IdP's (Identity Providers) issue certain tokens associated with certain "attributes".
These attributes are called `claims`.
