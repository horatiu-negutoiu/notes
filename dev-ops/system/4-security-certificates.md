# System / Security and Certificates

## Certificates in Kubernetes

Decode the yaml file containing the certificate:
```
$ sops --decrypt path/to/file.enc.yaml
apiVersion: v1
kind: Secret
metadata:
    name: important-secrets-file-tls
type: Opaque
data:
    tls.key: someRandomKeyAlphanumerics=
    tls.crt: someRandomCertificateAlphanumerics=
```

Decode the existing certificate:
```
$ echo someRandomCertificateAlphanumerics= | base64 --decode | output-certificate.crt
```

Inspect the outputted certificate:
```
$ openssl x509 -in output-certificate.crt -text -noout
```

Decode the key into a pem file:
```
$ echo someRandomKeyAlphanumerics= | base64 --decode > output-key.pem
```

Create a configuration file:
```csr-configuration.cnf
[ req ]
default_bits       = 2048
distinguished_name = req_distinguished_name
req_extensions     = req_ext
days               = 365
[ req_distinguished_name ]
# Change these fields to align with your existing certificate subject details
countryName                     = Country Name (2 letter code)
countryName_default             = two-country-code
stateOrProvinceName             = State or Province Name (full name)
stateOrProvinceName_default     = Full-State-Name
localityName                    = Locality Name (eg, city)
localityName_default            = Full-Locality-Name
organizationName                = Organization Name (eg, company)
organizationName_default        = FullOrganizationName
organizationalUnitName          = Organizational Unit Name (eg, section)
organizationalUnitName_default  = ReplaceThis
commonName                      = Common Name (e.g. server FQDN or YOUR name)
commonName_default              = some.target.subdomain.com
emailAddress                    = Email Address
emailAddress_default            = securityEmail@subdomain.com
[ req_ext ]
# Extensions for server certificates (`man x509v3_config`).
# Change these fields to align with your existing certificate x509 extentions
# For a list of all existing extensions, see the manual: https://www.openssl.org/docs/man1.1.1/man5/x509v3_config.html
basicConstraints = CA:FALSE
subjectKeyIdentifier = hash
keyUsage = digitalSignature, keyEncipherment
subjectAltName = @alt_name

[alt_name]
DNS.1 = dns1.subdomain.com
```

Create a CSR (Certificate Signing Request)
```
$ openssl req -new -sha256 -key output-key.pem -out output-request.csr -config csr-configuration.cnf
You are about to be asked to enter information that will be incorporated
into your certificate request
...
```

Then, verify the CSR:
```
openssl req -in output-request.csr -text -noout
```

Don't forget to verify by checking the secret names in kubernetes (inspect/describe deployments, etc)
