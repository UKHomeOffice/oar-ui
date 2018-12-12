#!/usr/bin/env bash

set -o nounset

########## VARIABLES ##########

# Server

export UI_PORT="${UI_PORT:-4001}"
export DEBUG="${DEBUG:-}"

# PKI

export UI_CERT_CRT="${UI_CERT_CRT:-/mnt/certs/tls.pem}"
export UI_CERT_KEY="${UI_CERT_KEY:-/mnt/certs/tls-key.pem}"
export UI_CA_BUNDLE="${UI_CA_BUNDLE:-/etc/ssl/certs/ca-bundle.crt}"

## Keycloak
#
#export UI_KEYCLOAK_AUTH_SERVER="${UI_KEYCLOAK_AUTH_SERVER:-https://keycloak:3060/auth}"
#export UI_KEYCLOAK_REALM="${UI_KEYCLOAK_REALM:-cba}"
#export UI_KEYCLOAK_RESOURCE="${UI_KEYCLOAK_RESOURCE:-ui}"
#: "${UI_KEYCLOAK_CLIENT_SECRET?Variable must be passed to container (no default is provided).}"
#export UI_KEYCLOAK_SSL_REQUIRED="${UI_KEYCLOAK_SSL_REQUIRED:-external}"
#
## Proxies
#
#export UI_PROXY_TARGET="${UI_PROXY_TARGET:-https://app:8080}"
#export UI_SEARCH_PROXY_TARGET="${UI_SEARCH_PROXY_TARGET:-https://search:3010}"
#export UI_PROXY_SECURE="${UI_PROXY_SECURE:-true}"
#
## Websocket
#
#export UI_WEBSOCKET_TARGET="${UI_WEBSOCKET_TARGET:-wss://app:8080/app/alarms}"

########## MAIN ##########

#if [ $# -gt 0 ]; then
#    exec "$@"
#else
#    exec node "${UI_HOME}/server.js" \
#    "--port=$UI_PORT" \
#    "--app_proxy_target=$UI_PROXY_TARGET" \
#    "--app_websocket=$UI_WEBSOCKET_TARGET" \
#    "--search_proxy_target=$UI_SEARCH_PROXY_TARGET" \
#    "--keycloak_realm=$UI_KEYCLOAK_REALM" \
#    "--keycloak_auth_server=$UI_KEYCLOAK_AUTH_SERVER" \
#    "--keycloak_ssl_required=$UI_KEYCLOAK_SSL_REQUIRED" \
#    "--keycloak_resource=$UI_KEYCLOAK_RESOURCE" \
#    "--keycloak_client_secret=$UI_KEYCLOAK_CLIENT_SECRET" \
#    "--tls_cert_key=$UI_CERT_KEY" \
#    "--tls_cert_cert=$UI_CERT_CRT" \
#    "--ca_bundle=$UI_CA_BUNDLE" 
#fi
npm run docker

