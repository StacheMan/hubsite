import styled from 'styled-components';
import tw from 'tailwind.macro';
import { Link } from 'gatsby';

export const Logo = styled(Link)`
  ${tw`flex items-center mr-auto text-orange-600 hover:text-green-800`};
`;

export const Text = styled.h1`
  ${tw`text-lg`};
`;

export const Image = styled.figure`
  ${tw`w-16 h-16 mr-3 border border-green-700 rounded-full`};

  img {
    ${tw`border-4 border-white rounded-full`};
  }
`;
