import { ThreeDots } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <ThreeDots
      height="100"
      width="100"
      radius="9"
      color="darkcyan"
      ariaLabel="three-dots-loading"
      wrapperStyle={{ padding: '20px 100px' }}
      wrapperClassName=""
      visible={true}
    />
  );
};
