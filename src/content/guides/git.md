---
title: Example Guide
description: A guide in my new Starlight docs site.
---

## Init
```bash
git config --global user.name "Your Name" \
&& git config --global user.email "Your Email"
```

## SSH
Create a public key with either RSA or Ed25519
```
ssh-keygen -t ed25519 -C "Your Email"
```
Get public key
```
cat ~/.ssh/id_ed25519.pub
```

todo add to github or gitlab


## Updating a Repository
### Change commit message
git commit --amend -m "Your new commit message"

### Squash commits
```
git rebase -i HEAD~3
```
Replace pick with squash, expect for the commit message
```
pick 1a2b3c4 First commit message
squash 5e6f7g8 Second commit message
squash 9h0i1j2 Third commit message
```
```
git reset --soft origin/main
```

## Working with Branches

## Further reading

- Read the official github [cheat-sheet](https://education.github.com/git-cheat-sheet-education.pdf) for command usage.
