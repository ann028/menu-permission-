const userInfo = {
  token: 'asasas@3wec',
  userId: 23,
  userName: 'Anna',
  roles: 'staff',
  permission: ['prm1000']
}
export default {
  'get|/api/login': option => {
    return {
      status: 200,
      success: true,
      data: userInfo
    }
  }
}