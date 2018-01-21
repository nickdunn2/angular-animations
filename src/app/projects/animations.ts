import { animate, state, style, transition, trigger } from '@angular/animations';

export const markedTrigger = trigger('markedState', [
  state('default', style({
    border: '1px solid black',
    backgroundColor: 'transparent',
    padding: '20px'
  })),
  state('marked', style({
    border: '2px solid black',
    backgroundColor: '#f3f3f3',
    padding: '19px'
  })),
  transition('default => marked', [
    style({
      border: '2px solid black',
      padding: '19px'
    }),
    animate('200ms ease-out', style({
      transform: 'scale(1.005)'
    })),
    animate(200)
  ]),
  transition('marked => default', [
    style({
      border: '1px solid black',
      padding: '20px'
    }),
    animate('200ms ease-out')
  ])
])
