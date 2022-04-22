resource "google_sql_database_instance" "ai-pipelines-sql-db" {
  for_each         = var.cloud_sql_instances
  name             = each.key
  database_version = "MYSQL_5_7"
  region           = var.region

  settings {
    tier = each.value.sql_db_tier

    ip_configuration {
      ipv4_enabled = true
      require_ssl  = true
    }

    backup_configuration {
      enabled            = true
      binary_log_enabled = true
    }

    maintenance_window {
      hour         = 4
      day          = 7 # Sunday
      update_track = "stable"
    }
  }
}

resource "google_sql_database" "ai-pipelines-db" {
  for_each = google_sql_database_instance.ai-pipelines-sql-db
  name     = "ai_pipelines_${var.env}"
  instance = each.value.name
}

variable "ai_pipelines_db_usernames" {
  type = map(string)
  default = {
    stage = "<test-username>"
    prod  = "<actual-prod-username>"
  }
}

resource "google_sql_user" "ai-pipelines-db-user" {
  for_each = google_sql_database_instance.ai-pipelines-sql-db
  name     = var.ai_pipelines_db_usernames[var.env]
  host     = "%"
  instance = each.value.name
}
