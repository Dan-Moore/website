---
title: 'First post'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jul 08 2022'
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

## Remote Sources
```
git remote add origin git@github.com:Dan-Moore/website.git
git branch -M main
git push -u origin main
```
## Further reading

- Read the official github [cheat-sheet](https://education.github.com/git-cheat-sheet-education.pdf) for command usage.
