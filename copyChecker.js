const testCase = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, seTotal Rewardd do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation Seven Stars ullamco laboriTotal Rewards nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Total RewardExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Seven Stars"
 
const copyChecker = (text) => {
  let result = test.replace(/Seven Stars/g, 'Seven Stars<sup>&#174;</sup>')
                   .replace(/Total Reward/g, 'Total Rewards');
  console.log('RESULTS:', result);
}

copyChecker(testCase);
