# Airflow / Backfills

- the scheduler will backfill all DagRun entries of a DAG whose time dependency have been met if catchup is enabled (aka. all the DagRun's it's missing).
- only the latest DagRun will be executed if catchup is disabled
  ```
  default_args = {
    "owner": 'someone',
    "depends_on_past": False,
    "start_date": datetime(2020, 7, 15),
    "retries": 0,
  }

  dag = DAG(
    dag_id="DAG-1",
    default_args=default_args,
    catchup=True,
    schedule_interval="@hourly"
  )
  ```
- if the Dag above is started on `2020-07-15 04:10:00`, 4 Dag runs will be executed if catchup is enabled.
  ```
  Analysis:

  start_date = datetime(2020, 7, 15)  # 2020-07-15 00:00:00
  schedule_interval = @hourly

  Run time                                          Start Time
  Start Date + (Schedule Interval * Intervals)
  1st interval: 2020-07-15 01:00:00                 2020-07-15 04:10:00
  2nd interval: 2020-07-15 02:00:00                 2020-07-15 04:10:00
  3rd interval: 2020-07-15 03:00:00                 2020-07-15 04:10:00
  4th interval: 2020-07-15 04:00:00                 2020-07-15 04:10:00
  (04:10 time reached)

  **NOTICE**, all these Dag's start times will be 4:10
  ```


## Backfill Command

```
airflow dags backfill................ ?
```

## Good Practices

Given that multiple DagRun instances will possibly be started, make sure:
- always use static date to make sure DagRuns are populated as expected
- make sure Dags are idempotent
