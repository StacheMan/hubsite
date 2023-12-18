import styled from 'styled-components';
import tw from 'tailwind.macro';

export const InfoBlock = styled.div`
  ${tw`flex flex-col my-4 mx-3 p-4 bg-orange-200 rounded-lg border border-green-700`};
  ${({ center }) => center && tw`items-center`};
  box-shadow: 20px 20px 20px -20px rgb(0 0 0 / 50%);
`;

export const Icon = styled.span`
  ${tw`flex items-center justify-center w-10 h-10 bg-white border border-green-700 rounded-full mb-2`};
`;

export const Wrapper = styled.div`
  ${({ center }) => center && tw`text-center`};
`;

export const Title = styled.h3`
  ${tw`text-md mt-1 font-semibold`};
`;

export const Content = styled.p`
  ${tw`mt-1`};
`;
