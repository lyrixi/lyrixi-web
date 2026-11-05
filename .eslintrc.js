module.exports = {
  extends: require.resolve('@umijs/lint/dist/config/eslint'),
  rules: {
    'guard-for-in': 'off',
    // 禁止整文件关闭类型检查；局部问题用具体类型或 @ts-expect-error + 说明
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-nocheck': true,
        'ts-ignore': true,
        'minimumDescriptionLength': 10
      }
    ]
  }
}
