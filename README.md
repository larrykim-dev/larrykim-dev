### Hi, I'm Larry Kim

**I build small products end to end, on my own** — from the first idea to design, code, tests, CI and release —
and publish them for free — most with the source open.

#### Projects

**[Yeoljigi 열지기](https://yeoljigi.github.io/)** · [code](https://github.com/yeoljigi/yeoljigi.github.io) · MIT
A fever log for parents: temperature, fever medicine and symptoms, shared with the family.
- Installable PWA in vanilla ES modules — no build step, no dependencies, works offline
- Local-first: records stay on the phone; family sharing without a server (records compressed into the link's `#`)
- Designed around Korea's medical-device rules for software (MFDS 2025): it shows records next to the package
  label instead of calculating doses
- CI on every push: Node test runner plus a headless-Chrome smoke test driven over the DevTools Protocol

**[Suho Story 수호 스토리](https://play.google.com/store/apps/details?id=com.suhostory.game)** · [Google Play](https://play.google.com/store/apps/details?id=com.suhostory.game) · [play in the browser](https://suho-sigma.vercel.app)
A spirit-collecting RPG with an original story, starting from Korea's eight provinces and continuing into Japan.
- Runs in the browser on ES modules + Canvas 2D — no build tools; shipped to Google Play as an Android app
- 18 regions · 864 maps · 199 spirits; tiles and characters drawn in code, 40 music tracks synthesized in code
- Save codes to move a game between devices without an account

**[ServerPal](https://github.com/serverpal/serverpal)** · Apache-2.0
A friendly monitor for one Windows PC used as a server, running 24/7.
- Windows service that starts at boot, plus a desktop widget
- Services, CPU · memory · GPU, disk health, backups and scheduled jobs on one screen
- Phone alerts through ntfy, Telegram, Discord, e-mail and webhooks

#### How I work

- Small, readable code with few dependencies
- Tests and CI as part of the product, not an afterthought
- Privacy and safety rules written down — and checked by tests

**Tools** · JavaScript (ES modules, PWA, Canvas 2D) · Python · Node test runner · GitHub Actions

#### Recent work

<!-- recent:start -->
| Project | What | Language | Release | Last commit |
|---|---|---|---|---|
| [yeoljigi.github.io](https://yeoljigi.github.io/) · [code](https://github.com/yeoljigi/yeoljigi.github.io) | 열지기 — 아이 열날 때 체온 · 해열제 · 증상 기록 PWA | JavaScript | `v0.9.1` | 2026-10-20 — [연기 시험 — 시작할 때 언어를 한국어로(CI 영어 Chrome 에서 기록 링크 확인이 늘 실패)](https://github.com/yeoljigi/yeoljigi.github.io/commit/c032b8f5bbe13e917fbe987aa6a065457a839447) |
| [serverpal](https://github.com/serverpal/serverpal) | Server management for Windows PCs that run 24/7 — monitoring, alerts, backup, widget | Python | `v0.20.2` | 2026-10-17 — [ServerPal 0.20.2 — input validation, safer backups, clearer…](https://github.com/serverpal/serverpal/commit/7f268fc743dc9840661d020c89f268afd1a0bd72) |

<sub>Auto-updated daily from public repos · 공개 저장소에서 매일 갱신 · 2026-10-20</sub>
<!-- recent:end -->

Say hi on [LinkedIn](https://www.linkedin.com/in/larry-kim-24b76b21a) · If my work helps you, you can support it through [GitHub Sponsors](https://github.com/sponsors/larrykim-dev).

---

<details>
<summary><b>한국어</b></summary>

### 안녕하세요, Larry Kim 이에요

**작은 제품을 처음부터 끝까지 혼자 만들어요** — 아이디어부터 설계 · 코드 · 시험 · CI · 배포까지 하고, 무료로 공개해요(대부분 코드도 함께).

- **[열지기](https://yeoljigi.github.io/)** — 아이가 열날 때 체온 · 해열제 · 증상을 남기고 가족과 함께 보는 웹앱.
  가입 없이, 기록은 내 휴대폰에만. 빌드 · 의존성 없는 PWA, 서버 없는 가족 공유, 식약처 디지털의료기기 기준에 맞춘 설계.
- **[수호 스토리](https://play.google.com/store/apps/details?id=com.suhostory.game)** — 대한민국 8도에서 일본까지 이어지는 정령 수집 RPG.
  이야기 · 인물은 모두 창작. 브라우저에서 바로([웹](https://suho-sigma.vercel.app)), Google Play 출시.
- **[ServerPal](https://github.com/serverpal/serverpal)** — 24시간 켜 두는 Windows PC 서버를 지켜보는 프로그램.
  모니터링 · 알림 · 백업 · 위젯.

연락은 [LinkedIn](https://www.linkedin.com/in/larry-kim-24b76b21a)으로 주세요. 도움이 됐다면 [GitHub Sponsors](https://github.com/sponsors/larrykim-dev)로 응원해 주세요. 무료 · 광고 없이 이어 가는 데 쓰여요.

</details>
