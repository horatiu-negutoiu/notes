resource "google_container_cluster" "ai-pipelines-cluster" {
  name                     = "kf-${var.env}"
  description              = "AI Pipelines ${var.env} cluster."
  location                 = var.location
  network                  = var.cluster_network
  subnetwork               = var.cluster_subnetwork

  release_channel {
    channel = "STABLE"
  }

  cluster_autoscaling {
    enabled = false
  }

  ip_allocation_policy {
    services_secondary_range_name = var.services_secondary_range_name
    cluster_secondary_range_name  = var.cluster_secondary_range_name
  }

  node_pool {
    initial_node_count = var.node_pool_count

    management {
      auto_repair  = true
      auto_upgrade = true
    }

    node_config {
      service_account = google_service_account.runtime_worker.email
      machine_type    = var.node_pool_machine_type
      disk_size_gb    = var.node_pool_disk_size
      image_type      = "COS"
      tags            = [local.service_name]
      oauth_scopes = [
        "https://www.googleapis.com/auth/cloud-platform",
      ]
    }
  }
}
