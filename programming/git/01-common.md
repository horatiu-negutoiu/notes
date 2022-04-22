# Common Git Commands


## Clean all changes
```bash
$ git clean -df # removes untracked files and dirs
```


## Squash Commits (ex: last 2 commits)
```
$ git rebase -i HEAD~2

# but it's recommended to measure twice, cut once:
$ git log --oneline
```


## Tagging

Tag
$ git tag -a v1.3 -m "some comment"

Push tag up
$ git push origin v1.3

Delete tag
$ git tag -d v1.3

Delete remote tag
$ git push --delete origin v1.3


## Undoing the Last Commit

Keeping changes:
`git reset --soft HEAD~1`

The `--hard` argument also dismisses the files.

`git reset --<type> <commit_id>` is a general form.


## Stashing Commits

To save:
```
git stash push -m aNameForYourStash
```

To see the list of stashes:
```
git stash list
```

To apply a stash:
```
git stash pop --index 0
```

Nice to have in your .zshrc file:
```
function gitstash() {
    git stash push -m "zsh_stash_name_$1"
}

function gitstashapply() {
    git stash apply $(git stash list | grep "zsh_stash_name_$1" | cut -d: -f1)
}
```

Then, just use:
```
gitstash nice

gitstashapply nice
```
