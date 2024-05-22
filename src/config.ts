export const config = {
  host: process.env.NEXT_PUBLIC_SITE_URL!,
  name: "Facili-TACCT", //tab name in browser & header
  tagline: "",
  env: (process.env.TACCT_ENV || "dev") as "dev" | "prod" | "staging",
  appVersion: process.env.NEXT_PUBLIC_APP_VERSION!,
  appVersionCommit: process.env.NEXT_PUBLIC_APP_VERSION_COMMIT!,
  repositoryUrl: process.env.NEXT_PUBLIC_REPOSITORY_URL!,
  formUrl: "",
};
