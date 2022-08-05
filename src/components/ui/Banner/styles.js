import styled from 'styled-components';
import tw from 'tailwind.macro';

export const Banner = styled.section`
  ${tw`bg-gray-300 border-b border-gray-300 relative overflow-hidden`};
`;

export const Content = styled.p`
  ${tw`mb-8 pl-4 rounded-lg`};
  background-color: rgba(0, 0, 0, 0.8);
`;

export const BannerContent = styled.div`
  ${tw`relative z-20`};
`;