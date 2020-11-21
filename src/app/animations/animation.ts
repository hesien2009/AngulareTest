import { animate, style, transition, trigger } from '@angular/animations';
import { ReduceSentencePipe } from '../CustomPipes/reduce-sentence.pipe';

export let fade = trigger('fade', [
    transition('void => *',[
        animate(3000, style(
            {backgroundColor:'greenYellow', opacity:0 })
        )
    ]),
    transition('* => void',[
        animate(3000, style(
            { backgroundColor:'red',opacity:1 })
        )
    ])
    ])
