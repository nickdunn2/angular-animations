import { animate, group, query, state, style, transition, trigger } from '@angular/animations'

export const buttonStateTrigger = trigger('buttonState', [
  state('valid', style({
    backgroundColor: 'green',
    borderColor: 'darkgreen'
  })),
  state('invalid', style({
    backgroundColor: 'lightgray',
    borderColor: 'gray'
  })),
  transition('invalid => valid', [
    group([
      animate(100, style({
        transform: 'scale(1.02)'
      })),
      animate(200, style({
        backgroundColor: 'green'
      }))
    ]),
    animate(200, style({
      transform: 'scale(1)'
    }))
  ]),
  transition('valid => invalid', [
    group([
      animate(100, style({
        transform: 'scale(1.02)'
      })),
      animate(200, style({
        backgroundColor: 'lightgray'
      }))
    ]),
    animate(200, style({
      transform: 'scale(1)'
    }))
  ])
])

export const formStateTrigger = trigger('formState', [
  transition('* => *', [
    query('input.ng-invalid:focus', [
      animate(200, style({
        backgroundColor: 'red'
      })),
      animate(200)
    ], { optional: true })
  ])
])
