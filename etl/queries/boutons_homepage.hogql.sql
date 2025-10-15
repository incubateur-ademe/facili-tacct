select event, properties.$sent_at, properties, distinct_id, `$session_id`, person_id
from events
where
and(
    or(
        event LIKE '%bouton_decouvrir_ressources_home%',
        event LIKE '%bouton_evaluer_diagnostic_home%',
        event LIKE '%bouton_rejoindre_communaute_home%'
    ),
    notIn(
        properties.$host, tuple(
            'facili-tacct-preprod.osc-fr1.scalingo.io',
            'facili-tacct.osc-secnum-fr1.scalingo.io',
            'facili-tacct-nginx.osc-secnum-fr1.scalingo.io',
            'facili-tacct.incubateur.ademe.dev',
            'null'
        )
    ),
)
AND timestamp < now()
AND properties.$current_url NOT LIKE '%localhost%'
AND properties.$current_url LIKE 'https://facili-tacct.beta.gouv.fr/%'
AND properties.$current_url NOT LIKE '%scalingo%'
AND properties.$current_url NOT LIKE '%secnum%'
order by timestamp desc
limit 50000
