### Hi, I'm Larry Kim

**I build small products end to end, on my own** — from the first idea to design, code, tests, CI and release —
and publish them for free with the source open.

#### Projects

**[Yeoljigi 열지기](https://yeoljigi.github.io/)** · [code](https://github.com/yeoljigi/yeoljigi.github.io) · MIT
A fever log for parents: temperature, fever medicine and symptoms, shared with the family.
- Installable PWA in vanilla ES modules — no build step, no dependencies, works offline
- Local-first: records stay on the phone; family sharing without a server (records compressed into the link's `#`)
- Designed around Korea's medical-device rules for software (MFDS 2025): it shows records next to the package
  label instead of calculating doses
- CI on every push: Node test runner plus a headless-Chrome smoke test driven over the DevTools Protocol

**[ServerPal](https://github.com/serverpal/serverpal)** · Apache-2.0
A friendly monitor for one Windows PC used as a server, running 24/7.
- Windows service that starts at boot, plus a desktop widget
- Services, CPU · memory · GPU, disk health, backups and scheduled jobs on one screen
- Phone alerts through ntfy, Telegram, Discord, e-mail and webhooks

#### How I work

- Small, readable code with few dependencies
- Tests and CI as part of the product, not an afterthought
- Privacy and safety rules written down — and checked by tests

**Tools** · JavaScript (ES modules, PWA) · Python · Node test runner · GitHub Actions

#### Recent work

<!-- recent:start -->
| Project | What | Language | Release | Last commit |
|---|---|---|---|---|
| [yeoljigi.github.io](https://yeoljigi.github.io/) · [code](https://github.com/yeoljigi/yeoljigi.github.io) | 열지기 — 아이 열날 때 체온 · 해열제 · 증상 기록 PWA | JavaScript | `v0.8.1` | 2026-10-18 — [열지기 0.8.1 — 체온 안내에서 「먹일 수 있어요」 빼기 · CI 러너 ubuntu-24.04 고정](https://github.com/yeoljigi/yeoljigi.github.io/commit/fd691963c0dfe10bcd20c4659be4c18b4c154bc7) |
| [serverpal](https://github.com/serverpal/serverpal) | Server management for Windows PCs that run 24/7 — monitoring, alerts, backup, widget | Python | `v0.20.2` | 2026-10-17 — [ServerPal 0.20.2 — input validation, safer backups, clearer…](https://github.com/serverpal/serverpal/commit/7f268fc743dc9840661d020c89f268afd1a0bd72) |

<sub>Auto-updated daily from public repos · 공개 저장소에서 매일 갱신 · 2026-10-18</sub>
<!-- recent:end -->

Say hi on [LinkedIn](https://www.linkedin.com/in/larry-kim-24b76b21a) · If my work helps you, you can support it through [GitHub Sponsors](https://github.com/sponsors/larrykim-dev).

---

<details>
<summary><b>한국어</b></summary>

### 안녕하세요, Larry Kim 이에요

**작은 제품을 처음부터 끝까지 혼자 만들어요** — 아이디어부터 설계 · 코드 · 시험 · CI · 배포까지 하고, 무료로 코드와 함께 공개해요.

- **[열지기](https://yeoljigi.github.io/)** — 아이가 열날 때 체온 · 해열제 · 증상을 남기고 가족과 함께 보는 웹앱.
  가입 없이, 기록은 내 휴대폰에만. 빌드 · 의존성 없는 PWA, 서버 없는 가족 공유, 식약처 디지털의료기기 기준에 맞춘 설계.
- **[ServerPal](https://github.com/serverpal/serverpal)** — 24시간 켜 두는 Windows PC 서버를 지켜보는 프로그램.
  모니터링 · 알림 · 백업 · 위젯.

연락은 [LinkedIn](https://www.linkedin.com/in/larry-kim-24b76b21a)으로 주세요. 도움이 됐다면 [GitHub Sponsors](https://github.com/sponsors/larrykim-dev)로 응원해 주세요. 무료 · 광고 없이 이어 가는 데 쓰여요.

</details>
