SELECT
  dealloc,
  stats_reset
FROM
  pg_stat_statements_info() pg_stat_statements_info(dealloc, stats_reset);