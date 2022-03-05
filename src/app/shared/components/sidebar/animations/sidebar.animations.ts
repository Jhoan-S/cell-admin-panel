import { animate, AnimationTriggerMetadata, query, state, style, transition, trigger } from "@angular/animations";

export const sidebarAnimations: SidebarAnimation = {
    openClose: trigger('openClose', [
        state('open', style({ width: '240px' })),
        state('closed', style({ width: '50px' })),
        transition('open => closed', [
            query('span', [
                style({ display: 'none' })
            ]),
            animate('1s')
        ]),
        transition('closed => open', [
            animate('1s'),
            query('span', [
                style({ display: 'block' })
            ]),
        ])
    ])
}

interface SidebarAnimation {
    readonly openClose: AnimationTriggerMetadata;
}