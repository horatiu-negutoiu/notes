# Terraform / Managing Resources

## Targetted plan or apply

```
terraform [plan|apply] -target=<resource.name>
```

## Detach resource from state

```
terraform state rm '<resource.name>'
```

## Importing resource

check the bottom page of resource but essentially:

```
terraform import google_service_account.my_sa projects/my-project/serviceAccounts/my-sa@my-project.iam.gserviceaccount.com
```
