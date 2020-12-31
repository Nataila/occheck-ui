const country_list = ['美国', '英国', '澳洲', '加拿大'];
const group_list = ['普通用户', '管理员']

export const countryDisplay = index => {
  return country_list[parseInt(index)];
}

export const groupDisplay = index => {
  const group = group_list[parseInt(index)];
  return group
}
