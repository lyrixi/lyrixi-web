import _Accordion from './Accordion'
import AccordionGroup from './AccordionGroup'
import AccordionTransition from './AccordionTransition'

import type { AccordionComponents } from './types/Accordion.modules.types'

const Accordion = _Accordion as AccordionComponents
Accordion.Group = AccordionGroup
Accordion.Transition = AccordionTransition

export default Accordion
