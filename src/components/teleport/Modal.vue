<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">default header</slot>
          </div>
          <div class="modal-body">
            <slot name="body">default body</slot>
          </div>
          <div class="modal-footer">
            <slot name="footer">
              default footer
              <button class="modal-default-button" @click="$emit('close')">
                OK
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  name: 'CommonModal',
  props: {
    show: Boolean,
  },
}
</script>

<style>
.modal-mask {
  position: fixed;z-index: 9998;top: 0;left: 0;width: 100%;height: 100%;
  background-color: rgba(0, 0, 0, 0.5);display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {display: table-cell;vertical-align: middle;}
.modal-container {width: 300px;margin: 0px auto;padding: 20px 30px;
  background-color: #fff;border-radius: 2px;transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);border-radius: 10px;
}

.modal-header h3 {margin-top: 0;color: #42b983;}
.modal-body {margin: 20px 0;}
.modal-default-button {float: right;}
/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter-from {opacity: 0;}
.modal-leave-to {opacity: 0;}
.modal-enter-from .modal-container,.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);transform: scale(1.1);
}
.modal-default-button {
    --bs-blue: #446e9b;
    --bs-indigo: #6610f2;
    --bs-purple: #6f42c1;
    --bs-pink: #e83e8c;
    --bs-red: #cd0200;
    --bs-orange: #fd7e14;
    --bs-yellow: #d47500;
    --bs-green: #3cb521;
    --bs-teal: #20c997;
    --bs-cyan: #3399f3;
    --bs-black: #000;
    --bs-white: #fff;
    --bs-gray: #777;
    --bs-gray-dark: #333;
    --bs-gray-100: #f8f9fa;
    --bs-gray-200: #eee;
    --bs-gray-300: #dee2e6;
    --bs-gray-400: #ced4da;
    --bs-gray-500: #999;
    --bs-gray-600: #777;
    --bs-gray-700: #495057;
    --bs-gray-800: #333;
    --bs-gray-900: #2d2d2d;
    --bs-primary: #446e9b;
    --bs-secondary: #999;
    --bs-success: #3cb521;
    --bs-info: #3399f3;
    --bs-warning: #d47500;
    --bs-danger: #cd0200;
    --bs-light: #eee;
    --bs-dark: #333;
    --bs-primary-rgb: 68, 110, 155;
    --bs-secondary-rgb: 153, 153, 153;
    --bs-success-rgb: 60, 181, 33;
    --bs-info-rgb: 51, 153, 243;
    --bs-warning-rgb: 212, 117, 0;
    --bs-danger-rgb: 205, 2, 0;
    --bs-light-rgb: 238, 238, 238;
    --bs-dark-rgb: 51, 51, 51;
    --bs-white-rgb: 255, 255, 255;
    --bs-black-rgb: 0, 0, 0;
    --bs-body-color-rgb: 119, 119, 119;
    --bs-body-bg-rgb: 255, 255, 255;
    --bs-font-sans-serif: "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    --bs-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    --bs-gradient: linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0));
    --bs-body-font-family: var(--bs-font-sans-serif);
    --bs-body-font-size: 1rem;
    --bs-body-font-weight: 400;
    --bs-body-line-height: 1.5;
    --bs-body-color: #777;
    --bs-body-bg: #fff;
    --bs-border-width: 1px;
    --bs-border-style: solid;
    --bs-border-color: #dee2e6;
    --bs-border-color-translucent: rgba(0, 0, 0, 0.175);
    --bs-border-radius: 0.375rem;
    --bs-border-radius-sm: 0.25rem;
    --bs-border-radius-lg: 0.5rem;
    --bs-border-radius-xl: 1rem;
    --bs-border-radius-2xl: 2rem;
    --bs-border-radius-pill: 50rem;
    --bs-link-color: #3399f3;
    --bs-link-hover-color: #297ac2;
    --bs-code-color: #e83e8c;
    --bs-highlight-bg: #f6e3cc;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    box-sizing: border-box;
    margin: 0;
    text-transform: none;
    -webkit-appearance: button;
    --bs-btn-padding-x: 0.75rem;
    --bs-btn-padding-y: 0.375rem;
    --bs-btn-font-family: ;
    --bs-btn-font-size: 1rem;
    --bs-btn-font-weight: 400;
    --bs-btn-line-height: 1.5;
    --bs-btn-border-width: 1px;
    --bs-btn-border-radius: 0.375rem;
    --bs-btn-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075);
    --bs-btn-disabled-opacity: 0.65;
    --bs-btn-focus-box-shadow: 0 0 0 0.25rem rgba(var(--bs-btn-focus-shadow-rgb), .5);
    display: inline-block;
    padding: var(--bs-btn-padding-y) var(--bs-btn-padding-x);
    font-family: var(--bs-btn-font-family);
    font-size: var(--bs-btn-font-size);
    font-weight: var(--bs-btn-font-weight);
    line-height: var(--bs-btn-line-height);
    color: var(--bs-btn-color);
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    user-select: none;
    border-radius: var(--bs-btn-border-radius);
    background-color: var(--bs-btn-bg);
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    --bs-btn-color: #000;
    --bs-btn-bg: #eee;
    --bs-btn-border-color: #eee;
    --bs-btn-hover-color: #000;
    --bs-btn-hover-bg: #cacaca;
    --bs-btn-hover-border-color: #bebebe;
    --bs-btn-focus-shadow-rgb: 202, 202, 202;
    --bs-btn-active-color: #000;
    --bs-btn-active-bg: #bebebe;
    --bs-btn-active-border-color: #b3b3b3;
    --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    --bs-btn-disabled-color: #000;
    --bs-btn-disabled-bg: #eee;
    --bs-btn-disabled-border-color: #eee;
    text-shadow: -1px -1px 0 rgba(0, 0, 0, 0.1);
    background-image: linear-gradient(#f2f2f2, #eee 50%, #dbdbdb);
    filter: none;
    border: 1px solid #bebebe;
    cursor: pointer;
    margin-bottom: .25rem;
}

</style>