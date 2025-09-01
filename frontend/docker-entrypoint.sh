#!/bin/sh

# Inject API_URL into config.json at runtime
cat <<EOF > /usr/share/nginx/html/assets/config.json
{
  "apiUrl": "${API_URL}"
}
EOF

# Start nginx
nginx -g 'daemon off;'
