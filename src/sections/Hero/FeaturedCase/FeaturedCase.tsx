import Grid from '@material-ui/core/Grid';
import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';

import { BOX_COMMON_STYLES } from '../../..//globalStyles/sharedStyles/box';
import { Container } from '../../../components/Container';
import media from '../../../globalStyles/media';
// @ts-expect-error Image import
import image from '../../../images/use-case.png';

const Section = styled.section`
  padding: ${({ isFramed }) => (isFramed ? '16px' : '16px 16px 80px 16px')};
  display: flex;
  align-items: center;

  ${media.greaterThan('md')`
    ${({ isFramed }) =>
      !isFramed &&
      css`
        height: calc(100vh - 60px);
        min-height: 900px;
        padding-bottom: 0;
      `}
  `}

  ${({ bgColor, isFramed }) =>
    bgColor &&
    !isFramed &&
    css`
      background-color: ${bgColor};
    `}
`;

const StyledContainer = styled(Container)`
  width: 100%;
  padding: 0 16px;
  overflow: hidden;
  position: relative;

  ${({ isFramed, bgColor }) =>
    isFramed &&
    css`
      ${BOX_COMMON_STYLES};
      background-color: ${bgColor};
    `}
`;

const StyledGridItem = styled(Grid)`
  && {
    justify-content: center;
    align-items: center;
  }
`;

const ContentWrapper = styled.div`
  padding-top: 20px;
  ${media.greaterThan('md')`
    padding: ${({ reversed }) => (reversed ? '0 24px 0 0' : '0 0 0 24px')};
  `}
  ${media.greaterThan('lg')`
    padding: 0 58px;
  `}
  ${media.lessThan('md')`
    max-width: 400px;
  `}
`;

const StyledGridContainer = styled(Grid)`
  && {
    width: 100%;
    padding-bottom: 16px;
    ${media.greaterThan('md')`
    min-width: 700px;
    padding-top: 16px;
  `}
    ${media.greaterThan('lg')`
    min-width: 1000px;
  `}
  }
`;

const StyledImage = styled.img`
  width: 100%;
  max-width: 709px;
`;

type FeaturedCaseProps = {
  children: ReactNode;
};

const bgColor = '#dafaff';
const direction = 'row-reverse';

export const FeaturedCase = ({ children }: FeaturedCaseProps) => {
  return (
    <Section bgColor={bgColor} isFramed={false}>
      <StyledContainer bgColor={bgColor} isFramed={false}>
        <StyledGridContainer
          direction={direction}
          alignItems="center"
          container
        >
          <StyledGridItem xs={12} md={6} item>
            <StyledImage
              src={image}
              alt="Forminer - Build form in React without any problems"
            />
          </StyledGridItem>
          <Grid xs={12} md={6} item>
            <ContentWrapper reversed>{children}</ContentWrapper>
          </Grid>
        </StyledGridContainer>
      </StyledContainer>
    </Section>
  );
};