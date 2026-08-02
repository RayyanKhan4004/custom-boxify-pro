const DEFAULT_SITE_URL = "https://www.customboxifypro.com";
const INDEXNOW_KEY = "bc02270297524ac7af7aab4989b0369c";

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_SITE_URL
).replace(/\/+$/, "");
const sitemapUrl = `${siteUrl}/sitemap.xml`;

const sitemapResponse = await fetch(sitemapUrl);

if (!sitemapResponse.ok) {
  throw new Error(
    `Unable to read ${sitemapUrl}: ${sitemapResponse.status} ${sitemapResponse.statusText}`,
  );
}

const sitemap = await sitemapResponse.text();
const urlList = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(
  ([, url]) => url,
);

if (urlList.length === 0) {
  throw new Error(`No URLs were found in ${sitemapUrl}.`);
}

const response = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({+
    host: new URL(siteUrl).host,
    key: INDEXNOW_KEY,
    keyLocation: `${siteUrl}/${INDEXNOW_KEY}.txt`,
    urlList,
  }),
});

if (!response.ok) {
  throw new Error(
    `IndexNow submission failed: ${response.status} ${response.statusText}`,
  );
}

console.log(`Submitted ${urlList.length} URL(s) to IndexNow.`);
