const options = [
  { value: 'add', label: 'add' },
  { value: 'commit', label: 'commit' },
  { value: 'revert', label: 'revert/reset' },
  { value: 'initialize', label: 'initialize' },
  { value: 'modify', label: 'modify' },
  { value: 'show', label: 'show/view' },
  { value: 'delete', label: 'delete/remove' },
  { value: 'compareCommits', label: 'compare two commits' },
  { value: 'configure', label: 'configure' },
  { value: 'clone', label: 'clone' },
  { value: 'ignore', label: 'ignore' },
  { value: 'rename', label: 'rename' },
  { value: 'merge', label: 'merge' },
  { value: 'squash', label: 'squash' },
  { value: 'stash', label: 'stash' },
  { value: 'debug', label: 'debug' },
  { value: 'recover', label: 'recover' },
  { value: 'synchronize', label: 'synchronize' },
  { value: 'rebase', label: 'rebase' },
  { value: 'cherrypick', label: 'cherry-pick' },
];

const options_fa = [
  { value: 'add', label: 'اضافه کردن' },
  { value: 'commit', label: 'کامیت' },
  { value: 'revert', label: 'برگرداندن' },
  { value: 'initialize', label: 'مقداردهی اولیه' },
  { value: 'modify', label: 'اصلاح کردن' },
  { value: 'show', label: 'نشان دادن' },
  { value: 'delete', label: 'حذف کردن' },
  { value: 'compareCommits', label: 'مقایسه دو کامیت' },
  { value: 'configure', label: 'پیکربندی' },
  { value: 'clone', label: 'کلون' },
  { value: 'ignore', label: 'نادیده گرفتن' },
  { value: 'rename', label: 'تغییر نام' },
  { value: 'merge', label: 'ادغام' },
  { value: 'squash', label: 'اسکواش' },
  { value: 'stash', label: 'ذخیره کردن' },
  { value: 'debug', label: 'اشکال زدایی' },
  { value: 'recover', label: 'بازیافتن' },
  { value: 'synchronize', label: 'همگام سازی' },
  { value: 'rebase', label: 'پایه گذاری مجدد' },
  { value: 'cherrypick', label: 'انتخاب بهترین ' },
];

export const primaryOptions = options_fa.sort((x, y) => {
  if (x.value < y.value) {
    return -1;
  }
  if (x.value > y.value) {
    return 1;
  }
  return 0;
});
