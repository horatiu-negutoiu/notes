# Bigquery / General Usage

Make a table:
```
bq mk --table \
--schema id:INTEGER,created_at:TIMESTAMP,feature_timestamp:TIMESTAMP,width:FLOAT,height:FLOAT,depth:FLOAT,active:BOOLEAN \
--time_partitioning_type=DAY \
--time_partitioning_field feature_timestamp \
--clustering_fields id \
target-project:target_dataset.target_table
```


Copy table from one to another:
```
bq --location=US cp -a \
src-project:src-dataset.src-table \
dst-project:dst-dataset.dst-table
```
