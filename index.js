/*module.exports = {
  applicationData: require('./src/client/getApplicationData'),
  applicationPrefix: require('./src/client/putApplicationPrefix'),
  //getMemberData: require('./src/member/getMemberData'),
  memberNick: require('./src/member/setNick'),
  memberSelfRole: require('./src/member/addRole')
};*/

module.exports = {
  client: {
    applicationData: require('./src/client/getApplicationData'),
    applicationPrefix: require('./src/client/putApplicationPrefix')
  },
  member: {
    memberNick: require('./src/member/setNick'),
    memberSelfRole: require('./src/member/addRole')
  }
};
