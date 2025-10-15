SELECT event, timestamp, `$session_id`, person_id, code, libelle, thematique
FROM (
    SELECT
        event,
        timestamp,
        `$session_id`,
        person_id,
        properties.code as code,
        properties.libelle as libelle,
        properties.thematique as thematique,
        properties.$host as host,
        properties.$current_url as current_url,
        ROW_NUMBER() OVER (
            PARTITION BY person_id, `$session_id`, event, properties.code, toStartOfSecond(timestamp)
            ORDER BY timestamp ASC
        ) as row_num
    FROM events
    WHERE
        and(
            or(
                event LIKE '%export_xlsx_bouton%',
                event LIKE '%export_png_bouton%',
                event LIKE '%export_zip_bouton%'
            ),
            notIn(
                properties.$host, tuple(
                    'facili-tacct-preprod.osc-fr1.scalingo.io',
                    'facili-tacct.osc-secnum-fr1.scalingo.io',
                    'facili-tacct-nginx.osc-secnum-fr1.scalingo.io',
                    'facili-tacct.incubateur.ademe.dev',
                    'null'
                )
            )
        )
        AND timestamp < now()
        AND properties.$current_url NOT LIKE '%localhost%'
        AND properties.$current_url LIKE 'https://facili-tacct.beta.gouv.fr/%'
        AND properties.$current_url NOT LIKE '%scalingo%'
        AND properties.$current_url NOT LIKE '%secnum%'
)
WHERE row_num = 1
ORDER BY timestamp DESC
LIMIT 50000
