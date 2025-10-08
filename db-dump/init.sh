    #!/bin/bash
    set -e
    psql -U "$POSTGRES_USER" -d "$POSTGRES_DB" -f /docker-entrypoint-initdb.d/facili-tacct-postgis-databases.sql
