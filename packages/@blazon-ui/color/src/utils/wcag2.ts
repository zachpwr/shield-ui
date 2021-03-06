import { Color } from '../Color';
import {
  WCAG2ConformanceLevelToTextContrastSuccessCriterionVariant,
  WCAG2MinimumTextContrastRatios,
} from '../constants/wcag2';
import { WCAG2SuccessCriterionConformanceLevel, WCAG2TextContrastContext } from '../types/wcag2';
import { getContrastRatioForColors } from './contrast';

/**
 * Determines whether or not users can read text that is presented over a
 * background given a WCAG2 conformance level and text contrast context.
 *
 * More info:
 * - https://www.w3.org/TR/WCAG20-TECHS/G17.html
 * - https://www.w3.org/TR/WCAG21/#contrast-minimum
 * - https://www.w3.org/TR/WCAG21/#contrast-enhanced
 */
export const doesTextContrastConformToWCAG2 = (
  conformanceLevel: WCAG2SuccessCriterionConformanceLevel,
  context: WCAG2TextContrastContext,
  textColor: Color,
  backgroundColor: Color,
) => {
  const criterionVariant = WCAG2ConformanceLevelToTextContrastSuccessCriterionVariant[conformanceLevel];
  const contrastRatio = getContrastRatioForColors(textColor, backgroundColor);
  return contrastRatio >= (WCAG2MinimumTextContrastRatios[criterionVariant][context] || 0);
};
