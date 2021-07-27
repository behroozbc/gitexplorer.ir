export const secondaryOptions = {
  commit: [
    {
      value: 'local-changes',
      label: 'commit all local changes in tracked files',
      usage: 'git commit -a'
    },
    {
      value: 'staged-changes',
      label: 'commit all staged changes',
      usage: 'git commit -m <message>',
      nb: 'Replace <message> with your commit message.'
    }
  ],

  configure: [
    {
      value: 'email-name',
      label: 'name and email address',
      usage:
        'git config --global user.name "username" \n\ngit config --global user.email "email address"',
      nb:
        'Your username and email address should be the same as the one used with your git hosting provider i.e. github, bitbucket, gitlab etc'
    },
    {
      value: 'editor',
      label: 'default editor',
      usage: 'git config --global core.editor "vim"',
      nb: 'Change default editor to vim.'
    },
    {
      value: 'diff-tool',
      label: 'external diff tool',
      usage: 'git config --global diff.external "meld"',
      nb: 'Set external diff tool to meld.'
    }, 
    {
      value: 'merge-tool',
      label: 'default merge tool',
      usage: 'git config --global merge.tool "meld"',
      nb: 'Set default merge tool to meld.'
    }, 
    {
      value: 'color',
      label: 'color',
      usage: 'git config --global color.ui auto',
      nb: 'Enables helpful colorization of command line output'
    },
    {
      value: 'signingkey',
      label: 'add the GPG key',
      usage: 'git config --global user.signingkey <your-secret-gpg-key>',
      nb:
        'Git is cryptographically secure, but it’s not foolproof. If you’re taking work from others on the internet and want to verify that commits are actually from a trusted source, Git has a few ways to sign and verify work using GPG.'
    }
  ],

  revert: [
    {
      value: 'specific-commit',
      label: 'a specific commit',
      usage: 'git revert <commit-hash>',
      nb: 'Use git log to see the hash of each commit'
    },
    {
      value: 'specific-file',
      label: 'a specific file',
      usage: 'git checkout <repo>/<branch> <filename>',
    },
    {
      value: 'to-last-commit',
      label: 'to last commit',
      usage: 'git reset --hard'
    },
    {
      value: 'to-last-commit-from-remote',
      label: 'to last commit on remote branch',
      usage: 'git reset --hard <repo>/<branch>'
    }
  ],

  initialize: [
    {
      value: 'new-repo',
      label: 'a new repository',
      nb: 'Make sure you are in the right directory',
      usage: 'git init'
    }
  ],

  modify: [
    {
      value: 'commit-message',
      label: 'my last/latest commit message',
      usage: 'git commit --amend'
    },
    {
      value: 'commit',
      label: 'my last commit but leave the commit message as is',
      usage: 'git add . \ngit commit --amend --no-edit'
    },
    {
      value: 'remoteUrl',
      label: "repo's remote url",
      usage: 'git remote set-url <alias> <url>',
      nb: '<alias> is your remote name e.g origin'
    }
  ],

  show: [
    {
      value: 'repo-status',
      label: 'status of project including staged, unstaged and untracked files',
      usage: 'git status'
    },
    {
      value: 'logs',
      label: 'commit logs/history'
    },
    {
      value: 'uncommittedChanges',
      label: 'uncommitted changes',
      usage: 'git diff'
    },
    {
      value: 'committedChanges',
      label: 'committed/staged changes',
      usage: 'git diff --staged'
    },
    {
      value: 'remoteUrl',
      label: "repo's remote url",
      usage: 'git remote -v'
    },
    {
      value: 'stash',
      label: 'stash',
      usage: 'git stash list'
    },
    {
      value: 'branch',
      label: 'branches',
      usage: 'git branch',
      nb: 'The active branch is prefixed with *'
    },
    {
      value: 'tags',
      label: 'tags',
      usage: 'git tag'
    }
  ],

  delete: [
    {
      value: 'branch',
      label: 'a branch',
      usage: 'git branch -D <branch name>'
    },
    {
      value: 'delete-multiple-branches',
      label: 'multiple branches',
    },
    {
      value: 'tag',
      label: 'a tag',
      usage: 'git tag -d v<tag version>'
    },
    {
      value: 'remote',
      label: 'remote',
      usage: 'git remote rm <remote>'
    },
    {
      value: 'untracked-files',
      label: 'untracked files',
      usage: 'git clean -<flag>',
      nb:
        'replace -<flag> with:\n -i for interactive command\n -n to preview what will be removed\n -f to remove forcefully\n -d to remove directories\n -X to remove ignored files\n -x to remove ignored and non-ignored files'
    },
    {
      value: 'files-from-index',
      label: 'files from index',
      usage: 'git rm --cached <file or dir>',
      nb:
        'Use this option to unstage and remove paths only from the index. Working tree files, whether modified or not, will be left alone.'
    },
    {
      value: 'local-branches-not-on-remote',
      label: "local branches that don't exist at remote",
      usage: 'git remote prune <remote-name>',
      nb:
        'Use the --dry-run option to report what branches will be pruned, but do not actually prune them'
    },
    {
      value: 'files-from-old-commit',
      label: 'files from old commits',
      usage:
        "git filter-branch --index-filter \n'git rm --cached --ignore-unmatch path/to/mylarge_file' \n--tag-name-filter cat -- --all\n\nfilter-branch keeps backups too, so the size of the repo won't decrease immediately unless you expire the reflogs and garbage collect:\n\nrm -Rf .git/refs/original       # careful\ngit gc --aggressive --prune=now # danger",
      nb:
        "Like the rebasing option described before, filter-branch is rewriting operation. If you have published history, you'll have to --force push the new refs."
    }
  ],

  compareCommits: [
    {
      value: 'terminal',
      label: 'and output result in the terminal',
      usage: 'git diff <sha1> <sha2>',
      nb: 'sha1 and sha2 are the sha hash of the commits you want to compare.'
    },
    {
      value: 'file',
      label: 'and output result to a file',
      usage: 'git diff <sha1> <sha2> > diff.txt',
      nb:
        'sha1 and sha2 are the sha of the commits you want to compare. \n\ndiff.txt is the file you want to store the contents of the diff'
    }
  ],

  clone: [
    {
      value: 'clone-repo-into-a-new-dir',
      label: 'existing repo into a new directory',
      usage: 'git clone <repo-url> <directory>',
      nb:
        'The repo is cloned into the specified directory\n\nReplace "directory" with the directory you want'
    },
    {
      value: 'clone-repo-into-a-current-dir',
      label: 'existing repo into the current directory',
      usage: 'git clone <repo-url> .',
      nb:
        'The repo is cloned into the current directory\n\nThe current directory is represented with a "." (period)'
    },
    {
      value: 'clone-repo-with-submodule-into-a-current-dir',
      label: 'existing repo along with submodules into the current directory',
      usage: 'git clone --recurse-submodules <repo-url> .',
      nb: 'If git version is under 2.13, use --recursive option instead.'
    },
    {
      value: 'clone-submodule-after',
      label: 'submodules after cloning existing repo',
      usage: 'git submodule update --init --recursive'
    }
  ],

  ignore: [
    {
      value: 'ignore-files-in-a-dir',
      label: 'all files in a directory',
      usage: '<dir name>/*',
      nb:
        'This must be added to .gitignore file\n\nReplace "dir name" with name of directory whose files you want git to ignore'
    },
    {
      value: 'ignore-all-files-of-a-specific-type',
      label: 'all files of a specific type',
      usage: '*.<filename extension>',
      nb:
        'This must be added to .gitignore file\n\nReplace "filename extension" with the extension of the files you want git to ignore\n\nFor example *.py tells git to ignore all python files in the repository'
    }
  ],

  help: [
    {
      value: 'command-help',
      label: 'about a command',
      usage: 'append --help to the command',
      nb: 'e.g. git merge --help\n\nType q to quite terminal'
    }
  ],

  add: [
    {
      value: 'new-changes',
      label: 'new changes',
      usage: 'git add <file.ext>',
      nb:
        'To add all the files in the current directory, use "git add ."\n\nTo add a directory use "git add <directory>"'
    },
    {
      value: 'add-new-branch',
      label: 'a new branch'
    },
    {
      value: 'add-repo',
      label: 'new remote repo',
      usage: 'git remote add <shortname> <url>'
    },
    {
      value: 'add-alias',
      label: 'alias',
      usage: 'git config --global alias.<alias> <command>',
      nb:
        'e.g. git config --global alias.st status. Typing git st in the terminal now does the same thing as git status'
    },
    {
      value: 'add-annotated-tag',
      label: 'annotated tag',
      usage: 'git tag -a v1.4 -m "my version 1.4"\n\ngit push --tags'
    },
    {
      value: 'add-annotated-tag-for-old-commit',
      label: 'annotated tag for old commit',
      usage: "git tag -a v1.2 -m 'version 1.2' <commit-hash>\n\ngit push --tags"
    }
  ],

  push: [
    {
      value: 'new-remote-branch',
      label: 'non-existent remote branch',
      usage: 'git push -u origin <branchname>'
    }
  ],

  rename: [
    {
      value: 'branch',
      label: 'branch'
    },
    {
      value: 'file',
      label: 'file',
      usage: 'git mv file_from file_to'
    },
    {
      value: 'remoteUrl',
      label: 'remote',
      usage: 'git remote rename <oldname> <newname>'
    }
  ],

  merge: [
    {
      value: 'branch',
      label: 'another branch to current branch',
      usage: 'git merge <branch-name>'
    },
    {
      value: 'single-file',
      label: 'merge a single file from one branch to another.',
      usage: 'git checkout <branch name> <path to file> --patch'
    }
  ],

  squash: [
    {
      value: 'pr',
      label: 'commits in pull request into single commit',
      usage: 'git rebase -i <branch name>',
      nb:
        'Make sure that latest commits are fetched from upstream.\n\nFor example (assuming you have a remote named upstream):\n\ngit fetch upstream\ngit rebase -i upstream/master\n\nChange "pick" to "squash" for the commits you wish to squash and save.\n\ngit push origin <topic branch> --force-with-lease'
    },
    {
      value: 'commits',
      label: 'last n number of commit into one',
      usage:
        'git reset --soft HEAD~N\ngit add .\ngit commit -m <message>',
      nb:
        "Replace N with the number of commits you want to squash and <message> with your commit message. You can use the command 'git log' to view your commit history"
    }
  ],

  debug: [
    {
      value: 'bisect',
      label: 'binary search',
      usage:
        'git bisect start\ngit bisect bad                 # Current version is bad\ngit bisect good v2.13          # v6.12 is known to be good',
      nb:
        'Once you have specified at least one bad and one good commit, git bisect selects a commit in the middle of that range of history, checks it out, and outputs something similar to the following:\nBisecting: 675 revisions left to test after this (roughly 10 steps)\nYou should now compile the checked-out version and test it. If that version works correctly, type\n\ngit bisect good\n\nIf that version is broken, type\n\ngit bisect bad\n\nThen git bisect will respond with something like\n\nBisecting: 337 revisions left to test after this (roughly 9 steps)\n\nKeep repeating the process: compile the tree, test it, and depending on whether it is good or bad run git bisect good or git bisect bad to ask for the next commit that needs testing.\nEventually there will be no more revisions left to inspect, and the command will print out a description of the first bad commit. The reference refs/bisect/bad will be left pointing at that commit.\nAfter a bisect session, to clean up the bisection state and return to the original HEAD, issue the following command:\n\ngit bisect reset'
    },
    {
      value: 'blame',
      label: 'who modified each lines',
      usage: 'git blame -L <number-line-start>,<number-line-end> <filename>',
      nb: 'The -L option will restrict the output to the requested line range\n'
    },
    {
      value: 'grep',
      label: 'search in files',
      usage: 'git grep -n <your_text_or_expression>',
      nb:
        'Print lines matching a pattern.\nOption -n to display the numbering of lines in which there are matches'
    }
  ],

  recover: [
    {
      value: 'dropped-commit',
      label: 'show hashes dangling commits after hard reset to previous commit',
      usage: 'git reflog',
      nb:
        'alternative: git log -g. For recovery use\ngit checkout -b <recovery> <hash>'
    },
    {
      value: 'deleted-branch',
      label: 'show hashes removed branch or other git objects',
      usage: 'git fsck --full',
      nb:
        'show hashes all dangling git objects. For recovery use\ngit checkout -b <recovery> <hash>'
    }
  ],

  rebase: [
    {
      value: 'origin-branch',
      label: 'an origin branch into my working branch',
      usage: 'git pull --rebase origin <branch name>',
      nb:
        'Rebase an origin branch into working branch. Replace <branch name> with the branch you are pulling'
    },
    {
      value: 'local-branch',
      label: 'a local branch into my working branch',
      usage: 'git rebase <branch name>',
      nb:
        'Rebase another local branch into working branch. Replace <branch name> with the branch you are pulling'
    },
    {
      value: 'skip',
      label: 'and skip a commit',
      usage: 'git rebase --skip',
      nb:
        'During rebase, git might not be able to automatically apply commits due to conflicts. You can use this command to discard of your own changes in the current commit and apply the changes from an incoming branch'
    },
    {
      value: 'continue',
      label: 'and continue after resolving conflicts',
      usage: 'git rebase --continue',
      nb:
        'During rebase, git might not be able to automatically apply commits due to conflicts. You can resolve this conflicts manually and use this command to continue your rebase operation'
    }
  ],

  synchronize: [
    {
      value: 'branch-from-fork',
      label: 'a branch in a fork',
      usage:
        'git fetch <remote-repo> \n\ngit checkout <branch-name> \n\ngit merge <remote-repo>/<branch-name>',
      nb: 'You need to add a remote repo for your fork first.'
    }
  ],
  stash: [
    {
      value: 'save-stash',
      label: '(un)tracked files',
      usage: 'git stash',
      nb: 'To stash with a customized message use git stash save <message>\n\nTo stash untracked files git stash save -u'
    },
    {
      value: 'list-stash',
      label: 'view list of stashed changes',
      usage: 'git stash list'
    },
    {
      value: 'apply-stash',
      label: 'apply'
    },
    {
      value: 'show',
      label: 'view the contents of a stash',
      usage: 'git stash show -p <stash id>',
      nb: 'You can leave out the stash id if you want the contents of the latest stash'
    },
    {
      value: 'delete-stash',
      label: 'delete'
    },
    {
      value: 'create-branch',
      label: 'create a new branch and apply stash',
      usage: 'git stash branch <branch name> <stash id>'
    }
  ],

  cherrypick: [
    {
      value: 'origin-branch',
      label: 'an commit from origin branch into my working branch',
      usage: 'git cherry-pick <commit-hash> <commit-hash>',
      nb:
        'Applying one or more commit from one branch into your working branch. '
    },
  ],
};

export const secondaryOptions_fa = {
  commit: [
    {
      value: 'local-changes',
      label: 'کامیت کلیه تغییرات محلی در فایل ردیابی شده',
      usage: 'git commit -a'
    },
    {
      value: 'staged-changes',
      label: 'کامیت تمام تغییرات صحنه',
      usage: 'git commit -m <message>',
      nb: 'پیام کامیت را با <message> جایگزین کن'
    }
  ],

  configure: [
    {
      value: 'email-name',
      label: 'نام و آدرس ایمیل',
      usage:
        'git config --global user.name "username" \n\ngit config --global user.email "email address"',
      nb:
        'نام کاربری و آدرس ایمیل شما باید همان آدرس استفاده شده با ارائه دهنده میزبانی git شما باشد ، مانند github ، bitbucket ، gitlab و غیره'
    },
    {
      value: 'editor',
      label: 'ویرایشگر متن پیش فرض',
      usage: 'git config --global core.editor "vim"',
      nb: 'تغییر ویرایش گر متن پیش فرض به vim'
    },
    {
      value: 'diff-tool',
      label: 'موتور خارجی تشخیص تغییرات',
      usage: 'git config --global diff.external "meld"',
      nb: '"meld" را با موتور تشخیص تغییرات جایگزین نمایید.'
    }, 
    {
      value: 'merge-tool',
      label: 'ابزار پیش فرض ادغام',
      usage: 'git config --global merge.tool "meld"',
      nb: 'قراردادن ابزار پیش فرض ادغام به meld.'
    }, 
    {
      value: 'color',
      label: 'رنگ',
      usage: 'git config --global color.ui auto',
      nb: 'فعال کردن رنگ های خط فرمان'
    },
    {
      value: 'signingkey',
      label: 'اضافه کردن کلید GPG',
      usage: 'git config --global user.signingkey <your-secret-gpg-key>',
      nb:
        'گیت از نظر رمزنگاری ایمن است، با این حال بی نقص نیست. اگر کار های دیگران را از اینترنت میگیرید و میخواهید تایید کنید که کامیت ها از منبع قابل اعتمادی هستند، گیت تعدادی راه برای تایید کار ها به وسیله GPG دارد.'
    }
  ],

  revert: [
    {
      value: 'specific-commit',
      label: 'یک کامیت مشخص',
      usage: 'git revert <commit-hash>',
      nb: 'با استفاده از git log می توانید هش هر کدام از کامیت ها را ببینید.'
    },
    {
      value: 'specific-file',
      label: 'یک فایل مشخص',
      usage: 'git checkout <repo>/<branch> <filename>',
    },
    {
      value: 'to-last-commit',
      label: 'به آخرین کامیت',
      usage: 'git reset --hard'
    },
    {
      value: 'to-last-commit-from-remote',
      label: 'به آخرین کامیت روی شاخه ی ریموت',
      usage: 'git reset --hard <repo>/<branch>'
    }
  ],

  initialize: [
    {
      value: 'new-repo',
      label: 'يک ریپازیتوری جدید',
      nb: 'اطمینان حاصل نمایید که در مسیر درست قرار دارید',
      usage: 'git init'
    }
  ],

  modify: [
    {
      value: 'commit-message',
      label: 'مسج آخرین کامیت من',
      usage: 'git commit --amend'
    },
    {
      value: 'commit',
      label: 'آخرین کامیت من، بدون تغییر دادن مسج آن',
      usage: 'git add . \ngit commit --amend --no-edit'
    },
    {
      value: 'remoteUrl',
      label: "url ریموت ریپازیتوری",
      usage: 'git remote set-url <alias> <url>',
      nb: '<alias> اسم ریموت می باشد.مثل origin'
    }
  ],

  show: [
    {
      value: 'repo-status',
      label: 'وضعیت پروژه از جمله فایل های صحنه شده، صحنه نشده و ردیابی نشده',
      usage: 'git status'
    },
    {
      value: 'logs',
      label: 'لاگ کامیت/تاریخچه'
    },
    {
      value: 'uncommittedChanges',
      label: 'تغییرات کامیت نشده',
      usage: 'git diff'
    },
    {
      value: 'committedChanges',
      label: 'تغییرات کامیت/صحنه شده',
      usage: 'git diff --staged'
    },
    {
      value: 'remoteUrl',
      label: "url ریموت ریپازیتوری",
      usage: 'git remote -v'
    },
    {
      value: 'stash',
      label: 'انبار',
      usage: 'git stash list'
    },
    {
      value: 'branch',
      label: 'شاخه ها',
      usage: 'git branch',
      nb: 'شاخه فعال با پیشوند * مشخص می شود'
    },
    {
      value: 'tags',
      label: 'تگ ها',
      usage: 'git tag'
    }
  ],

  delete: [
    {
      value: 'branch',
      label: 'یک شاخه',
      usage: 'git branch -D <branch name>'
    },
    {
      value: 'delete-multiple-branches',
      label: 'چند شاخه',
    },
    {
      value: 'tag',
      label: 'یک برچسب',
      usage: 'git tag -d v<tag version>'
    },
    {
      value: 'remote',
      label: 'ریموت',
      usage: 'git remote rm <remote>'
    },
    {
      value: 'untracked-files',
      label: 'فایل های ردیابی نشده',
      usage: 'git clean -<flag>',
      nb:
        '-<flag> را یا عبارات زیر جایگزین نمایید:\n -i برای دستور تعاملی\n -n برای پیش نمایش آن چه که حذف می شود\n -f تا به صورت فوری حذف شود\n -d تا دایرکتوری ها حذف شوند\n -X تا فایل های نادیده گرفته شده حذف شوند\n -x تا فایل های نادیده گرفته شده و نادیده گرفته نشده حذف شوند'
    },
    {
      value: 'files-from-index',
      label: 'فایل های فهرست',
      usage: 'git rm --cached <file or dir>',
      nb:
        'از این گزینه برای پاک ردن مسیر ها و صحنه استفاده کنید.فایل های فعال درخت اعم از تغییر داده شده یا نشده دست نخورده باقی می مانند.'
    },
    {
      value: 'local-branches-not-on-remote',
      label: "شاخه های محلی که روی ریموت وجود ندارند",
      usage: 'git remote prune <remote-name>',
      nb:
        'از --dry-run برای گرفتن گزارش از شاخه هایی که هرس خواهند شد استفاده نمایید'
    },
    {
      value: 'files-from-old-commit',
      label: 'فایل های از کامیت های قدیمی',
      usage:
        "git filter-branch --index-filter \n'git rm --cached --ignore-unmatch path/to/mylarge_file' \n--tag-name-filter cat -- --all\n\nfilter-branch keeps backups too, so the size of the repo won't decrease immediately unless you expire the reflogs and garbage collect:\n\nrm -Rf .git/refs/original       # careful\ngit gc --aggressive --prune=now # danger",
      nb:
        "filter-branch عملگر بازنویسی است. در صورتی که تاریخچه را عمومی کرده باشید باید کامیت ها و فایل های جدید را--force push نمایید."
    }
  ],

  compareCommits: [
    {
      value: 'terminal',
      label: 'مقایسه و نمایش خروجی در ترمینال',
      usage: 'git diff <sha1> <sha2>',
      nb: 'sha1 and sha2 are the sha hash of the commits you want to compare.',
      nb: 'sha1 و sha2 هش های دو کامیتی هستند که مقایسه می کنید.'
    },
    {
      value: 'file',
      label: 'مقایسه و نمایش خروجی در یک فایل',
      usage: 'git diff <sha1> <sha2> > diff.txt',
      nb:
        'sha1 و sha2 هش های دو کامیتی هستند که مقایسه می کنید. \n\ndiff.txt فایلیست که تفاوت ها را می خواهید در آن ذخیره نمایید.'
    }
  ],

  clone: [
    {
      value: 'clone-repo-into-a-new-dir',
      label: 'ریپازیتوری موجود در یک مسیر جدید',
      usage: 'git clone <repo-url> <directory>',
      nb:
        'ریپازیتوری در مسیر مشخص شده کلون می شود\n\nمسیری که می خواهید در آن کلون کنید را با "directory" جایگزین نمایید'
    },
    {
      value: 'clone-repo-into-a-current-dir',
      label: 'ریپازیتوری موجود در یک مسیر کنونی',
      usage: 'git clone <repo-url> .',
      nb:
        'ریپازیتوری در مسیر کنونی کلون می شود\n\n"." بیانگر مسیر کنونی است'
    },
    {
      value: 'clone-repo-with-submodule-into-a-current-dir',
      label: 'ریپازیتوری همراه با زیرمدل ها در مسیر کنونی',
      usage: 'git clone --recurse-submodules <repo-url> .',
      nb: 'در صورتی که نسخه گیت پایینتر از ۲.۱۳ می باشد از --recursive استفاده نمایید.'
    },
    {
      value: 'clone-submodule-after',
      label: 'زیرمدل ها بعد از کلون کردن ریپازیتوری کنونی',
      usage: 'git submodule update --init --recursive'
    }
  ],

  ignore: [
    {
      value: 'ignore-files-in-a-dir',
      label: 'تمامی فایل های داخل یک مسیر',
      usage: '<dir name>/*',
      nb:
        'باید به فایل .gitignore اضافه گردد\n\n"dir name" را با مسیر فایل هایی که مایلید گیت نادیده بگیرد جایگزین نمایید.'
    },
    {
      value: 'ignore-all-files-of-a-specific-type',
      label: 'تمامی فایل های با یک نوع مشخص',
      usage: '*.<filename extension>',
      nb:
        'باید به فایل .gitignore اضافه گردد\n\n"filename extension" را با نوع(پسوند) فایل های که مایلید گیت نادیده بگیرد جایگزین نمایید.\n\nبه عنوان مثال *.py به گیت می گوید تمامی فایل های پایتون در ریپازیتوری را نادیده بگیرد.'
    }
  ],

  help: [
    {
      value: 'command-help',
      label: 'در مورد یک دستور',
      usage: 'append --help to the command',
      nb: 'مثال: git merge --help\n\nبا فشردن q از ترمینال خارج شوید'
    }
  ],

  add: [
    {
      value: 'new-changes',
      label: 'تغییرات جدید',
      usage: 'git add <file.ext>',
      nb:
        'به منظور اضافه کردن تمام فایل های داخل مسیر کنونی از "git add ." استفاده نمایید.\n\nبه منظور اضافه کردن یک مسیر جدید از "git add <directory>" استفاده نمایید.'
    },
    {
      value: 'add-new-branch',
      label: 'یک شاخه جدید'
    },
    {
      value: 'add-repo',
      label: 'ریپازیتوری ریموت جدید',
      usage: 'git remote add <shortname> <url>'
    },
    {
      value: 'add-alias',
      label: 'نام مستعار',
      usage: 'git config --global alias.<alias> <command>',
      nb:
        'به عنوان مثال بعد از اجرای دستور git config --global alias.ci commit می توان از عبارت ci به جای commit استفاده نمود.'
    },
    {
      value: 'add-annotated-tag',
      label: 'تگ تفسیر شده',
      usage: 'git tag -a v1.4 -m "my version 1.4"\n\ngit push --tags'
    },
    {
      value: 'add-annotated-tag-for-old-commit',
      label: 'تگ تفسیر شده برای کامیت قدیمی',
      usage: "git tag -a v1.2 -m 'version 1.2' <commit-hash>\n\ngit push --tags"
    }
  ],

  push: [
    {
      value: 'new-remote-branch',
      label: 'شاخه ریموتی که موجود نیست',
      usage: 'git push -u origin <branchname>'
    }
  ],

  rename: [
    {
      value: 'branch',
      label: 'شاخه'
    },
    {
      value: 'file',
      label: 'فایل',
      usage: 'git mv file_from file_to'
    },
    {
      value: 'remoteUrl',
      label: 'ریموت',
      usage: 'git remote rename <oldname> <newname>'
    }
  ],

  merge: [
    {
      value: 'branch',
      label: 'یک شاخه‌ی دیگر به شاخه کنونی',
      usage: 'git merge <branch-name>'
    },
    {
      value: 'single-file',
      label: 'یک فایل از یک شاخه به شاخه دیگر',
      usage: 'git checkout <branch name> <path to file> --patch'
    }
  ],

  squash: [
    {
      value: 'pr',
      label: 'کامیت های یک پول ریکوئست در یک کامیت',
      usage: 'git rebase -i <branch name>',
      nb:
        'اطمینان حاصل نمایید که آخرین کامیت ها از ریموت گرفته شده اند\n\nبه عنوان مثال(با فرض اینکه یک ریموت به نام upstream دارید):\n\ngit fetch upstream\ngit rebase -i upstream/master\n\nبرای کامیت هایی که مایلید اسکواش کنید "pick" را با "squash" جایگزین نمایید.\n\ngit push origin <topic branch> --force-with-lease'
    },
    {
      value: 'commits',
      label: 'آخرین n کامیت به یک کامیت',
      usage:
        'git reset --soft HEAD~N\ngit add .\ngit commit -m <message>',
      nb:
        "N را با عداد کامیت هایی که مایلید اسکواش کنید جایگزین نمایید.از دستور git log می توانید برای مشاهده تاریخچه‌ی کامیت استفاده نمایید."
    }
  ],

  debug: [
    {
      value: 'bisect',
      label: 'جست و جوی دو دویی',
      usage:
        'git bisect start\ngit bisect bad                 # Current version is bad\ngit bisect good v2.13          # v6.12 is known to be good',
      // nb:
        // '\nBisecting: 675 revisions left to test after this (roughly 10 steps)\nYou should now compile the checked-out version and test it. If that version works correctly, type\n\ngit bisect good\n\nIf that version is broken, type\n\ngit bisect bad\n\nThen git bisect will respond with something like\n\nBisecting: 337 revisions left to test after this (roughly 9 steps)\n\nKeep repeating the process: compile the tree, test it, and depending on whether it is good or bad run git bisect good or git bisect bad to ask for the next commit that needs testing.\nEventually there will be no more revisions left to inspect, and the command will print out a description of the first bad commit. The reference refs/bisect/bad will be left pointing at that commit.\nAfter a bisect session, to clean up the bisection state and return to the original HEAD, issue the following command:\n\ngit bisect reset'
        // 'Once you have specified at least one bad and one good commit, git bisect selects a commit in the middle of that range of history, checks it out, and outputs something similar to the following:\nBisecting: 675 revisions left to test after this (roughly 10 steps)\nYou should now compile the checked-out version and test it. If that version works correctly, type\n\ngit bisect good\n\nIf that version is broken, type\n\ngit bisect bad\n\nThen git bisect will respond with something like\n\nBisecting: 337 revisions left to test after this (roughly 9 steps)\n\nKeep repeating the process: compile the tree, test it, and depending on whether it is good or bad run git bisect good or git bisect bad to ask for the next commit that needs testing.\nEventually there will be no more revisions left to inspect, and the command will print out a description of the first bad commit. The reference refs/bisect/bad will be left pointing at that commit.\nAfter a bisect session, to clean up the bisection state and return to the original HEAD, issue the following command:\n\ngit bisect reset'
    },
    {
      value: 'blame',
      label: 'چه شخصی هر خط را ویرایش داده',
      usage: 'git blame -L <number-line-start>,<number-line-end> <filename>',
      nb: '-L خروجی را به محدوده خط درخواست شده محدود خواهد کرد.'
    },
    {
      value: 'grep',
      label: 'جست و جو داخل فایل ها',
      usage: 'git grep -n <your_text_or_expression>',
      nb:
        'نمایش خط هایی که یک الگو مشخص را دارند.\n-n برای نمایش تعداد خطوطی که پیدا شده‌اند'
    }
  ],

  recover: [
    {
      value: 'dropped-commit',
      label: 'نمایش هش های کامیت های آویزان بعد از یک ریست سخت به کامیت قبلی',
      usage: 'git reflog',
      nb:
        'جایگزین: git log -g. برای بازیابی از دستور زیر استفاده نمایید:\ngit checkout -b <recovery> <hash>'
    },
    {
      value: 'deleted-branch',
      label: 'نمایش هش های شاخه‌ی حذف شده یا اشیا دیگر گیت',
      usage: 'git fsck --full',
      nb:
        'نمایش هش های تمام اشیای آویزان گیت. برای بازیابی از دستور زیر استفاد نمایید.\ngit checkout -b <recovery> <hash>'
    }
  ],

  rebase: [
    {
      value: 'origin-branch',
      label: 'یک شاخه اصلی به شاخه‌ی فعال من.',
      usage: 'git pull --rebase origin <branch name>',
      nb:
        '<branch name> را با نام شاخه ای که مایل به دریافت آن می باشید جایگزین نمایید.'
    },
    {
      value: 'local-branch',
      label: 'یک شاخه محلی به شاخه فعال من',
      usage: 'git rebase <branch name>',
      nb:
        '<branch name> را با نام شاخه ای که مایل به دریافت آن می باشید جایگزین نمایید.'
    },
    {
      value: 'skip',
      label: 'و نادیده گرفتن یک کامیت',
      usage: 'git rebase --skip',
      nb:
        'در هنگام پایه گذاری مجدد ممکن است گیت قادر به اعمال کامیت ها نباشد. می توانید از این دستور برای رد کردن تغییرات انجام شده توسط خودتان در کامیت فعلی و اعمال تغییرات از شاخه در حال دریافت استفاده نمایید.'
    },
    {
      value: 'continue',
      label: 'و ادامه دادن بعد از رفع کردن مغایرت ها',
      usage: 'git rebase --continue',
      nb:
      'در هنگام پایه گذاری مجدد ممکن است گیت به دلیل وجود مغایرت ها قادر به اعمال کامیت ها نباشد. می توانید از این دستور برای حل دستی مغایرت ها و ادامه‌ی فرایند پایه گذاری استفاده نمایید'
    }
  ],

  synchronize: [
    {
      value: 'branch-from-fork',
      label: 'یک شاخه در یک انشعاب(فورک)',
      usage:
        'git fetch <remote-repo> \n\ngit checkout <branch-name> \n\ngit merge <remote-repo>/<branch-name>',
      nb: 'ابتدا باید یک ریپازیتوری ریموت برای انشعاب خود اضافه نمایید.'
    }
  ],
  stash: [
    {
      value: 'save-stash',
      label: 'فایل های ردیابی شده و نشده',
      usage: 'git stash',
      nb: 'به منظور ذخیره سازی با یک پیام دلخواه از دستور git stash save <message> استفاده نمایید.\n\nبه منظور ذخیرهه سازی فایل های ردیابی نشده: git stash save -u'
    },
    {
      value: 'list-stash',
      label: 'مشاهده لیست تغییرات ذخیره شده.',
      usage: 'git stash list'
    },
    {
      value: 'apply-stash',
      label: 'اعمال'
    },
    {
      value: 'show',
      label: 'مشاهده محتوا',
      usage: 'git stash show -p <stash id>',
      nb: 'به منظور مشاهده محتوای آخرین ذخیره سازی می توانید <stash id> را خالی بگذارید.'
    },
    {
      value: 'delete-stash',
      label: 'حذف'
    },
    {
      value: 'create-branch',
      label: 'ایجاد یک شاخه‌ی جدید و اعمال ذخیره سازی',
      usage: 'git stash branch <branch name> <stash id>'
    }
  ],

  cherrypick: [
    {
      value: 'origin-branch',
      label: 'کامیت از شاخه اصلی به شاخه‌ی فعال من',
      usage: 'git cherry-pick <commit-hash> <commit-hash>',
      nb:
        'اعمال یک یا چند کامیت از شاخه ای به شاخه‌ی فعال شما'
    },
  ],
};

