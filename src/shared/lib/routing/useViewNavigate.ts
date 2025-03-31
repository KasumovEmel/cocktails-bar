import {useNavigate} from 'react-router-dom';

export const useViewNavigate = () => {
  const navigate = useNavigate();

  return (to: string) => {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (!document.startViewTransition) {
      void navigate(to);
      return;
    }

    document.startViewTransition(() => navigate(to));
  };
};
