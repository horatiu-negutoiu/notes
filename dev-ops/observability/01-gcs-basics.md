# Observability / GCS Basics

GCP's Cloud Monitoring model for monitoring data consists of 3 primary concepts:
1. **Monitored-resource types**: The source of the measurement (ex: A model (ex: "my_model/v1") or a pre-defined GCP resource that is monitored by them, like a Compute instance)
2. **Metric type**: The name of the metric (ex: CPU, "f1_score")
3. **Metric value(s)**: The values of the metric (ex: 0.6), or a time-series of the values (ex: [(0.6, 2025-08-25 12pm), (0.7, 2025-08-26 12pm)])


