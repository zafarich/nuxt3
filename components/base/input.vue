<template>
  <q-input
    ref="inputRef"
    v-bind="$attrs"
    :model-value="modelValue"
    hide-bottom-space
    class="base-input"
    no-error-icon
    lazy-rules="ondemand"
    :type="innerType"
    @blur="onBlur"
    @focus="onFocus"
    @update:model-value="change"
  >
    <template v-if="append" #append>
      <slot name="append" />
    </template>
    <template v-if="prepend" #prepend>
      <slot name="prepend" />
    </template>
    <template v-if="after" #after>
      <slot name="after" />
    </template>
  </q-input>
</template>

<script setup lang="ts">
import { prettify, trimBetween } from '@/utils/helpers.ts';
const props = defineProps<{
  modelValue: number | string | null;
  append: boolean;
  prepend: boolean;
  after: boolean;
  type: string;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number | null): void;
}>();

const attrs = useAttrs();

const inputRef = ref<InstanceType<typeof QInput> | null>(null);
const innerType = ref<string>(props.type);

let inputEl: HTMLInputElement | null = null;
let prependEl: HTMLElement | null = null;

onBeforeUnmount(() => {
  inputEl?.removeEventListener('keydown', fixCursorPosition);
});

onMounted(() => {
  init();
  if (props.type === 'number') {
    innerType.value = 'string';
    emit('update:modelValue', prettify(props.modelValue));
  }
  addPaddingLeft();
});
watch(
  () => props.type,
  (newType) => {
    innerType.value = newType;
  }
);

function init() {
  const $el = inputRef.value?.$el;
  if (attrs.mask && $el) {
    inputEl = $el.getElementsByTagName('input')[0];
    prependEl = $el.getElementsByClassName(
      'q-field__prepend'
    )?.[0] as HTMLElement;
    inputEl.addEventListener('keydown', fixCursorPosition);
  }
}

const fixCursorPosition = (e: KeyboardEvent) => {
  let cursorPos = inputEl?.selectionStart ?? 0;
  if (e.code === 'Backspace' || e.code === 'Delete') {
    setTimeout(() =>
      setCursorPosition(e.target as HTMLInputElement, cursorPos)
    );
  }

  if (!e?.code?.startsWith('Digit')) return;

  setTimeout(() => {
    const nextValue = (e.target as HTMLInputElement).value[++cursorPos];

    const characters = [' ', '.', '-', '_', '/'];

    if (characters.includes(nextValue)) cursorPos++;

    setCursorPosition(e.target as HTMLInputElement, cursorPos);
  });
};

const setCursorPosition = (el: HTMLInputElement, position: number) => {
  el.selectionStart = el.selectionEnd = position;
};

function change(v: string | number) {
  emit('update:modelValue', v?.toString().trim());
}

function focus() {
  inputRef.value?.focus();
}

function resetValidation() {
  inputRef.value?.resetValidation();
}

async function onFocus(event: FocusEvent) {
  if (props.type === 'number') {
    innerType.value = props.type;
    emit(
      'update:modelValue',
      trimBetween((event.target as HTMLInputElement).value)
    );
  }
  addPaddingLeft();
}

function addPaddingLeft() {
  if (props?.prepend) {
    setTimeout(() => {
      const width_prepend = prependEl?.offsetWidth || 0;

      inputEl.style.setProperty(
        'padding-left',
        `${width_prepend + 3}px`,
        'important'
      );
    }, 10);
  }
}

function onBlur(e: FocusEvent) {
  if (props.type === 'number') {
    innerType.value = 'string';
    const formattedValue = trimBetween((e.target as HTMLInputElement).value);
    emit('update:modelValue', formattedValue);
  }
}

defineExpose({
  focus,
  resetValidation,
});
</script>

<style lang="scss">
.input-with-prepend {
  .q-field__prepend {
    display: none;
  }
}

.input-with-prepend.q-field--focused,
.input-with-prepend.q-field--float {
  .q-field__prepend {
    display: block;
    position: absolute;
    font-size: 14px;
    height: 24px;
    top: 13px;
    color: $grey-1;
    letter-spacing: 0.2px;
    padding-right: 0px;
  }
}

.base-input {
  .q-field__control {
    border-radius: 12px;
    padding: 0px 16px;
    height: 48px;
  }
  .q-field__control:before {
    border: 1px solid $grey-7;
    border-radius: 12px;
  }

  .q-field__native {
    font-size: 14px;
    padding: 8px 0px !important;
  }

  .q-field__label {
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0.2px;
    color: $grey-1;
    top: 15px;
    padding: 0px 4px;
    transform: translateX(-4px);
    background-color: $white;
    z-index: 1;
  }

  .q-field__bottom {
    padding: 6px 0px 0px 0px;
  }
  .q-field--outlined .q-field__control:before {
    border-width: 2px;
  }
}
.q-field--float.base-input .q-field__label {
  transform: translateY(-128%) translateX(-7px) scale(1);
}

.q-field--disabled.base-input .q-field__control {
  background-color: $grey-14;
}
</style>
