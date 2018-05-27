import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

export const fadeOutAnimation = trigger('fadeOutAnimation', [
    transition(':enter', [   // :leave is alias to '* => void'
      animate(2500, style({ opacity: 0 }))
    ])
]);
