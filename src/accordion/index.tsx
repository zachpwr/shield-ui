import { lighten, mix } from 'polished';
import * as React from 'react';
import styled from 'styled-components';

import Grid from '../grid';
import { EColumnSpanMode } from '../grid/column';
import { ERowAlignmentModes } from '../grid/row';

export interface IAccordionProps {
  title: string;
  children: React.ReactNode;
  subtitle?: string;
  collapsedText?: string;
  expandedText?: string;
}

const AccordionTitle = styled.div`
  display: block;
  font-size: 1em;
  margin-bottom: 5px;
  font-weight: 600;
  color: ${props => props.theme.colors.darkGray};
  cursor: pointer;
`;

const AccordionSubtitle = styled.div`
  color: ${props => lighten(0.25, props.theme.colors.darkGray)};
  margin-top: 5px;
  font-size: 0.75em;
  font-weight: 600;
  cursor: pointer;
`;

const AccordionActivator = styled.button`
  display: block;
  width: 100%;
  text-align: left;
  cursor: pointer;
  font-size: 1em;
  background: none;
  border: 0;
  padding: 0.5em;
  border-radius: ${props => props.theme.borderRadius};
  transition: 0.25s background-color ease-in-out;

  * {
    transition: 0.25s color ease-in-out;
  }

  &:hover {
    background-color: ${props => mix(0.5, props.theme.colors.secondary, props.theme.colors.white)};
  }

  &:focus {
    outline: 0;
    background-color: ${props => mix(0.1, props.theme.colors.main, props.theme.colors.white)};

    * {
      color: ${props => props.theme.colors.main};
    }
  }
`;

const AccordionIndicator = styled.div<{ isExpanded: boolean }>`
  cursor: pointer;
  width: 0.75em;
  height: 0.75em;
  border-style: solid;
  border-width: 0 2px 2px 0;
  margin-left: 0.25em;
  transform: translateX(${props => (props.isExpanded ? '0.5em' : '0em')})
    translateY(${props => (props.isExpanded ? '-0.25em' : '0em')})
    rotate(${props => (props.isExpanded ? '45deg' : '-45deg')});
  transition: 0.25s transform ease-in-out;
`;

export default class Accordion extends React.PureComponent<IAccordionProps, { isVisible: boolean }> {
  public static displayName = 'Accordion';
  private static uniqueIdCounter = 0;

  public state = {
    isVisible: false,
  };
  private uniqueId: string;

  constructor(props: IAccordionProps) {
    super(props);

    this.uniqueId = `BlazonUI__Accordion__${Accordion.uniqueIdCounter}`;
    Accordion.uniqueIdCounter++;
  }

  public setVisible = (isVisible: boolean) => {
    this.setState({ isVisible });
  };

  public render() {
    const { isVisible } = this.state;
    const { title, subtitle, collapsedText = '+ Expand', expandedText = '- Collapse', children } = this.props;

    const accordionContentId = `${this.uniqueId}__content`;

    return (
      <>
        <Grid.Row noGutter>
          <Grid.Column>
            <AccordionActivator
              onClick={() => this.setVisible(!isVisible)}
              aria-expanded={isVisible}
              aria-controls={accordionContentId}
            >
              <Grid.Row alignmentMode={ERowAlignmentModes.center} noGutter>
                <Grid.Column spanMode={EColumnSpanMode.fitSpace}>
                  <AccordionIndicator isExpanded={isVisible} />
                </Grid.Column>
                <Grid.Column>
                  <AccordionTitle>{title}</AccordionTitle>
                  <AccordionSubtitle>{subtitle}</AccordionSubtitle>
                </Grid.Column>
              </Grid.Row>
            </AccordionActivator>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row style={{ display: isVisible ? undefined : 'none' }} id={accordionContentId}>
          <Grid.Column aria-hidden={!isVisible}>{children}</Grid.Column>
        </Grid.Row>
      </>
    );
  }
}
