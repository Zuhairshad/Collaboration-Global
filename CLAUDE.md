@AGENTS.md
https://www.youtube.com/watch?v=87REHnkNUMs&t=7s 

## SEO toolkit (claude-seo, vendored)

`.claude/skills/seo*/` and `.claude/agents/seo-*.md` are vendored from
[claude-seo](https://github.com/AgriciDaniel/claude-seo); the version is pinned in
`.claude/claude-seo.lock`. Don't hand-edit them: change the tag and re-run
`bash .claude/scripts/sync-claude-seo.sh <tag>`.

**When to use it.** Only when a change affects search visibility: `metadata` /
`generateMetadata`, Open Graph images, JSON-LD, `app/sitemap.ts`, `app/robots.ts`,
public page headings/copy, internal links, image alt text/sizing, routes and
redirects. Use the one targeted skill (`seo-page`, `seo-schema`, `seo-sitemap`,
`seo-technical`, `seo-content`, `seo-images`, `seo-geo`, `seo-agentic`).
Skip it for styling, animation, form logic and refactors. Don't run `/seo audit`
(it fans out ~10 subagents) unless explicitly asked.

**Runtime.** The Python tools need a one-time setup per container (~40 s,
installs outside the repo via `CLAUDE_SEO_DATA_DIR` in `.claude/settings.json`).
Run it only when a task needs a script:
`"$(git rev-parse --show-toplevel)/.claude/skills/seo/scripts/claude-seo" setup --skip-browser`
(`doctor --json` checks readiness).

**Reviewing this site locally.** `npm run build && npx next start -p 3100`, then either
`... claude-seo" run page_checks.py --file page.html --base-url <url>` (offline), or
prefix a live check with `CLAUDE_SEO_LOCAL_TARGETS=localhost:3100` (localhost is
blocked by the SSRF guard otherwise; don't set that variable globally).

**Stack-specific rules.**
- Implement fixes with the Next.js Metadata API (`metadata`, `metadataBase`,
  `alternates.canonical`, `openGraph`, `app/sitemap.ts`, `app/robots.ts`,
  `opengraph-image`), not hand-written `<head>` tags. JSON-LD goes in
  `<script type="application/ld+json" dangerouslySetInnerHTML=...>`.
- `images-missing-dimensions` is a false positive for `next/image` with `fill`
  (`data-nimg="fill"`): the parent reserves the space. Only flag non-`fill` images.
- Leave out the upstream "community footer" from SEO reports.