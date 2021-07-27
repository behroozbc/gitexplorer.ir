export const tertiaryOptions = {
  logs: [
    {
      value: 'all',
      label: 'all',
      usage: 'git log',
      nb: 'Type q in the terminal to exit the logs'
    },
    {
      value: 'last-n-commit',
      label: 'for last xxx number of commits',
      usage: 'git log -n',
      nb: 'Replace n with number of commits e.g. git log -2'
    },
    {
      value: 'particular-period',
      label: 'since a particular period',
      usage: 'git log --since=period',
      nb: 'Replace period with intended timeframe e.g git log --since=3days. You can use dates like 2018-12-31.\n\n Similar flags are --until, --before, --after'
    },
    {
      value: 'commit-on-oneline',
      label: 'with each commit on one line',
      usage: 'git log --oneline'
    },
    {
      value: 'patches-introduced',
      label: 'with the patches introduced in each commit',
      usage : 'git log -p'
    }
  ],
  branch: [
    {
      value: 'in',
      label: 'while working in the branch',
      usage: 'git branch -m <new name>'
    },
    {
      value: 'outside',
      label: 'from outside the branch',
      usage: 'git branch -m <old name> <new name>'
    }
  ],
  'add-new-branch': [
    {
      value: 'no-checkout',
      label: 'but remain in the current branch I am working from',
      usage: 'git branch <new name>'
    },
    {
      value: 'checkout',
      label: 'and switch to the new branch',
      usage: 'git checkout -b <new name>'
    },
    {
      value: 'checkout-remote',
      label: 'from another branch',
      usage: 'git checkout -b <new name> <another branch>'
    }
  ],
  'apply-stash': [
    {
      value: 'latest',
      label: 'latest stash',
      usage: 'git stash apply'
    },
    {
      value: 'specific',
      label: 'a specific stash',
      usage: 'git stash apply <stash id>',
      nb: 'The stash id can be gotten when you run git stash list. It\'s usually in this format: stash@{index} e.g. stash@{0}'
    },
    {
      value: 'pop',
      label: 'and delete stash',
      usage: 'git stash pop <stash id>',
      nb: 'Stash id optional. Add it if you want to apply and delete a specific stash otherwise leave to pop the latest stash'
    }
  ],
  'delete-stash': [
    {
      value: 'all',
      label: 'all stashed changes',
      usage: 'git stash clear'
    },
    {
      value: 'specific',
      label: 'specific stash',
      usage: 'git stash drop <stash id>'
    },
  ],
  'delete-multiple-branches': [
    {
      value: 'name',
      label: 'by name',
      usage: 'git branch -D <branch name> <branch name> <branch name>'
    },
    {
      value: 'pattern',
      label: 'by pattern',
      usage: 'git branch | grep <regex pattern> | xargs git branch -D',
      nb: 'e.g. git branch | grep "-" | xargs git branch -D will delete all branches that have \'-\' in their names or git branch | grep -v "master\\|staging" | xargs git branch -D will delete all branches except staging and master.\n\nNB: Always put your regex pattern in quotes'
    }
  ]
};
export const tertiaryOptions_fa = {
  logs: [
    {
      value: 'all',
      label: 'کامل',
      usage: 'git log',
      nb: 'q را در ترمینل وارد نمایید تا از لاگ ها خارج شود'
    },
    {
      value: 'last-n-commit',
      label: 'برای n کامیت آخر',
      usage: 'git log -n',
      nb: 'تعداد کامیت ها به جای n جایگزین نمایید.'
    },
    {
      value: 'particular-period',
      label: 'از یک زمان مشخص',
      usage: 'git log --since=period',
      nb: 'زمان مورد نظر به جای period جایگزین نمایید.مثال: git log --since=3days. میتوانید از تاریخ هایی مثل 2018-12-31 استفاده نمایید.\n\n پرچم های مشابه: --until, --before, --after'
    },
    {
      value: 'commit-on-oneline',
      label: 'با هر کامیت در یک خط',
      usage: 'git log --oneline'
    },
    {
      value: 'patches-introduced',
      label: 'با پچ های معرفی شده در هر کامیت',
      usage : 'git log -p'
    }
  ],
  branch: [
    {
      value: 'in',
      label: 'هنگام کار کردن روی شاخه',
      usage: 'git branch -m <new name>'
    },
    {
      value: 'outside',
      label: 'از شاخه خارجی',
      usage: 'git branch -m <old name> <new name>'
    }
  ],
  'add-new-branch': [
    {
      value: 'no-checkout',
      label: 'ولی در شاخه فعال کنونی بمان',
      usage: 'git branch <new name>'
    },
    {
      value: 'checkout',
      label: 'و شاخه فعال را به شاخه جدید عوض کن',
      usage: 'git checkout -b <new name>'
    },
    {
      value: 'checkout-remote',
      label: 'از شاخه دیگر',
      usage: 'git checkout -b <new name> <another branch>'
    }
  ],
  'apply-stash': [
    {
      value: 'latest',
      label: 'آخرین ذخیره سازی',
      usage: 'git stash apply'
    },
    {
      value: 'specific',
      label: 'یک ذخیره سازی مشخص',
      usage: 'git stash apply <stash id>',
      nb: 'stash id را می توانید با اجرای git stash list پیدا کنید. که معمولا به این فرمت است: stash@{index} e.g. stash@{0}'
    },
    {
      value: 'pop',
      label: 'و حذف ذخیره سازی',
      usage: 'git stash pop <stash id>',
      nb: 'با خالی گذاشتن stash id آخرین ذخیره سازی حذف می شود.'
    }
  ],
  'delete-stash': [
    {
      value: 'all',
      label: 'تمام تغییرات ذخیره شده',
      usage: 'git stash clear'
    },
    {
      value: 'specific',
      label: 'یک ذخیره سازی مشخص',
      usage: 'git stash drop <stash id>'
    },
  ],
  'delete-multiple-branches': [
    {
      value: 'name',
      label: 'بر اساس اسم',
      usage: 'git branch -D <branch name> <branch name> <branch name>'
    },
    {
      value: 'pattern',
      label: 'بر اساس الگو',
      usage: 'git branch | grep <regex pattern> | xargs git branch -D',
      nb: 'به عنوان مثال git branch | grep "-" | xargs git branch -D تمام شاخه هایی را حذف خواهد کرد که در اسمشان یا شاخه گیتشان \'-\' وجود داشته باشد. | grep -v "master\\|staging" | xargs git branch -D تمامی شاخه ها به جز master و staging را حذف خواهد کرد.\n\nتوجه: همیشه الگو های regex را داخل کوتیشن قرار دهید.'
    }
  ]
};
