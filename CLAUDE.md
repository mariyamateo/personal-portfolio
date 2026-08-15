# Repository instructions

## Git identity — no AI/Claude credentials, ever

All commits and pushes to this repository must be made under the repo
owner's own identity:

- name: `mariyamateo`
- email: `ma.clarissepmateo@gmail.com`

Never author or push a commit as `Claude`, `noreply@anthropic.com`, or any
other AI/Anthropic identity. Never add AI co-author trailers
(e.g. `Co-Authored-By: Claude`), AI session links, or other AI attribution
metadata to commit messages, PR descriptions, or comments in this repo.

This is a standing rule — do not wait to be reminded. Before committing,
confirm `git config user.name` / `user.email` resolve to the owner's
identity above (the local repo config sets this by default; do not
override it back to an AI identity).

See `SECURITY.md` for the full credentials policy.
