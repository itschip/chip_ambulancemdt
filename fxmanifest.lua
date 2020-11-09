fx_version "adamant"
game "gta5"
version "1.0.0"
description "Ambulance CAD for Oljeriket. Copyright (c) Oljeriket All rights reserved."

author "chip"


client_script {
  'resources/dist/client/*.client.js'
}

server_script {
  'resources/dist/server/*.server.js'
}

files {
  'resources/html/index.html',
  'resources/html/*.js'
}