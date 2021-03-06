import { animate, keyframes, query, stagger, state, style, transition, trigger } from '@angular/animations'

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

export const itemStateTrigger = trigger('itemState', [
  transition(':leave', [
    animate('400ms ease-out', keyframes([
      style({
        opacity: 1,
        transform: 'translateX(0)'
      }),
      style({
        transform: 'translateX(-5%)'
      }),
      style({
        opacity: 0,
        transform: 'translateX(100%)'
      })
    ]))
  ]),
  transition('slidUp => slidDown', [
    style({
      transform: 'translateY(-100%)'
    }),
    animate('300ms ease-out', style({
      transform: 'translateY(0)'
    }))
  ]),
  transition('slidDown => slidUp', [
    style({
      transform: 'translateY(0)'
    }),
    animate('300ms ease-out', style({
      transform: 'translateY(-100%)'
    }))
  ])
])

export const slideStateTrigger = trigger('slideState', [
  transition(':enter', [
    style({
      transform: 'translateY(-100%)'
    }),
    animate('300ms ease-out', style({
      transform: 'translateY(0)'
    }))
  ]),
  transition(':leave', [
    style({
      transform: 'translateY(0)'
    }),
    animate('300ms ease-out', style({
      transform: 'translateY(-100%)'
    }))
  ])
])

export const listStateTrigger = trigger('listState', [
  transition('* => *', [
    query(':enter', [
      style({
        opacity: 0,
        transform: 'translateX(-100%)'
      }),
      stagger(300, animate('500ms ease-out', keyframes([
        style({
          opacity: 1,
          transform: 'translateX(5%)'
        }),
        style({
          opacity: 1,
          transform: 'translateX(0)'
        })
      ])))
    ], { optional: true })
  ])
])
