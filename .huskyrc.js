const tasks = arr => arr.join(' && ');

module.exports = {
  hooks: {
    'pre-commit': tasks([
      'git-branch-is -r "^((?!main).)*$"',
      'git-branch-is -r "^((?!develop).)*$"',
      'lint-staged',
    ]),
    'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
  },
};
