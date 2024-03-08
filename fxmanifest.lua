fx_version "adamant"
games { "rdr3" }
rdr3_warning 'I acknowledge that this is a prerelease build of RedM, and I am aware my resources *will* become incompatible once RedM ships.'

ui_page 'ui/index.html'

version '1.0.0'
author 'TWH Scripts'
description 'Showing tips during the loading screen'

client_scripts {
    'client.lua'
}

files {
    'ui/index.html',
    'ui/script.js',
    'ui/main.css',
    '*.mp3'
}
