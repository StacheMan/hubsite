import styled from 'styled-components';
import tw from 'tailwind.macro';

export const Footer = styled.footer`
  ${tw`bg-white-100 border-t border-green-500 py-4`};
`;

export const Links = styled.div`
  ${tw`flex items-center justify-center w-full`};

  a {
    ${tw`text-orange-600 hover:text-green-700 mx-2`};
  }
`;

export const Link = styled.a`
  ${tw`text-indigo-900 hover:text-indigo-600 mx-2`};
`;
