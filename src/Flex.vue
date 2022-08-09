<template>
    <div
        class="flex-wrapper"
        :class="{
            'flex-wrapper--inline': inline
        }"
        :style="({
            display: inline ? 'inline-flex' : 'flex',
            flexDirection: direction,
            justifyContent: justifyContent,
            alignItems: alignItems,
            gap: getGap,
            flexWrap: wrap,
            ...(placeItems && { placeItems })
        } as CSSProperties)"
    >
        <slot />
    </div>
</template>

<script lang="ts" setup>
import { computed, defineProps, withDefaults } from 'vue';
import type { CSSProperties } from 'vue';

type GlobalValues = 'initial' | 'inherit' | 'revert' | 'revert-layer' | 'unset';

type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse' | `${GlobalValues}`;
type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse' | `${GlobalValues}`;
type FlexJustifyContent = 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'stretch' | 'start' | 'end' | 'flex-start' | 'flex-end' | 'left' | 'right' | 'normal' | `${GlobalValues}`;
type AlignItems = 'center' | 'start' | 'end' | 'flex-start' | 'flex-end' | 'normal' | 'stretch' | 'baseline' | 'first baseline' | 'last baseline' | 'safe center' | 'unsafe center' | `${GlobalValues}`;

const props = withDefaults(defineProps<{
    inline?: boolean;
    direction?: FlexDirection;
    justifyContent?: FlexJustifyContent;
    alignItems?: AlignItems;
    placeItems?: FlexJustifyContent;
    gap?: GlobalValues | number;
    gapUnit?: 'rem' | 'px' | 'var' | 'spacer';
    wrap?: FlexWrap;
}>(), {
    direction: 'initial',
    justifyContent: 'initial',
    alignItems: 'initial',
    placeItems: undefined,
    gap: 'initial',
    gapUnit: 'spacer',
    wrap: 'nowrap',
});

const getGap = computed(() => {
    if (props.gapUnit === 'spacer') {
        return `var(--spacer-${props.gap})`;
    }

    if (props.gapUnit === 'var') {
        return `var(${props.gap})`;
    }

    return `${props.gap}${props.gapUnit}`;
});

</script>
