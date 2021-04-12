# Airflow / General Principles

- DAGs are triggered at the end of the schedule period (not at the beginning)
- Time at which DagRun is triggered = start_date + schedule_interval
  ex:
  ```
  start_date = datetime(2020, 4, 13)
  schedule_interval = daily
  DagRun = datetime(2020, 4, 13) + timedelta(day=1) = datetime(2020, 4, 14)      # April 14th, 2020 at midnight
  ```
- the `Run` date is the start of the scheduling interval
- the `Started` date is the time at which the DagRun was created
- for manually triggered dags, both `Run` and `Started` are the same
