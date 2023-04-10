# Powershell / Common Commands

Get execution policy:
```
$ Get-ExecutionPolicy -List
        Scope ExecutionPolicy
        ----- ---------------
MachinePolicy       Undefined
   UserPolicy       Undefined
      Process       Undefined
  CurrentUser       Undefined
 LocalMachine       AllSigned
```

Set execution policy, set it to Process if you want just the current shell, or another scope for "broader" more permanent settings.
```
$ Set-ExecutionPolicy Bypass -Scope LocalMachine
```

Value can be `Bypass`, `Restricted`, `AllSigned`

## unblocking a script

To temporarily unblock a script limited by an execution policy:
```
$ Unblock-File -Path .\Start-ActivityTracker.ps1
$ .\Start-ActivityTracker.ps1
```
