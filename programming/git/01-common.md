# Common Git Commands

Clean all changes
```bash
$ git clean -df # removes untracked files and dirs
```

Squash Commits (ex: last 2 commits)
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
