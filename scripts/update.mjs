// 프로필 README 의 「최근 작업」을 공개 저장소에서 다시 그린다 — 의존성 없음(Node 20+ fetch).
//   GITHUB_TOKEN=… node scripts/update.mjs     (토큰 없이도 돌지만 API 한도가 낮다)
// README 의 <!-- recent:start --> … <!-- recent:end --> 사이만 바꾼다. 나머지는 손으로 쓴다.

import { readFile, writeFile } from 'node:fs/promises';

const OWNERS = ['larrykim-dev', 'yeoljigi', 'serverpal'];
// 보이지 않을 저장소 — 프로필 · 조직 소개, 옮김 안내, 빈 저장소
const SKIP = new Set(['larrykim-dev/larrykim-dev', 'yeoljigi/.github', 'serverpal/.github', 'larrykim-dev/yeoljigi', 'larrykim-dev/Larry']);
const LIMIT = 6;
const README = new URL('../README.md', import.meta.url);

const headers = { accept: 'application/vnd.github+json', 'user-agent': 'larrykim-dev-profile' };
if (process.env.GITHUB_TOKEN) headers.authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
const api = async (path) => {
  const res = await fetch(`https://api.github.com${path}`, { headers });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`${path} → ${res.status}`);
  return res.json();
};

const day = (iso) => new Date(iso).toLocaleDateString('ko-KR', { timeZone: 'Asia/Seoul', year: 'numeric', month: 'numeric', day: 'numeric' })
  .replace(/\.\s*/g, '-').replace(/-$/, '');
const cell = (s) => String(s ?? '').replace(/\|/g, '\\|').replace(/\n/g, ' ');

const repos = [];
for (const owner of OWNERS) {
  const list = (await api(`/users/${owner}/repos?type=owner&sort=pushed&per_page=50`)) || [];
  repos.push(...list.filter((r) => !r.private && !r.fork && !r.archived && r.size > 0 && !SKIP.has(r.full_name)));
}
repos.sort((a, b) => (a.pushed_at < b.pushed_at ? 1 : -1));

const rows = [];
for (const r of repos.slice(0, LIMIT)) {
  const [release, commits] = await Promise.all([
    api(`/repos/${r.full_name}/releases/latest`),
    api(`/repos/${r.full_name}/commits?per_page=1`),
  ]);
  const last = commits?.[0];
  const subject = last ? last.commit.message.split('\n')[0] : '';
  const name = r.homepage ? `[${r.name}](${r.homepage}) · [code](${r.html_url})` : `[${r.name}](${r.html_url})`;
  rows.push(`| ${name} | ${cell(r.description)} | ${r.language || ''} | ${release ? `\`${release.tag_name}\`` : ''} | ${
    last ? `${day(last.commit.committer.date)} — [${cell(subject.length > 60 ? `${subject.slice(0, 59)}…` : subject)}](${last.html_url})` : ''} |`);
}

const block = ['<!-- recent:start -->',
  '| Project | What | Language | Release | Last commit |', '|---|---|---|---|---|', ...rows,
  '', `<sub>Auto-updated daily from public repos · 공개 저장소에서 매일 갱신 · ${day(new Date().toISOString())}</sub>`, '<!-- recent:end -->'].join('\n');

const text = await readFile(README, 'utf8');
const next = text.replace(/<!-- recent:start -->[\s\S]*<!-- recent:end -->/, block);
if (next === text && !text.includes('<!-- recent:start -->')) throw new Error('README 에 <!-- recent:start --> 표시가 없어요.');
// 날짜 줄만 바뀐 것이면 쓰지 않는다(매일 빈 커밋이 쌓이지 않게)
const strip = (s) => s.replace(/<sub>Auto-updated[^<]*<\/sub>/, '');
if (strip(next) !== strip(text)) { await writeFile(README, next); console.log('README 갱신'); } else console.log('바뀐 것 없음');
