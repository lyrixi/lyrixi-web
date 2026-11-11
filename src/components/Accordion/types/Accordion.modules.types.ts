import Accordion from '../Accordion'
import AccordionGroup from '../AccordionGroup'
import AccordionTransition from '../AccordionTransition'

export type AccordionComponents = typeof Accordion & {
  Group: typeof AccordionGroup
  Transition: typeof AccordionTransition
}
