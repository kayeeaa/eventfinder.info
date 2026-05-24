# Claude Instructions — eventfinder.info

## Git workflow

**Never commit or push without explicit instruction from the user.**

- Make all code changes freely, but stop before any `git commit` or `git push`
- When changes are ready, prompt the user: e.g. *"Ready to commit — want me to go ahead?"*
- Only run git commit/push/merge when the user explicitly asks (e.g. "commit", "push", "commit and push", "merge")
- If several changes have been made across a session without a commit, remind the user: e.g. *"You have uncommitted changes — worth committing before we go further?"*

**Before making any large changes**, check the current branch with `git branch --show-current`:
- If already on a branch other than `main`, proceed
- If on `main`, ask the user first: e.g. *"You're on main — should I create a new branch before we start?"*
- Wait for their answer before touching any files
