# Feast / Intro

Usage:
- operational data system∂ for **managing** and **serving** machine learning features to models in production.

Problems it solves:
- Consistent access to data: We don't want ML models/systems connected directly to a db because changes to the db will break the ML model. We want to interface to create consistency.
- Deploy features to prod. Provide an easier layer where data scientists can publish features with minimal oversight from the engineering team.
- Consistent data. Ensures ML models in prod receive data consistent with the one on which they are trained.
- Reuse features across projects. Allows all teams in an org to access a registry of features, allowing reuse.

What it is NOT:
- Not an ETL system.
- Not a source of truth, just a downstream layer.
- Not a data catalog in the org - just used for ML features.

Nice:
- we can set up ETL tools to populate its Feature Table, as part of its data ingestion stage
  - or just ingest a Panda Df

Warning:
- uses JSON to retrieve and return data, but there are entity/feature specifications where the type is declared, so we know the type exactly

**Feast Registry (Core)**

Docs:
https://docs.feast.dev/quickstart

https://github.com/feast-dev/feast

- specify config
- start a client
- define Entities (primary keys) and Features
- define FeatureTables made up of:
  - Entities
  - Features
  - BatchSource (where historical features are stored)
    - as locally or in GCS
    - format options are:
      - generic FileFormat (can be defined from Protobuf)
      - ParquetFormat
      - AvroFormat
      - ProtoFormat
      - generic StreamFormat (can be defined from Protobuf)
      - BigQuerySource
  - Optional: StreamSource
    - alongside the batchsource, it provides a real-time set of features
- register **entities** and **feature tables**
  - using: `client.apply(<[Entity, FeatureTable]>)`
  - get feature table:
    - `client.get_feature_table("table_name")`
- populate the Batch Source (in memory?)
  - using: `client.ingest(<FeatureTable>, <DataFrame>)`
- feature retrieval
  - using: `client.get_historical_features(...)`
  - **for training online** since it contains all values (historical ones, too)
  - must specify entity and features we want pulled
  - can be across tables, as long as entity matches
    - tutorial also describes how it "best matches" timestamps
      - see figure on **Point-in-time-correction**
      - it looks back and finds the last feature "behind" the timestamp
      - good cause we can say "give me the features for the last month, every half an hour, and it will best match them
  - this result can be used for model training
- populate online storage
  - using: `client.start_offline_to_online_ingestion(...)`
  - **for predictions only** since it only contains the latest values
  - example uses the Feast SDK to start a Spark batch job that will extract features and load them to an online store
- fetch the latest values
  - using `client.get_online_features(...)`
  - the point of this is to **grab the latest values**
- we can also populate online storage from streaming job
  - using `client.start_stream_to_online_ingestion(...)`
  - this provides a **continuous source of up-to-date data**
