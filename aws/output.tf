output "rancher_server_url" {
  value = module.rancher_common.rancher_url
}

output "rancher_node_ip" {
  value = aws_instance.rancher_server.public_ip
}

output "workload_node_ip" {
  value = aws_instance.quickstart_node.public_ip
}

output "worker_instance_profile" {
  value = aws_iam_instance_profile.cloud_provider_worker.arn
}

output "worker_iam_role" {
  value = aws_iam_role.cloud_provider_worker.arn
}
