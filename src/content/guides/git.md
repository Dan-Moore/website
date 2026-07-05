---
uuid: '904af41e-48ba-44b9-b527-4eb39da965b1'
title: 'Git User Guide'
description: 'Overview on working with git.'
published: '7/3/26'
---

## Configuring Git
One of the first tasks you will need to set is your user name and email address.
```bash
git config --global user.name "Your Name" \
&& git config --global user.email "Your Email"
```

Remote commits over SSH can secured with either RSA or Ed25519.  The way this works, on your local machine create set of a private and public keys with the ssh-keygen command.  The private key remains only on your local machine, while the public key is shared with remote source you are trying to connect to, such as Github.

```
ssh-keygen -t ed25519 -C "Your Email"
```

You can review your SSH keys by looking into your `~/.ssh/` directory.


## Working with Local Repositories
To create a new git repository, in your project's root directory run the init command.
```
git init
```

Next run the status command, it will list any changes or untracked files.  In this example, I have a basic repo with 2 files.  The file bar.txt has already been added to the repo, but has been modified after it was added.  While the baz.txt still needs to be tracked.
```
git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   bar.txt

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        baz.txt

no changes added to commit (use "git add" and/or "git commit -a")
```

Instead of following directs of running a git commend for each file, you can use the print working command, `.`, for adding all files. 
```
git add .
```

When your files have all been tracked and added, run the commit command.
```
git commit -m 'Hello World!'
```
Each commit requires a message, but if you need to update and change the message you can with `--amend` flag.
```
git commit --amend -m "Foobar"
```


### Squashing commits
If you have a lot of local commits that you reduce them into single commit, with the rebase command.  Replace `#` with the number of local commits you use to review.
```
git rebase -i HEAD~#
```

The first line is the oldest and needs to remain with the command pick.  You can always change the commit message later.
```
pick 8c79b2a # Hello World
pick 5a54ee6 # Foobar
```
Using the squash command, the commit will be folded into the previous commit.
```
pick 8c79b2a # Hello World
squash 5a54ee6 # Foobar
```


## Working with Branches
Git allows creating branches to check-in and work from while developing new features.  The benefit of branches you can merging in new code into the main branch, till they have been tested and reviewed. 

```
git branch new-feature  
git checkout new-feature
```

When you are ready to merge your changes into the main branch, run the following command:
```
git merge main
```

Once you are done with your feature branch, you can delete with the `-d` flag.
```
git branch -d new-feature
```

## Remote Sources
When working with remote sources such as GitHub, you'll need to upload your public SSH key before you can successfully use the `remote` command.

Snippet below points to my Github repos git path.  
```
git remote add origin git@github.com:Dan-Moore/website.git
git branch -M main
git push -u origin main
```

## Further reading

- Official github [cheat-sheet](https://education.github.com/git-cheat-sheet-education.pdf).
- Github's Authentication via [SSH guide](https://docs.github.com/en/authentication/connecting-to-github-with-ssh).
