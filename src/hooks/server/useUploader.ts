import { useUserStore } from '/@/store/modules/user';

const userInfo = useUserStore().getUserInfo;

export const uploadArticleCover = () => {
  const realName = userInfo.realName;
  console.log(realName);

  return {
    uploadArticleCover,
  };
};
