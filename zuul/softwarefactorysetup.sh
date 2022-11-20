#!/bin/bash
firewall-cmd --add-service=http --add-service=https
firewall-cmd --add-port=29418/tcp
firewall-cmd --runtime-to-permanent
yum install -y https://softwarefactory-project.io/repos/sf-release-3.7.rpm
yum install -y sf-config
echo '      - hypervisor-k1s' >> /etc/software-factory/arch.yaml
echo 'gateway_force_fqdn_redirection: False' > /etc/software-factory/custom-vars.yaml
echo 'enable_insecure_workers: True' >> /etc/software-factory/custom-vars.yaml
sfconfig
awk '/admin_password/ { print $2}' /etc/software-factory/sfconfig.yaml
