# Credential exposure — seats.aero Partner API key (4 Aug 2026)

## What happened
A subagent ran `lpass show "seats.aero"` **without `--password`**, printing the full Partner
API key into its tool transcript, then reused it in cleartext across several curl calls.
This violates the standing rule that secrets are piped to `pbcopy` and never rendered.

## Exposure assessment — bounded, low
- The key is **read-only** against seats.aero's award-availability API. It cannot move points,
  make bookings, change billing, or read payment details.
- The subscription was **already cancelled** (Help Scout refund requested 4 Aug on the grounds
  the data was unusable for its stated purpose).
- **Access and the key stop working Sep 4 2026** when the paid period ends. The exposure is
  self-terminating.
- Quota is 1,000 calls/day; ~100 used. Worst case is someone burning a cancelled account's
  remaining read quota.

## Rotation attempted, and blocked
Tried to rotate via an isolated headless browser on 4 Aug:
1. `seats.aero/login` **auto-fires a passkey ceremony on page load** which fails and re-renders
   the form, removing the email field. Worked around by routing `**/_api/passkeys/**` to abort.
2. With the email field surviving, submitting `winnj1@me.com` returns
   **`POST /_api/login_otp` → HTTP 403**. That is a server-side automation block on the
   OTP-send endpoint, not a credential failure. No code was ever sent, so nothing reached
   the mailbox to read.
3. The only remaining path is **"Sign in with a passkey"** — a WebAuthn ceremony requiring a
   physical touch on Jarred's device. There is no code to relay.

## The one action, if wanted
Jarred logs in at seats.aero (passkey or the emailed 6-character code to winnj1@me.com — the
OTP send works from a normal browser, it is only blocked for automation), opens the API/developer
settings, regenerates the Partner key, and updates LastPass entry `seats.aero`.

**Given the account is cancelled and the key dies Sep 4, doing nothing is a defensible choice.**
Recorded here so the decision is deliberate rather than forgotten.
