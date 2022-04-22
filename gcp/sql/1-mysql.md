# GCP / SQL / Mysql

## Connecting to

1. Add mysql user, note user/pass.
2. Add IP address to Connections > Authorized Networks.
3. In Connections > Security, create client certificates and download them (3 of them, one Server CA + 2x Client certificates).
4. Add certificates and connection info to sql client or connect using `mysql` command line
   ```
   mysql -uroot -p -h <mysql-ip-address> --ssl-ca=server-ca.pem --ssl-cert=client-cert.pem --ssl-key=client-key.pem
   ```
