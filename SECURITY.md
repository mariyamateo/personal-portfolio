# Security & Credentials Policy

This document sets the rules for keeping secrets and AI attribution out of
this repository's history.

## No credentials in commits or pushes

- Never commit API keys, tokens, passwords, `.env` files, or any other
  secret to this repository, regardless of branch.
- Before staging or pushing, review the diff (`git status` / `git diff`)
  for anything that looks like a credential, even in files that seem
  unrelated (config, logs, screenshots, notebooks).
- If a secret is ever committed, treat it as compromised: rotate/revoke it
  immediately, then remove it from history.

## No AI/Claude credentials or attribution

- Do not commit or push any Claude, Anthropic, or other AI service API
  keys, tokens, session IDs, or credentials to this repository.
- Commits and pushes to this repository must be authored and pushed under
  the repository owner's own GitHub account and identity.
- Commit messages must not include AI co-author trailers (e.g.
  `Co-Authored-By: Claude`), AI session links, or other AI attribution
  metadata.

## Reporting

If you discover a leaked credential in this repository, rotate the
affected credential first, then clean up the exposed history.
